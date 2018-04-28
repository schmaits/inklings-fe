import React, { Component } from 'react';
import chunk from 'chunk';
import faker from 'faker'

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
                    return <div key={faker.lorem.words()}className="tile is-parent">
                        <hr/>
                        {chunk.map(club => {
                            return <div key={club._id}className="tile is-child is-3">
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