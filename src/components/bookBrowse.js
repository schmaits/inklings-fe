import React, { Component } from 'react';

import { getCall } from '../lib/api';

import BookPreview from './bookPreview';

class BookBrowse extends Component {
    state = {
        books: []
    }

    componentDidMount () {
        getCall('/books')
            .then(bookData => {
                console.log(bookData.allBooks[0])
                this.setState({
                    books: bookData.allBooks
                })
            })
    }

    render () {
        const firstHalf = this.state.books.slice(0, Math.floor(this.state.books.length) / 2);
        const secondHalf = this.state.books.slice(Math.floor(this.state.books.length) / 2);
        return (
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className="tile is-parent is-vertical">
                            {firstHalf.map(book => {
                                return <div key={book._id} className="tile is-child box">
                                    <BookPreview 
                                        bookId={book._id}
                                    />
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="column">
                        <div className="tile is-parent is-vertical">
                            {secondHalf.map(book => {
                                return <div key={book._id} className="tile is-child box">
                                    <BookPreview 
                                        bookId={book._id}
                                    />
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookBrowse;
