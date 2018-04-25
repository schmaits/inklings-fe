import React, { Component } from 'react';

import { getCall } from '../lib/api';

class BookView extends Component {
    render () {
        return (
            <div className="tile is-ancestor box">
                <div className="tile is-parent is-vertical box">
                    <div className="tile is-child box">Picture, rating</div>
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
