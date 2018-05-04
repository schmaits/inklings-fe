import React, { Component } from 'react';

import { putCall } from '../lib/api';

class RatingGraphic extends Component {
    state = {
        tempRating: this.props.aveRating,
        vote: undefined
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            tempRating: nextProps.aveRating
        })
    }

    onHover = (event) => {
        if(!this.state.vote)
        this.setState({
            tempRating: event.target.id
        })
    }

    onMouseOff = (event) => {
        if(!this.state.vote)
        this.setState({
            tempRating: this.props.aveRating
        })
    }

    vote = (event) => {
        event.preventDefault();

        this.setState({
            vote: event.target.id,
            tempRating: event.target.id
        })

        return putCall(`/books/${this.props.bookId}`, { addedRating: event.target.id });
    }
    
    render () {
        const yellowStar = "has-text-warning fa fa-star";
        const hollowStar = "fa fa-star"
        return (
            <div className="has-text-centered">
                <span className="icon is-size-5">
                    <i id="1" onClick={this.vote} onMouseOut={this.onMouseOff} onMouseOver={this.onHover} className={ this.state.tempRating >= 1 ? yellowStar : hollowStar}/>
                    <i id="2" onClick={this.vote} onMouseOut={this.onMouseOff} onMouseOver={this.onHover} className={ this.state.tempRating >= 2 ? yellowStar : hollowStar}/>
                    <i id="3" onClick={this.vote} onMouseOut={this.onMouseOff} onMouseOver={this.onHover} className={ this.state.tempRating >= 3 ? yellowStar : hollowStar}/>
                    <i id="4" onClick={this.vote} onMouseOut={this.onMouseOff} onMouseOver={this.onHover} className={ this.state.tempRating >= 4 ? yellowStar : hollowStar}/>
                    <i id="5" onClick={this.vote} onMouseOut={this.onMouseOff} onMouseOver={this.onHover} className={ this.state.tempRating >= 5 ? yellowStar : hollowStar}/>
                </span>
            </div>
        )
    }

}

export default RatingGraphic;
