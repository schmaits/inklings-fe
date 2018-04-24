import React, { Component } from 'react';
import { getCall } from '../lib/api';

class BookPreview extends Component {
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
        const { author, coverImageUrl, genres, rating, title } = this.state.book;
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image">
                        <img src={coverImageUrl} alt={title}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                        </div>
                    </div>
                    <div className="content">
                        <p>{author}</p>
                        <p>{rating}/5</p>
                        <p>{genres}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookPreview;
