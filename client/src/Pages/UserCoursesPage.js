import React, {useState, useEffect} from 'react'
import UserCourseStrip from '../Components/UserCourseStrip.js'
import SearchSection from '../Components/SearchSection'
import Footer from '../Components/Footer.js'
import {fetchPost} from '../utils/fetchUtils.js'

function UserCourses({user}) {

	const [userCourses, setUserCourses] = useState([])


	useEffect(() => {
		console.log(user)
		if (user){
			fetchPost('users/courses', {userId:user.userId}).then(response => { console.log(response)}).catch(err => alert(err))
		}



	},[user])


	console.log(userCourses)


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
