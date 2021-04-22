import React from 'react'

function ReviewComment({comment}) {

    console.log(comment.userName)
    return (
        <div className="review-box clearfix">
        <figure className="rev-thumb"><img src="img/avatar1.jpg" alt=""/>
        </figure>
        <div className="rev-content">
            <div className="rating">
                <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
            </div>
            <div className="rev-info">
                {`${comment.userName} – ${comment.comment.timeStamp}:`}
            </div>
            <div className="rev-text">
                <p>
                    {comment.comment.text}
                </p>
            </div>
        </div>
    </div>
    )
}

export default ReviewComment
