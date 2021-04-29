import React from 'react'
import { ratingDisplayHelper } from '../utils/ratingUtils.js'
import {fetchPost} from '../utils/fetchUtils.js'


import {
    Link,
    useHistory
  } from "react-router-dom";

function CourseCard({userId, course, index}) {

    const ratingDisplay = ratingDisplayHelper(course.ratingCalc.avgRating)

    let history = useHistory();


    function handleEnrol() {

        const body = {
            courseId: course._id,
            userId: userId
        }

        fetchPost('courses/enrol', body).then(response => {

            history.push('/app/mycourses')

        }).catch(err => alert(err))

    }




    return (
        <div  className="col-md-6">
        <div className="strip grid">
            <figure>
                <a href="#0" onClick={handleEnrol} className="wish_bt">Add to my courses</a>
                
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
                {course?.comments.length ?  (<li><span> {course.comments.length} review{course.comments.length>1 && ('s')} </span></li>) : (null)}
                <li>
                    <div className="score"><span>{ratingDisplay.adjective}<em>{`${course.ratingCalc.totalRatings} Ratings`}</em></span>
                        <strong style={{backgroundColor: `${ratingDisplay.color}`}}>{Number.isNaN(course.ratingCalc.avgRating) ? ('N/A') : (course.ratingCalc.avgRating)}</strong>
                    
                    </div>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default CourseCard
