import React, { Component } from 'react';
import faker from 'faker';
import chunk from 'chunk';

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
            <div className="columns">
                {chunk(this.state.books, 4).map(chunk => {
                    return <div key={faker.lorem.words()} >
                        {chunk.map(book => {
                            return <div key={book._id} className="column">
                                <div className="box">
                                    <BookPreview 
                                        bookId={book._id}
                                    />
                                </div>
                            </div>
                        })}
                    </div>
                })}
            </div>
        )
    }
}

export default BookBrowse;
