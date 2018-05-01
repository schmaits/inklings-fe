import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';

import { getCall, putCall } from '../lib/api';
import MemberPreview from './memberPreview';
import AddComment from './addComment';
import Comment from './comment';
import RatingGraphic from './ratingGraphic';

class ClubView extends Component {
    state = {
        club: {
            members: [],
            admin: ''
        },
        currentBook: {},
        quotes: [],
        currentBookComments: [],
        currentUser: '',
        averageRating: null,
        randomQuote: null
    }

    componentDidMount () {
        getCall(`/clubs/${this.props.match.params.clubId}`)
            .then(clubData => {
                this.setState({
                    club: clubData.club
                });
            })
            .then(() => {
                return getCall(`/books/${this.state.club.currentlyReading}`)
            })
            .then(bookData => {
                this.setState({
                    currentBook: bookData.book[0]
                })

                const sum = bookData.book[0].rating.reduce((x, y) => x + y);
                const ave = Math.round(sum / bookData.book[0].rating.length);
                
                this.setState({
                    averageRating: ave
                })
            })
            .then(() => {
                return getCall('/quotes')
            })
            .then(quotesData => {
                const bookQuotes = quotesData.allQuotes.filter(quote => {
                    return quote.book === this.state.currentBook._id
                })
                return bookQuotes;
            })
            .then(bookQuotes => {
                this.setState({
                    quotes: bookQuotes
                })
            })
            .then(() => {
                this.setState({
                    randomQuote: faker.random.arrayElement(this.state.quotes).body
                })
            })
            .then(() => {
                return getCall(`/comments/clubs/${this.state.club._id}`)
            })
            .then(clubComments => {
                const currentBookComments = clubComments.clubComments.filter(comment => {
                    return comment.book === this.state.currentBook._id
                })
                return currentBookComments;
            })
            .then(currentBookComments => {
                this.setState({
                    currentBookComments
                })
            })
            .then(() => {
                return getCall('/users')
            })
            .then(allUsers => {
                this.setState({
                    currentUser: allUsers.allUsers[5]._id
                }) 
            })
            .catch(err => {
                this.props.history.push('/404')
            })
    }

    updateCurrentCommentsState = (newComment) => {
        const updatedComments = this.state.currentBookComments.concat(newComment);

        this.setState({
            currentBookComments: updatedComments
        })
    }

    joinClub = (event) => {
        event.preventDefault();

        let updatedClub = Object.assign({}, this.state.club);
        updatedClub.members = this.state.club.members.concat(this.state.currentUser);

        this.setState({
            club: updatedClub
        })

        putCall(`/clubs/${this.props.match.params.clubId}/users?update=add`, {userId: this.state.currentUser})
    }

    leaveClub = (event) => {
        event.preventDefault();

        let updatedClub = Object.assign({}, this.state.club);
        updatedClub.members.splice(this.state.club.members.indexOf(this.state.currentUser), 1);

        this.setState({
            club: updatedClub
        })

        putCall(`/clubs/${this.props.match.params.clubId}/users?update=remove`, {userId: this.state.currentUser})
    }


    render () {
        const { coverImageUrl, title, author } = this.state.currentBook;
        return (
            <div className="container"> 
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-vertical is-3">
                        <div className="tile is-child box">
                            <p className="heading-3">Currently Reading</p>
                            <br/>
                            <img src={coverImageUrl} alt={title}/>
                            <Link to={`/books/${this.state.currentBook._id}`}>{title}</Link>
                            <p>{author}</p>
                            <RatingGraphic
                                aveRating={this.state.averageRating}
                                bookId={this.state.currentBook._id}
                            />
                        </div>
                        <div className="tile is-child box">
                            <p className="heading-3">Members</p>
                            <br/>
                            {this.state.club.admin ? 
                                (<MemberPreview 
                                    userId={this.state.club.admin}
                                    admin={true}
                                />) : (<p>There are no members</p>)
                            }
                            {this.state.club.members.map(member => {
                                return <MemberPreview
                                    key={member}
                                    userId={member}
                                    admin={false}
                                />
                            })}
                        </div>
                    </div>
                    <div className="tile is-parent is-vertical">
                        <div className="tile is-child box">
                            <p className="heading-3">{this.state.club.name}</p>
                            <p>{this.state.club.summary}</p>
                            <div className="has-text-right">
                                {this.state.club.members.includes(this.state.currentUser) ?
                                    <button onClick={this.leaveClub}>Leave this club</button> : 
                                    <button onClick={this.joinClub}>Join this club</button>
                                }
                            </div>
                        </div>
                        <div className="tile is-child has-text-centered box">
                            { this.state.quotes.length === 0 ? 
                                (<p className="has-text-centered">There are no quotes for this book yet!</p>) : 
                                (<div> 
                                    <p className="heading-3">"{faker.random.arrayElement(this.state.quotes).body}"</p>
                                    <span className="icon is-size-3 is-pulled-right">
                                        <i onClick={() => {window.open(`https://twitter.com/intent/tweet?hashtags=inklings&text="${this.state.randomQuote}" - ${this.state.currentBook.title}`)}} className="fa fa-twitter-square"/>
                                    </span>
                                </div>) 
                            }
                        </div>
                        <div className="tile is-child box">
                            <AddComment
                                clubId={this.state.club._id}
                                bookId={this.state.currentBook._id}
                                updateState={this.updateCurrentCommentsState}
                            />
                        </div>
                        <div className="tile is-child box">
                            <p className="heading-3">Discussion board</p>
                            {this.state.currentBookComments.map(comment => {
                                return <div key={comment._id}>
                                    <Comment
                                        body={comment.body}
                                        createdAt={comment.createdAt}
                                        userId={comment.user}
                                        clubId={this.state.club._id}
                                    />
                                    <hr/>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClubView;
