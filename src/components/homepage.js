import React, { Component } from 'react';

import BookPreview from './bookPreview';
import { getCall } from '../lib/api';

class Homepage extends Component {
    state = {
        user: {},
        quote: {},
        currentlyReading: []
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
                return getCall(`/books/${this.state.user.currentlyReading}`)
            })
            .then(currentlyReading => {
                this.setState({
                    currentlyReading: currentlyReading.book
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
                        <p>{this.state.quote.body}</p>
                        <p className="has-text-left">- {this.state.quote.bookTitle}</p>
                    </div>
                </div>

                <div className="section">
                    <div className="tile is-ancestor">
                        <div className="tile is-parent is-3">
                            <div className="tile is-child">
                                <p className="is-size-4">Currently reading</p>
                                {this.state.currentlyReading.map(book => {
                                    const { author, coverImageUrl, genres, rating, title, _id } = book; 
                                    return <BookPreview 
                                        key={_id}
                                        title={title} 
                                        author={author}
                                        coverImageUrl={coverImageUrl}
                                        genres={genres}
                                        rating={rating}
                                    />
                                })}
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


            </div>
        )
    }
}

export default Homepage;
