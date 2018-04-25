import React, { Component } from 'react';

class Comment extends Component {
    render () {
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
                        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                        <br/>>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
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
