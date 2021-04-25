import React from 'react'

function CourseDetailsAside() {
    return (
        <aside className="col-lg-3">


        <div className="widget">
            <div className="widget-title">
                <h4>Related Courses</h4>
            </div>
            <ul className="comments-list">
                <li>
                    <div className="alignleft">
                        <a href="#0"><img src="img/blog-5.jpg" alt=""/></a>
                    </div>
                    <small>Category - 11.08.2016</small>
                    <h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
                </li>
                <li>
                    <div className="alignleft">
                        <a href="#0"><img src="img/blog-6.jpg" alt=""/></a>
                    </div>
                    <small>Category - 11.08.2016</small>
                    <h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
                </li>
                <li>
                    <div className="alignleft">
                        <a href="#0"><img src="img/blog-4.jpg" alt=""/></a>
                    </div>
                    <small>Category - 11.08.2016</small>
                    <h3><a href="#" title="">Verear qualisque ex minimum...</a></h3>
                </li>
            </ul>
        </div>

        <div className="widget">
            <div className="widget-title">
                <h4>Departments</h4>
            </div>
            <ul className="cats">
                <li><a href="#">Food <span>(12)</span></a></li>
                <li><a href="#">Places to visit <span>(21)</span></a></li>
                <li><a href="#">New Places <span>(44)</span></a></li>
                <li><a href="#">Suggestions and guides <span>(31)</span></a></li>
            </ul>
        </div>

        <div className="widget">
            <div className="widget-title">
                <h4>Keywords</h4>
            </div>
            <div className="tags">
                <a href="#">Food</a>
                <a href="#">Bars</a>
                <a href="#">Cooktails</a>
                <a href="#">Shops</a>
                <a href="#">Best Offers</a>
                <a href="#">Transports</a>
                <a href="#">Restaurants</a>
            </div>
        </div>

    </aside>
    )
}

export default CourseDetailsAside
