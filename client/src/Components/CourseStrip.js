import React from 'react'



function CourseStrip({course}) {




    return (
        <div className="strip list_view">
        <div className="row no-gutters">
            <div className="col-lg-5">
                <figure>
                    <a ><img src={course?.image} className="img-fluid" alt=""/><div className="read_more"><span>Read more</span></div></a>
                    <small>{course?.department.name}</small>
                </figure>
            </div>
            <div className="col-lg-7">
                <div className="wrapper">
                    <a className="wish_bt"></a>
                    <h3><a>{course?.title}</a></h3>
                    <small>{course?.author}</small>
                    <p>{course?.description}</p>

                </div>
                <ul>
                    <li><a className="address" href={course?.site.link}>{course?.site.name}</a></li>
                    <li><span className="loc_closed">Now Closed</span></li>
                </ul>
            </div>
        </div>

    </div>
    )
}

export default CourseStrip
