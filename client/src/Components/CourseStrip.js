import React from 'react'
import Button from 'react-bootstrap/Button';
import {fetchPost} from '../utils/fetchUtils.js'

import { useHistory } from "react-router-dom";






function CourseStrip({course, user}) {

    let history = useHistory();


    function handleEnrol() {

        const body = {
            courseId: course._id,
            userId: user.id
        }

        fetchPost('courses/enrol', body).then(response => {

            history.push('/app/mycourses')

        }).catch(err => alert(err))

    }




    return (
        <div className="strip list_view">
        <div className="row no-gutters">
            <div className="col-lg-5">
                <figure>
                    <a href="#0"><img src={course?.image} className="img-fluid" alt=""/><div className="read_more"></div></a>
                    <small>{course?.department.name}</small>
                </figure>
            </div>
            <div className="col-lg-7">
                <div className="wrapper">
                    

                    <h3><a href="#0">{course?.title}</a></h3>
                    <small>{course?.author}</small>
                    <p>{course?.description}</p>

                    


                </div>
                <ul>
                    <li><a style={{fontSize: '1rem'}} className="address" href={course?.site.link}>  View on {course?.site.name}</a></li>

                    

                    <li><Button onClick={handleEnrol} variant="light">Add to my courses</Button></li>
                </ul>
            </div>
        </div>

    </div>
    )
}

export default CourseStrip
