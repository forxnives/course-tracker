import React from 'react'


function CourseStrip({course}) {

    console.log(course.title)
    return (
        <div className="strip list_view">
        <div className="row no-gutters">
            <div className="col-lg-5">
                <figure>
                    <a ><img src={course.image} className="img-fluid" alt=""/><div className="read_more"><span>Read more</span></div></a>
                    <small>Shop</small>
                </figure>
            </div>
            <div className="col-lg-7">
                <div className="wrapper">
                    <a className="wish_bt"></a>
                    <h3><a>{course.title}</a></h3>
                    <small>{course.author}</small>
                    <p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel no.</p>

                </div>
                <ul>
                    <li><a className="address" href={course.site.link}>{course.site.name}</a></li>
                    <li><span className="loc_closed">Now Closed</span></li>
                </ul>
            </div>
        </div>

    </div>
    )
}

export default CourseStrip
