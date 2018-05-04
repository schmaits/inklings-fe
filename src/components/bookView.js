import React, { Component } from 'react';
import faker from 'faker';

import { getCall, putCall } from '../lib/api';
import Comment from './comment';
import RatingGraphic from './ratingGraphic';

class BookView extends Component {
    state = {
        book: {},
        quotes: [],
        comments: [],
        currentUser: {
            toRead: []
        },
        averageRating: null,
        randomQuote: null
    }

    componentDidMount () {
        getCall(`/books/${this.props.match.params.bookId}`)
            .then(bookData => {
                this.setState({
                    book: bookData.book[0]
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
                    return quote.book === this.state.book._id
                })
                return bookQuotes;
            })
            .then(bookQuotes => {
                if (bookQuotes.length !== 0) {
                    this.setState({
                        quotes: bookQuotes,
                        randomQuote: faker.random.arrayElement(bookQuotes).body
                    })
                }  
            })
            .then(() => {
                return getCall(`/comments/books/${this.state.book._id}`)
            })
            .then(bookComments => {
                const sorted = bookComments.bookComments.sort((a, b) => {
                    let aDate = new Date(a.createdAt)
                    let bDate = new Date(b.createdAt)
                    if (aDate < bDate) return 1;
                    if (aDate > bDate) return -1;
                    return 0;
                });

                this.setState({
                    comments: sorted
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

        let updatedUser = Object.assign({}, this.state.currentUser)
        updatedUser.toRead.push(this.state.book._id)

        this.setState({
            currentUser: updatedUser
        })
        
        putCall(`/users/${this.state.currentUser._id}/toRead?update=add`, { bookId: this.state.book._id })
    }

    deleteCommentFromState = (comment) => {
        let updatedComments = this.state.comments.slice()
        updatedComments.splice(updatedComments.findIndex(commentObj => {
            return commentObj._id === comment}), 1);

        this.setState({
            comments: updatedComments
        })
    }

    render () {
        return (
            <div className="tile is-ancestor">
                <div className="tile is-parent is-vertical is-3">
                    <div className="tile is-child box">
                        <p className="has-text-dark heading-3">{this.state.book.title}</p>
                        <img src={this.state.book.coverImageUrl} alt={this.state.book.title}/>
                        <RatingGraphic 
                            aveRating={this.state.averageRating}
                            bookId={this.props.match.params.bookId}
                        />
                        { this.state.currentUser.toRead.includes(this.state.book._id) ? <p>This book is on your reading list</p> :
                        <button onClick={this.addToReadingList}>I want to read this book</button>
                        }
                    </div>
                    <div className="tile is-child box">
                        <p className="has-text-dark heading-3">Get this book</p>
                        <button onClick={() => {
                                    const searchQuery = this.state.book.title.split(' ').join('+');
                                    window.open(`https://www.waterstones.com/books/search/term/${searchQuery}`)
                                    }}>Buy a copy online</button>
                    </div>
                </div>
                <div className="tile is-parent is-vertical">
                    <div className="tile is-child box">
                        { this.state.quotes.length === 0 ? 
                            (<p className="has-text-centered">There are no quotes for this book yet!</p>) : 
                            (<div>
                                <p className="has-text-dark heading-3 has-text-centered">"{this.state.randomQuote}"</p>
                                <span className="icon is-size-3 is-pulled-right">
                                    <i onClick={() => {
                                    window.open(`https://twitter.com/intent/tweet?hashtags=inklings&text="${this.state.quote.body}" - ${this.state.quote.bookTitle}`, "", "width=600,height=300,top=50,left=500")
                                    }} className="fa fa-twitter-square"/>   
                                </span>
                            </div>) 
                        }
                    </div>
                    <div className="tile is-child box">
                        { this.state.comments.length === 0 ?
                            (<p className="has-text-centered">There are no comments for this book yet!</p>) : 
                            this.state.comments.map(comment => {
                                return (<Comment 
                                    key={comment._id}
                                    id={comment._id}
                                    body={comment.body}
                                    createdAt={comment.createdAt}
                                    userId={comment.user}
                                    clubId={comment.club}
                                    updateState={this.deleteCommentFromState}
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
