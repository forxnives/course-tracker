import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function CourseCard({course, index, setSelectedCourse}) {



    return (
        <div onClick={() => setSelectedCourse(index)} className="col-md-6">
        <div className="strip grid">
            <figure>
                <Link to='/details' className="wish_bt"></Link>
                <Link to='/details'><img src={course.image} className="img-fluid" alt=""/>
                    <div className="read_more"><span>Read more</span></div>
                </Link>
                <small>{course.department.name}</small>
            </figure>
            <div className="wrapper">
                <h3><Link to='/details'>{course.title}</Link></h3>
                <small>{course.author}</small>
                <p>{course.topics}</p>
                <a className="address" href={course.site.link}>{course.site.name}</a>
            </div>
            <ul>
                <li><span className="loc_open">Now Open</span></li>
                <li>
                    <div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default CourseCard
