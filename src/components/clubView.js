import React, { Component } from 'react';
import faker from 'faker';

import { getCall } from '../lib/api';
import MemberPreview from './memberPreview';

class ClubView extends Component {
    state = {
        club: {
            members: []
        },
        currentBook: {},
        quotes: []
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
            .catch(err => {
                console.log(err);
            })
    }

    render () {
        const { coverImageUrl, title, author, rating } = this.state.currentBook;
        return (
            <div className="tile is-ancestor box">
                <div className="tile is-parent is-vertical is-3 box">
                    <div className="tile is-child box">
                        <p>Currently Reading</p>
                        <img src={coverImageUrl} alt={title}/>
                        <p>{title}</p>
                        <p>{author}</p>
                        <p>{rating}/5</p>
                    </div>
                    <div className="tile is-child box">
                        <p>Members</p>
                        {this.state.club.admin ? 
                            (<MemberPreview 
                                userId={this.state.club.admin}
                                admin={true}
                            />) : (<p>There are no members</p>)
                        }
                        {this.state.club.members.map(member => {
                            return <MemberPreview
                                userId={member}
                                admin={false}
                            />
                        })}
                    </div>
                </div>
                <div className="tile is-parent is-vertical box">
                    <div className="tile is-child box has-text-centered">
                        { this.state.quotes.length === 0 ? 
                            (<p className="has-text-centered">There are no quotes for this book yet!</p>) : 
                            (<p>"{faker.random.arrayElement(this.state.quotes).body}"</p>) 
                        }
                    </div>
                    <div className="tile is-child box">Discussion board</div>
                </div>
            </div>
        )
    }
}

export default ClubView;
