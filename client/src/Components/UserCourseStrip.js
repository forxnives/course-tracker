import React from 'react'

function UserCourseStrip() {
    return (
        <div className="strip_booking">
        <div className="row">
            <div className="col-lg-2 col-md-2">
                <div className="date">
                    <span className="month">Dec</span>
                    <span className="day"><strong>23</strong>Sat</span>
                </div>
            </div>
            <div className="col-lg-6 col-md-5">
                <h3 className="hotel_booking">Hotel Mariott Paris<span>2 Adults / 2 Nights</span></h3>
            </div>
            <div className="col-lg-2 col-md-3">
                <ul className="info_booking">
                    <li><strong>Booking id</strong> 23442</li>
                    <li><strong>Booked on</strong> Sat. 23 Dec. 2018</li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-2">
                <div className="booking_buttons">
                    <a href="#0" className="btn_2">Edit</a>
                    <a href="#0" className="btn_3">Cancel</a>
                </div>
            </div>
        </div>

    </div>
    )
}

export default UserCourseStrip
