import React, { Component } from 'react';
import moment from 'moment';

import { getCall } from '../lib/api';

class Comment extends Component {
    state = {
        username: '',
        userPicture: '',
        club: ''
    }

    componentDidMount () {
        getCall(`/clubs/${this.props.clubId}`)
            .then(clubInfo => {
                this.setState({
                    club: clubInfo.club.name
                })
            })
            .then(() => {
                return getCall(`/users/${this.props.userId}`)
            })
            .then(userInfo => {
                this.setState({
                    username: userInfo.user[0].username,
                    userPicture: userInfo.user[0].profilePictureUrl
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render () {
        const { body, createdAt } = this.props;
        const relativeTime = moment(createdAt).fromNow();
        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                    <img src={this.state.userPicture} alt={this.state.username}/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                    <p>
                        <strong>{this.state.username}</strong> <small>{this.state.club}</small> <small>{relativeTime}</small>
                        <br/>
                        {body}
                    </p>
                    </div>
                </div>
                <div className="media-right">
                    <button className="delete"></button>
                </div>
            </article>
        )
    }
}

export default Comment;
