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
                this.setState({
                    books: bookData.allBooks
                })
            })
    }

    render () {
        return (
            <div className="container">
                <div className="columns is-multiline">
                    {this.state.books.map(book => {
                        return <div key={book._id} className="column is-quarter">
                            <div className="box">
                                <BookPreview 
                                    bookId={book._id}
                                    list='books'
                                    />
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default BookBrowse;
