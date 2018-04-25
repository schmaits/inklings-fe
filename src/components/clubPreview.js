import React, { Component } from 'react';

import { getCall } from '../lib/api';

class ClubPreview extends Component {
    state = {
        currentlyReading: {}
    }

    componentDidMount () {
        getCall(`/books/${this.props.currentlyReading}`)
            .then(currentlyReading => {
                this.setState({
                    currentlyReading: currentlyReading.book[0]
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render () {
        const { name } = this.props;
        return (
            <div className="columns">
                <div className="column">
                    <img src={this.state.currentlyReading.coverImageUrl} alt={this.state.currentlyReading.title}/>
                </div>
                <div className="column">
                    <p className="title">{name}</p>
                    <p>Currently reading: {this.state.currentlyReading.title}</p>
                </div>
            </div>
        )
    }
}

export default ClubPreview;
