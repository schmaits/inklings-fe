import React, { Component } from 'react';

import { getCall } from '../lib/api';

class ClubPreview extends Component {
    state = {
        currentlyReading: {}
    }

    componentDidMount () {
        getCall(`/books/${this.props.currentlyReading}`)
            .then(currentlyReading => {
                this.setState({
                    currentlyReading: currentlyReading.book[0]
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render () {
        const { name } = this.props;
        return (
            // <div className="columns">
            //     <div className="column">
            //         <img src={this.state.currentlyReading.coverImageUrl} alt={this.state.currentlyReading.title}/>
            //     </div>
            //     <div className="column">
            //         <p className="title">{name}</p>
            //         <p>Currently reading: {this.state.currentlyReading.title}</p>
            //     </div>
            // </div>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-96x96">
                    <img src={this.state.currentlyReading.coverImageUrl}/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                    <p>
                        <strong>{name}</strong>
                        <br/>
                        Currently reading: 
                        <br/>
                        {this.state.currentlyReading.title}
                    </p>
                    </div>
                </div>
            </article>
        )
    }
}

export default ClubPreview;


{/* <article className="media">
  <figure className="media-left">
    <p className="image is-64x64">
      <img src={this.state.currentlyReading.coverImageUrl}/>
    </p>
  </figure>
  <div className="media-content">
    <div className="content">
      <p>
        <strong>{name}</strong>
        <br/>
        Currently reading: {this.state.currentlyReading.title}
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
</article> */}