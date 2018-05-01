import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getCall } from '../lib/api';

class BookPreview extends Component {
    state = {
        book: {},
        averageRating: null
    }

    componentDidMount () {
        getCall(`/books/${this.props.bookId}`)
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
                        <p>{this.state.averageRating}/5</p>
                        {this.props.readingList ? <button id={this.state.book._id} onClick={this.props.readingListToCurrentlyReading}>Start reading</button> : null}
                        {this.props.currentlyReading ? <button id={this.state.book._id} onClick={this.props.currentlyReadingToRead}>Finished!</button> : null}
                    </div>
                </div>
            </article>
        )
    }
}

export default BookPreview;

