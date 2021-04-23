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
        // console.log(body)

        fetchPost('courses/enrol', body).then(response => {

            if (response.status===200) {
                // alert('Successfully Submitted')
                history.push('/app/mycourses')

            }

        }).catch(err => alert(err))

    }




    return (
        <div className="strip list_view">
        <div className="row no-gutters">
            <div className="col-lg-5">
                <figure>
                    <a ><img src={course?.image} className="img-fluid" alt=""/><div className="read_more"></div></a>
                    <small>{course?.department.name}</small>
                </figure>
            </div>
            <div className="col-lg-7">
                <div className="wrapper">
                    {/* <a className="wish_bt" style={{left: 0}}>Add to my courses</a> */}

                    <h3><a>{course?.title}</a></h3>
                    <small>{course?.author}</small>
                    <p>{course?.description}</p>

                    
                    <span className="loc_closed">Now Closed</span>

                </div>
                <ul>
                    <li><a className="address" href={course?.site.link}>{course?.site.name}</a></li>

                    

                    <li><Button onClick={handleEnrol} variant="light">Take Course</Button></li>
                </ul>
            </div>
        </div>

    </div>
    )
}

export default CourseStrip
