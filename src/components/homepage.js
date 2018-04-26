import React, { Component } from 'react';

import ClubPreview from './clubPreview';
import BookPreview from './bookPreview';
import { getCall } from '../lib/api';

class Homepage extends Component {
    state = {
        user: {
            currentlyReading: [],
            toRead: [],
            booksRead: []
        },
        quote: {},
        clubs: []
    }

    componentDidMount () {
        getCall('/users')
            .then(allUsers => {
                this.setState({
                    user: allUsers.allUsers[5]
                })
            })
            .then(() => {
                return getCall('/quotes')
            })
            .then(allQuotes => {
                this.setState({
                    quote: allQuotes.allQuotes[Math.floor(Math.random() * allQuotes.allQuotes.length)]
                })
            })
            .then(() => {
                return getCall(`/books/${this.state.quote.book}`)
            })
            .then(book => {
                const updatedQuote = Object.assign({bookTitle: book.book[0].title}, this.state.quote);
                this.setState({
                    quote: updatedQuote
                })
            })
            .then(() => {
                return getCall('/clubs')
            })
            .then(allClubs => {
                const usersClubs = allClubs.allClubs.filter(club => {
                    return club.members.includes(this.state.user._id)
                })
                return usersClubs;
            })
            .then(usersClubs => {
                this.setState({
                    clubs: usersClubs
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render () {
        return (
            <div>
                <div className="section columns">
                    <div className="column is-one-quarter">
                        <figure className="image is-128x128">
                            <img src={this.state.user.profilePictureUrl} alt={`${this.state.user.firstName} ${this.state.user.secondName}`}/>
                        </figure>              
                    </div>
                    <div className="column">
                        <p className="title">Hello {this.state.user.firstName}!</p>
                        <p>"{this.state.quote.body}"</p>
                        <p className="has-text-right">- {this.state.quote.bookTitle}</p>
                    </div>
                </div>
            
                <hr/>

                <div>
                    <div className="tile is-ancestor">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="is-size-5">Clubs</p>
                                {this.state.clubs.map(club => {
                                    return <ClubPreview
                                        key={club._id}
                                        id={club._id}
                                        currentlyReading={club.currentlyReading}
                                        name={club.name}
                                    />
                                })}
                            </div>
                        </div>                    
                    </div>
                </div>
                <div className="section">
                    <div className="tile is-ancestor">
                        <div className="tile is-parent is-3 box">
                            <div className="tile is-child">
                                <p className="is-size-5">Currently reading</p>
                                {this.state.user.currentlyReading.map(book => {
                                        return <BookPreview
                                            key={book}
                                            bookId={book}
                                            finishedButton={true}
                                        />
                                })}
                            </div>
                        </div>
                        <div className="tile is-vertical">
                            <div className="tile is-vertical box">
                                <div className="tile">
                                    <p className="is-size-5">To Read</p>
                                </div>
                                <div className="tile is-parent">
                                    {this.state.user.toRead.map(book => {
                                        return <div key={book} className="tile is-child">
                                            <BookPreview
                                                bookId={book}
                                                finishedButton={false}
                                            />
                                        </div>
                                        
                                    })}
                                </div>
                            </div>        
                            <div className="tile is-vertical box">
                                <div className="tile">
                                    <p className="is-size-5">Read</p>
                                </div>
                                <div className="tile is-parent">
                                    {this.state.user.booksRead.map(book => {
                                        return <div key={book} className="tile is-child">
                                            <BookPreview
                                                bookId={book}
                                                finishedButton={false}
                                            />
                                        </div>
                                    })}
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;
