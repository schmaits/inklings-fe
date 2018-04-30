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
        return (
            <div>
                {this.state.books.map(book => {
                    return <div key={book._id} className="tile box">
                        <BookPreview 
                            bookId={book._id}
                        />
                    </div>
                })}
            </div>
        )
    }
}

export default BookBrowse;
