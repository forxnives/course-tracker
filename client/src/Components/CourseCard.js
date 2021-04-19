import React from 'react'

function CourseCard({course}) {

    

    return (
        <div className="col-md-6">
        <div className="strip grid">
            <figure>
                <a href="#0" className="wish_bt"></a>
                <a href="detail-restaurant.html"><img src={course.image} className="img-fluid" alt=""/>
                    <div className="read_more"><span>Read more</span></div>
                </a>
                <small>{course.department.name}</small>
            </figure>
            <div className="wrapper">
                <h3><a href="detail-restaurant.html">{course.title}</a></h3>
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
