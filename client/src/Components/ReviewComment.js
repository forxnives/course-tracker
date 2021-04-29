import React from 'react'

function ReviewComment({comment}) {


    return (
        <div className="review-box clearfix">
        <figure className="rev-thumb"><img src="https://lh3.googleusercontent.com/proxy/aZxN3ekZAwEeUM8pDVdc-THZNmF7dhsMbSV72SRqwjYTJGEpmZ_9bog4VfbbJWb4HkiNDQyoGDiG_AmWPTe_yXwP8ZUcCTe7KEbwp46VDk6bC6974wTILNraeqv2OzORIuMvo0Fv7zR3e62WcF6Nw4zsES5B1N9u" alt=""/>
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
