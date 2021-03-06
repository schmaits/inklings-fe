import React, { Component } from 'react';
import pt from 'prop-types';
import moment from 'moment';

import { getCall, deleteCall } from '../lib/api';

import '../App.css';

class Comment extends Component {
    state = {
        userId: '',
        username: '',
        userPicture: '',
        club: '',
        currentUser: ''
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
                    userId: userInfo.user[0]._id,
                    username: userInfo.user[0].username,
                    userPicture: userInfo.user[0].profilePictureUrl
                })
            })
            .then(() => {
                return getCall('/users')
            })
            .then(allUsers => {
                this.setState({
                    currentUser: allUsers.allUsers[5]._id
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    deleteComment = (event) => {
        event.preventDefault();

        this.props.updateState(this.props.id);

        deleteCall(`/comments/${this.props.id}/users/${this.state.currentUser}`)
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
                    <div className="content comment">
                    <p>
                        <strong>{this.state.username}</strong> <small> to {this.state.club}</small> <small>{relativeTime}</small>
                        <br/>
                        {body}
                    </p>
                    </div>
                </div>
                <div className="media-right">
                    { this.state.userId === this.state.currentUser ? <button className="delete" onClick={this.deleteComment}></button> : null }
                </div>
            </article>
        )
    }
}

Comment.propTypes = {
    id: pt.string.isRequired,
    body: pt.string.isRequired,
    createdAt: pt.string.isRequired,
    userId: pt.string.isRequired,
    clubId: pt.string.isRequired,
    updateState: pt.func.isRequired
}

export default Comment;
