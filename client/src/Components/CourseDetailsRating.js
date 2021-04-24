import React from 'react'
import { ratingDisplayHelper, ratingBarsHelper }  from '../utils/ratingUtils.js'

function CourseDetailsRating({course}) {

    const ratingDisplay = ratingDisplayHelper(course?.ratingCalc?.avgRating)
    const ratingBars =  ratingBarsHelper(course?.rating)





    return (
        <div className="reviews-container add_bottom_30">
        <div className="row">
            <div className="col-lg-3">
                <div style={{backgroundColor: ratingDisplay.color}} id="review_summary">
                    <strong>{course?.ratingCalc?.avgRating ? (course?.ratingCalc?.avgRating): 'Unrated'}</strong>
                    <em>{ratingDisplay.adjective}</em>
                    <small>{`Based on ${course?.ratingCalc?.totalRatings} ratings`}</small>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="row">
                    <div className="col-lg-10 col-9">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${ratingBars.five}%`, backgroundColor: ratingDisplay.color}} aria-valuenow={ratingBars.five} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
                </div>

                <div className="row">
                    <div className="col-lg-10 col-9">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${ratingBars.four}%`, backgroundColor: ratingDisplay.color}} aria-valuenow={ratingBars.four} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
                </div>

                <div className="row">
                    <div className="col-lg-10 col-9">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${ratingBars.three}%` , backgroundColor: ratingDisplay.color}} aria-valuenow={ratingBars.three} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
                </div>

                <div className="row">
                    <div className="col-lg-10 col-9">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${ratingBars.two}%`, backgroundColor: ratingDisplay.color}} aria-valuenow={ratingBars.two} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
                </div>

                <div className="row">
                    <div className="col-lg-10 col-9">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: `${ratingBars.one}%`, backgroundColor: ratingDisplay.color}} aria-valuenow={ratingBars.one} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-3"><small><strong>1 stars</strong></small></div>
                </div>

            </div>
        </div>

    </div>
    )
}

export default CourseDetailsRating
