import React, { Component } from 'react';
import moment from 'moment';

import { getCall } from '../lib/api';

class Comment extends Component {
    state = {
        username: '',
        club: ''
    }

    componentDidMount () {
        getCall(`/users/${this.props.userId}`)
            .then(userInfo => {
                console.log(userInfo)
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
                    <img src="https://bulma.io/images/placeholders/128x128.png"/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                    <p>
                        <strong>John Smith</strong> <small>@johnsmith</small> <small>{relativeTime}</small>
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
