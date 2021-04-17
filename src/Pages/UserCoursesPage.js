import React from 'react'
import UserCourseStrip from '../Components/UserCourseStrip.js'
import SearchSection from '../Components/SearchSection'

function UserCourses() {
    return (
        <>
		<SearchSection/>
        <div class="sub_header_in sticky_header">
		<div class="container">
			<h1>Your Courses</h1>
		</div>

	</div>

	
	<main>
		<div class="container margin_60_35">
			<div class="box_booking">
				
            <UserCourseStrip />

			<UserCourseStrip />

			<UserCourseStrip />

			<UserCourseStrip />



			</div>

			
		</div>

	</main>
    
    </>
    )
}

export default UserCourses
