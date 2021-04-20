import React from 'react'
import UserCourseStrip from '../Components/UserCourseStrip.js'
import SearchSection from '../Components/SearchSection'
import Footer from '../Components/Footer.js'

function UserCourses() {
    return (
        <>
		<SearchSection/>
        <div className="sub_header_in sticky_header">
		<div className="container">
			<h1>Your Courses</h1>
		</div>

	</div>

	
	<main>
		<div className="container margin_60_35">
			<div className="box_booking">
				
            <UserCourseStrip />

			<UserCourseStrip />

			<UserCourseStrip />

			<UserCourseStrip />



			</div>

			
		</div>

	</main>
    <Footer />
    </>
    )
}

export default UserCourses
