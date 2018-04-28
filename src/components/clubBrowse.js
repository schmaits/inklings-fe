import React, { Component } from 'react';
import chunk from 'chunk';

import ClubPreview from './clubPreview';
import { getCall } from '../lib/api';

class ClubsBrowse extends Component {
    state = {
        clubs: []
    }

    componentDidMount () {
        getCall('/clubs')
            .then(allClubs => {
                this.setState({
                    clubs: allClubs.allClubs
                })
            })
    }    

    render () {
        return (
            <div className="tile is-ancestor is-vertical">
                {chunk(this.state.clubs, 4).map(chunk => {
                    return <div className="tile is-parent">
                        {chunk.map(club => {
                            return <div key={club._id} className="tile is-child">
                                <ClubPreview
                                    id={club._id}
                                    currentlyReading={club.currentlyReading}
                                    name={club.name}
                                />
                            </div>
                        })}
                    </div>
                })}
            </div>
        )
    }
}

export default ClubsBrowse;