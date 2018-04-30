import React, { Component } from 'react';
import faker from 'faker';

import { getCall } from '../lib/api';
import MemberPreview from './memberPreview';
import AddComment from './addComment';
import Comment from './comment';

class ClubView extends Component {
    state = {
        club: {
            members: []
        },
        currentBook: {},
        quotes: [],
        currentBookComments: []
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
            .catch(err => {
                console.log(err);
            })
    }

    updateCurrentCommentsState = (newComment) => {
        const updatedComments = this.state.currentBookComments.concat(newComment);

        this.setState({
            currentBookComments: updatedComments
        })
    }

    render () {
        const { coverImageUrl, title, author, rating } = this.state.currentBook;
        return (
            <div className="container"> 
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-vertical is-3">
                        <div className="tile is-child box">
                            <p className="heading-3">Currently Reading</p>
                            <br/>
                            <img src={coverImageUrl} alt={title}/>
                            <p>{title}</p>
                            <p>{author}</p>
                            <p>{rating}/5</p>
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
                        <div className="tile is-child has-text-centered box">
                            { this.state.quotes.length === 0 ? 
                                (<p className="has-text-centered">There are no quotes for this book yet!</p>) : 
                                (<p className="heading-3">"{faker.random.arrayElement(this.state.quotes).body}"</p>) 
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
