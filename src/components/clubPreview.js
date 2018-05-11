import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pt from 'prop-types';

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
        const { name, clubId } = this.props;
        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-96x96">
                    <img src={this.state.currentlyReading.coverImageUrl} alt={this.state.currentlyReading.title}/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                    <p>
                        <Link to={`/clubs/${clubId}`}><strong className="has-text-black">{name}</strong></Link>
                        <br/>
                        Currently reading: 
                        <br/>
                        {this.state.currentlyReading.title}
                        <br/>
                        <br/>
                        <br/>
                    </p>
                    </div>
                </div>
            </article>
        )
    }
}

ClubPreview.propTypes = {
    clubId: pt.string.isRequired,
    currentlyReading: pt.string.isRequired,
    name: pt.string.isRequired
};

export default ClubPreview;