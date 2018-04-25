import React, { Component } from 'react';
import faker from 'faker';

import { getCall } from '../lib/api';

class BookView extends Component {
    state = {
        book: {},
        quotes: []
    }

    componentDidMount () {
        getCall(`/books/${this.props.match.params.bookId}`)
            .then(bookData => {
                this.setState({
                    book: bookData.book[0]
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
                this.setState({
                    quotes: bookQuotes
                })
            })
            .catch(err => {
                if (err) console.log(err);
            });
    }

    render () {
        console.log(this.state.quote)
        return (
            <div className="tile is-ancestor box">
                <div className="tile is-parent is-vertical box is-3">
                    <div className="tile is-child box">
                        <img src={this.state.book.coverImageUrl}/>
                        <p>{this.state.book.rating}/5</p>
                    </div>
                    <div className="tile is-child box">Clubs reading</div>
                </div>
                <div className="tile is-parent is-vertical box">
                    <div className="tile is-child box has-text-centered">
                        { this.state.quotes.length === 0 ? (<p>There are no quotes for this book yet!</p>) : (
                            <p>"{faker.random.arrayElement(this.state.quotes).body}"</p>) }
                    </div>
                    <div className="tile is-child box">Recent comments</div>
                </div>
            </div>
        )
    }
}

export default BookView;
