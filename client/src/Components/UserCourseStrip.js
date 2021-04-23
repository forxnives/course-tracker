import React from 'react'

function UserCourseStrip({course}) {

    console.log(course)
    return (
        <div className="strip_booking">
        <div className="row">
        
            <div className="col-lg-2 col-md-2">

           
                <figure>
                    <a ><img style={{maxWidth: '200px'}}  src={course?.image} className="img-fluid" alt=""/><div className="read_more"></div></a>
                </figure>
           

            </div>
            <div className="col-lg-6 col-md-5">
                <h3><span>{course.title}</span>{course.author}</h3>
            </div>
            <div className="col-lg-2 col-md-3">
                <ul className="info_booking">
                    <li><strong>Started on</strong> 23442</li>
                    <li><strong>Completed on</strong> Sat. 23 Dec. 2018</li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-2">
                <div className="booking_buttons">
                    <a onClick={()=>console.log('tin')} className="btn_2">Start</a>
                    <a href="#0" className="btn_3">Remove</a>
                </div>
            </div>
        </div>

    </div>
    )
}

export default UserCourseStrip
