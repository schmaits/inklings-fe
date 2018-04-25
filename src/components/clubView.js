import React, { Component } from 'react';

import { getCall } from '../lib/api';

class ClubView extends Component {
    state = {
        club: {}
    }

    componentDidMount () {
        getCall(`/clubs/${this.props.match.params.clubId}`)
            .then(clubData => {
                this.setState({
                    club: clubData.club
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render () {
        console.log(this.state.club)
        return (
            <div className="tile is-ancestor box">
                <div className="tile is-parent is-vertical box">
                    <div className="tile is-child box">Currently reading, picture, rating</div>
                    <div className="tile is-child box">Member list, member preview card</div>
                </div>
                <div className="tile is-parent is-vertical box">
                    <div className="tile is-child box">Quotes from current book</div>
                    <div className="tile is-child box">Discussion board</div>
                </div>
            </div>
        )
    }
}

export default ClubView;
