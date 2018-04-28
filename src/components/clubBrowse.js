import React, { Component } from 'react';

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
            <div>
                {this.state.clubs.map(club => {
                    return <ClubPreview
                        key={club._id}
                        id={club._id}
                        currentlyReading={club.currentlyReading}
                        name={club.name}
                    />
                })}
            </div>
        )
    }
}

export default ClubsBrowse;