import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getCall } from '../lib/api';

class BookPreviewHorizontal extends Component {
    state = {
        book: {}
    }

    componentDidMount () {
        getCall(`/books/${this.props.bookId}`)
            .then(bookData => {
                this.setState({
                    book: bookData.book[0]
                })
            })
    }

    render () {
        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-96x96">
                    <img src={this.state.book.coverImageUrl} alt={this.state.book.title}/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <Link to={`/books/${this.state.book._id}`}><strong className="has-text-black">{this.state.book.title}</strong></Link>
                        <br/>
                        {this.state.book.author}
                        <p>{this.state.book.rating}/5</p>
                        <p>{this.state.book.genres}</p>
                    </div>
                </div>
            </article>
        )
    }
}

export default BookPreviewHorizontal;

