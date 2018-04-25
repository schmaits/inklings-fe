import React, { Component } from 'react';

import { getCall } from '../lib/api';

class BookView extends Component {
    state = {
        book: {}
    }

    componentDidMount () {
        getCall(`/books/${this.props.match.params.bookId}`)
            .then(bookData => {
                this.setState({
                    book: bookData.book[0]
                })
            })
    }

    render () {
        console.log(this.state)
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
                    <div className="tile is-child box">Quotes from book</div>
                    <div className="tile is-child box">Recent comments</div>
                </div>
            </div>
        )
    }
}

export default BookView;
