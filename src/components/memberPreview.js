import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { getCall } from '../lib/api';

class MemberPreview extends Component {
    state = {
        user: {}
    }

    componentDidMount () {
        getCall(`/users/${this.props.userId}`)
            .then(userData => {
                this.setState({
                    user: userData.user[0]
                })
            })
    }

    render () {
        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-48x48">
                    <img src={this.state.user.profilePictureUrl} alt={`${this.state.user.firstName} ${this.state.user.secondName}`}/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                  {this.props.admin ? (<span className="icon has-text-warning">
                        <i className="fa fa-star"/>
                  </span>) : null}
                        <strong className="has-text-black">{this.state.user.username}</strong>
                        <br/>
                        <p>{this.state.user.firstName} {this.state.user.secondName}</p>
                    </div>
                </div>
            </article>
        )
    }
}

export default MemberPreview;

