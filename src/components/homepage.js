import React, { Component } from 'react';

import { getCall } from '../lib/api';

class Homepage extends Component {
    state = {
        user: {},
        quote: {
            body: '',
            book: '',
            bookTitle: ''
        }
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
                        <img src={this.state.user.profilePictureUrl} alt={this.state.user.firstName}/>
                        </figure>               
                    </div>
                    <div className="column">
                        <p className="title">Hello {this.state.user.firstName}!</p>
                        <p>"{this.state.quote.body}"</p>
                        <p className="has-text-right">- {this.state.quote.bookTitle}</p>
                    </div>
                </div>
            
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-2">
                        <div className="tile is-child">
                            <p>Currently reading</p>
                            <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Book 1</p>
                                </div>
                                </div>

                                <div className="content">
                                    Book 1 info
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Book 1</p>
                                </div>
                                </div>

                                <div className="content">
                                    Book 1 info
                                </div>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="tile is-parent is-10 is-vertical">
                        <div className="tile is-child">
                            <p>Clubs</p>
                            <div className="level">
                            <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Book 1</p>
                                </div>
                                </div>

                                <div className="content">
                                    Book 1 info
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Book 1</p>
                                </div>
                                </div>

                                <div className="content">
                                    Book 1 info
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Book 1</p>
                                </div>
                                </div>

                                <div className="content">
                                    Book 1 info
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                        <div className="tile is-child">
                            <p>To Read</p>
                        </div>
                        <div className="tile is-child">
                            <p>Read</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;
