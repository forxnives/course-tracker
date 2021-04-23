import React from 'react'
import { ratingDisplayHelper } from '../utils/ratingUtils.js'
import Button from 'react-bootstrap/Button';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function CourseCard({course, index, setSelectedCourse}) {

    console.log(course._id)



    const ratingDisplay = ratingDisplayHelper(course.ratingCalc.avgRating)




    return (
        <div onClick={() => setSelectedCourse(index)} className="col-md-6">
        <div className="strip grid">
            <figure>
                <Link className="wish_bt">Add to my courses</Link>
                
                <Link to={`/app/details/${course._id}`}><img src={course.image} className="img-fluid" alt=""/>
                    <div className="read_more"><span>Read more</span></div>
                </Link>
                <small>{course.department.name}</small>
            </figure>
            <div className="wrapper">
                <h3><Link to={`/app/details/${course._id}`}>{course.title}</Link></h3>
                <small>{course.author}</small>
                <p>{course.topics}</p>
                <a className="address" href={course.site.link}>{course.site.name}</a>
            </div>
            <ul>
                <li><span className="loc_open">Now Open</span></li>
                <li>
                    <div className="score"><span>{ratingDisplay.adjective}<em>{`${course.ratingCalc.totalRatings} Ratings`}</em></span>
                        <strong style={{backgroundColor: `${ratingDisplay.color}`}}>{course.ratingCalc.avgRating}</strong>
                    
                    </div>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default CourseCard
