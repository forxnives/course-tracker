import React from 'react'

function UserCourseStrip() {
    return (
        <div class="strip_booking">
        <div class="row">
            <div class="col-lg-2 col-md-2">
                <div class="date">
                    <span class="month">Dec</span>
                    <span class="day"><strong>23</strong>Sat</span>
                </div>
            </div>
            <div class="col-lg-6 col-md-5">
                <h3 class="hotel_booking">Hotel Mariott Paris<span>2 Adults / 2 Nights</span></h3>
            </div>
            <div class="col-lg-2 col-md-3">
                <ul class="info_booking">
                    <li><strong>Booking id</strong> 23442</li>
                    <li><strong>Booked on</strong> Sat. 23 Dec. 2018</li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2">
                <div class="booking_buttons">
                    <a href="#0" class="btn_2">Edit</a>
                    <a href="#0" class="btn_3">Cancel</a>
                </div>
            </div>
        </div>

    </div>
    )
}

export default UserCourseStrip
