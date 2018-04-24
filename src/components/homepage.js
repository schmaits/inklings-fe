import React, { Component } from 'react';

class Homepage extends Component {
    render () {
        return (
            <div>
                <div className="section columns">
                    <div className="column is-one-quarter">
                        <p>Profile Picture</p>                
                    </div>
                    <div className="column">
                        <p>Hello NAME!</p>
                        <p>Quote</p>
                    </div>
                </div>
            
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-2">
                        <div className="tile is-child">
                            <p>Currently reading</p>
                            <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Book 1</p>
                                </div>
                                </div>

                                <div className="content">
                                    Book 1 info
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Book 1</p>
                                </div>
                                </div>

                                <div className="content">
                                    Book 1 info
                                </div>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="tile is-parent is-10 is-vertical">
                        <div className="tile is-child">
                            <p>Clubs</p>
                            <div className="level">
                            <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Book 1</p>
                                </div>
                                </div>

                                <div className="content">
                                    Book 1 info
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Book 1</p>
                                </div>
                                </div>

                                <div className="content">
                                    Book 1 info
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Book 1</p>
                                </div>
                                </div>

                                <div className="content">
                                    Book 1 info
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                        <div className="tile is-child">
                            <p>To Read</p>
                        </div>
                        <div className="tile is-child">
                            <p>Read</p>
                        </div>
                    </div>
                </div>


                {/* <h1>Currently reading...</h1>
                <div className="section columns">
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Book 1</p>
                                </div>
                                </div>

                                <div className="content">
                                    Book 1 info
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                    <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Book 2</p>
                                </div>
                                </div>

                                <div className="content">
                                    Book 2 info
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                    <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Book 3</p>
                                </div>
                                </div>

                                <div className="content">
                                    Book 3 info
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Your clubs</h1>
                <div className="section columns">
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Book 1</p>
                                </div>
                                </div>

                                <div className="content">
                                    Book 1 info
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                    <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Book 2</p>
                                </div>
                                </div>

                                <div className="content">
                                    Book 2 info
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                    <p>Rating</p>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">Club 3</p>
                                </div>
                                </div>

                                <div className="content">
                                    Club 3 info
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Homepage;
