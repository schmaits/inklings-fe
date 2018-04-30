import React, { Component } from 'react';

import ClubPreview from './clubPreview';
import BookPreview from './bookPreview';
import { getCall, putCall } from '../lib/api';

import '../App.css';

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

    readingListToCurrentlyReading = (event) => {
        event.preventDefault();

        const bookId = event.target.id;

        let updatedUser = Object.assign({}, this.state.user);
        updatedUser.currentlyReading.push(bookId);
        updatedUser.toRead.splice(updatedUser.toRead.indexOf(bookId), 1)

        this.setState({
            user: updatedUser
        });

        putCall(`/users/${this.state.user._id}/currentlyReading?update=add`, { bookId: bookId})
            .then(() => {
                return putCall(`/users/${this.state.user._id}/toRead?update=remove`, { bookId: bookId })
            })
            .catch(err => {
                throw err;
            })
    }

    render () {
        return (
            <div className="container">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <div className="tile is-child is-2 box">
                            <figure className="image is-clearfix is-128x128">
                                <img className="profile-picture" src={this.state.user.profilePictureUrl} alt={`${this.state.user.firstName} ${this.state.user.secondName}`}/>
                            </figure>              
                        </div>
                        <div className="tile is-child box">
                            <p className="title has-text-dark">Hello {this.state.user.firstName}!</p>
                            <p className="has-text-dark heading-3">"{this.state.quote.body}"</p>
                            <p className="has-text-right has-text-dark heading-3">- {this.state.quote.bookTitle}</p>
                        </div>
                    </div>
                </div>

                <br/>

                <div className="tile is-ancestor is-vertical">
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="heading-3">Clubs</p>
                            <div className="tile is-parent">
                                {this.state.clubs.map(club => {
                                    return <div key={club._id} className="tile is-child">
                                        <ClubPreview
                                            id={club._id}
                                            currentlyReading={club.currentlyReading}
                                            name={club.name}
                                        />
                                    </div>                    
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <div>
                    <div className="tile is-ancestor">
                        <div className="tile is-parent is-3">
                            <div className="tile is-child box">
                                <p className="heading-3">Currently reading</p>
                                <div className="tile is-parent is-vertical">
                                    {this.state.user.currentlyReading.map(book => {
                                            return <div key={book} className="tile is-child">
                                                <BookPreview
                                                    bookId={book}
                                                />
                                            </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="tile is-parent is-vertical">
                            <div className="tile is-child box">
                                <p className="heading-3">To Read</p>
                                <div className="tile is-parent">
                                    {this.state.user.toRead.map(book => {
                                        return <div key={book} className="tile is-child">
                                            <BookPreview
                                                bookId={book}
                                                readingList={true}
                                                readingListToCurrentlyReading={this.readingListToCurrentlyReading}
                                            />
                                        </div>
                                    })}  
                                </div>
                            </div>
                            <div className="tile is-child box">
                                    <p className="heading-3">Read</p>
                                    <div className="tile is-parent">
                                        {this.state.user.booksRead.map(book => {
                                            return <div key={book} className="tile is-child">
                                                <BookPreview
                                                    bookId={book}
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
