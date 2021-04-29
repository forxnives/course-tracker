import React, {useState, useEffect} from 'react'
import {fetchPost} from '../utils/fetchUtils'
import StarRatings from 'react-star-ratings';

import {
    Link
  } from "react-router-dom";


function UserCourseStrip({course, user}) {

    const [ rating, setRating ] = useState(null) 

    const body = {
        userId: user.id,
        courseId: course._id
    }






    useEffect(()=>{



        if (rating){
            fetchPost('courses/ratecourse', {...body, rating: rating} ).then(data => {


    
            }).catch(err => console.log(err))
        }



    },[rating])





    function handleCourseStart() {

        fetchPost('courses/startcourse', body ).then(data => {

        }).catch(err => console.log(err))

        window.location.reload()
    }



    function handleCourseFinish() {


        fetchPost('courses/finishcourse', body ).then(data => {

        }).catch(err => console.log(err))

        window.location.reload()

    }


    function handleCourseRemove() {


        fetchPost('courses/removecourse', body ).then(data => {

            console.log(data)

        }).catch(err => console.log(err))

        window.location.reload()

    }


    return (
        <div className="strip_booking">
        <div className="row">
        
            <div className="col-lg-2 col-md-2">

           
                <figure className='usercoursepic'>
                    <Link to={`/app/details/${course._id}`} ><img style={{maxWidth: '200px'}}  src={course?.image} className="img-fluid" alt=""/><div className="read_more"></div></Link>
                </figure>
           

            </div>
            <div className="col-lg-6 col-md-5">
                <h3><span>{course.title}</span>{course.author}</h3>



                <h3>Rating</h3>
                <div className='ratingcontainer' >

                    <StarRatings 
                        rating={rating || course.userRating}
                        starRatedColor="blue"
                        changeRating={setRating}
                        numberOfStars={5}
                        starDimension="30px"

                        name='rating'
                    />

                </div>





            </div>
            <div className="col-lg-2 col-md-3">
                <ul className="info_booking">

                    { 
                        course.startDate ? (<li><strong>Started on</strong> {new Date(Number(course.startDate)).toString()}</li>) : null
                    }


                    {
                        course.endDate ? (<li><strong>Completed on</strong>{new Date(Number(course.endDate)).toString()}</li>) : null
                    }

                    
                </ul>
            </div>
            <div className="col-lg-2 col-md-2">
                <div className="booking_buttons">

                    {
                        !course.endDate && (course.startDate ? (<a onClick={handleCourseFinish} className="btn_2">Finish</a>) : (<a onClick={handleCourseStart} className="btn_2">Start</a>))
                    }


                    <a onClick={handleCourseRemove} className="btn_3">Remove</a>
                </div>
            </div>
        </div>

    </div>
    )
}

export default UserCourseStrip
