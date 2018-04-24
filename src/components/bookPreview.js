import React from 'react';

const BookPreview = (props) => {
    const { author, coverImageUrl, genres, rating, title } = props;
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={coverImageUrl} alt={title}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    {/* <div className="media-left">
                        <figure className="image is-48x48">
                            <p>Rating</p>
                        </figure>
                    </div> */}
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                    </div>
                </div>
                <div className="content">
                    <p>{author}</p>
                    <p>{rating}/5</p>
                    <p>{genres}</p>
                </div>
            </div>
        </div>
    )
}

export default BookPreview;
