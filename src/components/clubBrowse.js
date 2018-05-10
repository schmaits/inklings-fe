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
            <div className="container">
                <div className="columns is-multiline">
                    {this.state.clubs.map(club=> {
                        return <div key={club._id} className="column is-quarter">
                            <div className="box">
                                <ClubPreview
                                    id={club._id}
                                    currentlyReading={club.currentlyReading}
                                    name={club.name}
                                />
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default ClubsBrowse;