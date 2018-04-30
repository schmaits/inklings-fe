import React, { Component } from 'react';
import faker from 'faker';

import { getCall, putCall } from '../lib/api';
import Comment from './comment';

class BookView extends Component {
    state = {
        book: {},
        quotes: [],
        comments: [],
        currentUser: {
            toRead: []
        }
    }

    componentDidMount () {
        getCall(`/books/${this.props.match.params.bookId}`)
            .then(bookData => {
                this.setState({
                    book: bookData.book[0]
                })
            })
            .then(() => {
                return getCall('/quotes')
            })
            .then(quotesData => {
                const bookQuotes = quotesData.allQuotes.filter(quote => {
                    return quote.book === this.state.book._id
                })
                return bookQuotes;
            })
            .then(bookQuotes => {
                this.setState({
                    quotes: bookQuotes
                })
            })
            .then(() => {
                return getCall(`/comments/books/${this.state.book._id}`)
            })
            .then(bookComments => {
                this.setState({
                    comments: bookComments.bookComments
                })
            })
            .then(() => {
                return getCall('/users')
            })
            .then(allUsers => {
                this.setState({
                    currentUser: allUsers.allUsers[5]
                })
            })
            .catch(err => {
                this.props.history.push('/404');
            });
    }

    addToReadingList = (event) => {
        event.preventDefault();
        
        putCall(`/users/${this.state.currentUser._id}/toRead?update=add`, { bookId: this.state.book._id })
    }

    render () {
        return (
            <div className="tile is-ancestor">
                <div className="tile is-parent is-vertical is-3">
                    <div className="tile is-child box">
                        <img src={this.state.book.coverImageUrl} alt={this.state.book.title}/>
                        <p>{this.state.book.rating}/5</p>
                        { this.state.currentUser.toRead.includes(this.state.book._id) ? <p>This book is on your reading list</p> :
                        <button onClick={this.addToReadingList}>I want to read this book</button>
                        }
                    </div>
                    <div className="tile is-child box">Clubs reading</div>
                </div>
                <div className="tile is-parent is-vertical">
                    <div className="tile is-child box">
                        { this.state.quotes.length === 0 ? 
                            (<p className="has-text-centered">There are no quotes for this book yet!</p>) : 
                            (<p>"{faker.random.arrayElement(this.state.quotes).body}"</p>) 
                        }
                    </div>
                    <div className="tile is-child box">
                        { this.state.comments.length === 0 ?
                            (<p className="has-text-centered">There are no comments for this book yet!</p>) : 
                            this.state.comments.map(comment => {
                                return (<Comment 
                                    key={comment._id}
                                    body={comment.body}
                                    createdAt={comment.createdAt}
                                    userId={comment.user}
                                    clubId={comment.club}
                                />);
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default BookView;
