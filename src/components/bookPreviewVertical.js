import React, { Component } from 'react';
import { getCall, putCall } from '../lib/api';

class BookPreviewVertical extends Component {
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

    moveToRead = (event) => {
        event.preventDefault();
        putCall(`/users/${this.props.user}/booksRead`, { bookId: this.props.bookId })
            .then(

            )
    }

    render () {
        const { author, coverImageUrl, genres, rating, title } = this.state.book;
        return (
           <div className="">
           </div>
        )
    }
}

export default BookPreviewVertical;


{/* <div className="card">
<div className="card-image level">
    <figure className="image is-96x96">
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
        <a className="button" onClick={this.moveToRead} >Finished</a>
    </div>
</div>
</div> */}