import React from 'react';

const RatingGraphic = (props) => {
    const { aveRating } = props;
    const yellowStar = "has-text-warning fa fa-star";
    const hollowStar = "fa fa-star"
    return (
        <div>
            <span className="icon">
                <i className={ aveRating >= 1 ? yellowStar : hollowStar}/>
                <i className={ aveRating >= 2 ? yellowStar : hollowStar}/>
                <i className={ aveRating >= 3 ? yellowStar : hollowStar}/>
                <i className={ aveRating >= 4 ? yellowStar : hollowStar}/>
                <i className={ aveRating >= 5 ? yellowStar : hollowStar}/>
            </span>
        </div>
    )
}

export default RatingGraphic;
