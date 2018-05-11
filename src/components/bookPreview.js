import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pt from 'prop-types';

import RatingGraphic from './ratingGraphic';

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
                        <RatingGraphic 
                            aveRating={this.state.averageRating}
                            bookId={this.props.bookId}
                        />
                        {this.props.list === 'readingList' ? 
                            <button id={this.state.book._id} onClick={this.props.moveList}>Start reading</button> :
                        this.props.list === 'currentlyReading' ? 
                            <button id={this.state.book._id} onClick={this.props.moveList}>Finished!</button> : 
                        null}
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </div>
            </article>
        )
    }
}

BookPreview.propTypes = {
    bookId: pt.string.isRequired,
    list: pt.string.isRequired,
    moveList: pt.func,
}

export default BookPreview;

