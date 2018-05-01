import React, { Component } from 'react';

class RatingGraphic extends Component {
    state = {
        tempRating: this.props.aveRating
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            tempRating: nextProps.aveRating
        })
    }

    onHover = (event) => {
        this.setState({
            tempRating: event.target.id
        })
    }

    onMouseOff = (event) => {
        this.setState({
            tempRating: this.props.aveRating
        })
    }
    
    render () {
        const yellowStar = "has-text-warning fa fa-star";
        const hollowStar = "fa fa-star"
        return (
            <div>
                <span className="icon has-size-5">
                    <i id="1" onMouseOut={this.onMouseOff} onMouseOver={this.onHover} className={ this.state.tempRating >= 1 ? yellowStar : hollowStar}/>
                    <i id="2" onMouseOut={this.onMouseOff} onMouseOver={this.onHover} className={ this.state.tempRating >= 2 ? yellowStar : hollowStar}/>
                    <i id="3" onMouseOut={this.onMouseOff} onMouseOver={this.onHover} className={ this.state.tempRating >= 3 ? yellowStar : hollowStar}/>
                    <i id="4" onMouseOut={this.onMouseOff} onMouseOver={this.onHover} className={ this.state.tempRating >= 4 ? yellowStar : hollowStar}/>
                    <i id="5" onMouseOut={this.onMouseOff} onMouseOver={this.onHover} className={ this.state.tempRating >= 5 ? yellowStar : hollowStar}/>
                </span>
            </div>
        )
    }

}

export default RatingGraphic;
