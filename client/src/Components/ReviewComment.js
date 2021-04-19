import React from 'react'

function ReviewComment() {
    return (
        <div className="review-box clearfix">
        <figure className="rev-thumb"><img src="img/avatar1.jpg" alt=""/>
        </figure>
        <div className="rev-content">
            <div className="rating">
                <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
            </div>
            <div className="rev-info">
                Admin – April 03, 2016:
            </div>
            <div className="rev-text">
                <p>
                    Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                </p>
            </div>
        </div>
    </div>
    )
}

export default ReviewComment
