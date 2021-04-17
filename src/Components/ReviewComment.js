import React from 'react'

function ReviewComment() {
    return (
        <div class="review-box clearfix">
        <figure class="rev-thumb"><img src="img/avatar1.jpg" alt=""/>
        </figure>
        <div class="rev-content">
            <div class="rating">
                <i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i>
            </div>
            <div class="rev-info">
                Admin – April 03, 2016:
            </div>
            <div class="rev-text">
                <p>
                    Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
                </p>
            </div>
        </div>
    </div>
    )
}

export default ReviewComment
