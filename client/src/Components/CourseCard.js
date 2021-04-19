import React from 'react'

function CourseCard({course}) {

    console.log(course)

    

    return (
        <div class="col-md-6">
        <div class="strip grid">
            <figure>
                <a href="#0" class="wish_bt"></a>
                <a href="detail-restaurant.html"><img src={course.image} class="img-fluid" alt=""/>
                    <div class="read_more"><span>Read more</span></div>
                </a>
                <small>{course.department.name}</small>
            </figure>
            <div class="wrapper">
                <h3><a href="detail-restaurant.html">{course.title}</a></h3>
                <small>{course.author}</small>
                <p>{course.topics}</p>
                <a class="address" href={course.site.link}>{course.site.name}</a>
            </div>
            <ul>
                <li><span class="loc_open">Now Open</span></li>
                <li>
                    <div class="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default CourseCard
