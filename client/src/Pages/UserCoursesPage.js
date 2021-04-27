import React, {useState, useEffect} from 'react'
import UserCourseStrip from '../Components/UserCourseStrip.js'
import SearchSection from '../Components/SearchSection'
import Footer from '../Components/Footer.js'
import {fetchPut} from '../utils/fetchUtils.js'

function UserCourses({user}) {

	const [userCourses, setUserCourses] = useState([])
	


	useEffect(() => {


		const body = {
			userId: user.id
		}

		if (user){
			fetchPut('courses/usercourses', body ).then(response => { setUserCourses(response.data)}).catch(err => alert(err))
		}


	},[user])


    return (
        <>

        <div style={{backgroundColor: '#0077B8'}} className="sub_header_in sticky_header">
		<div  className="container">
			<h1>Your Courses</h1>
		</div>

	</div>

	
	<main>
		<div className="container margin_60_35">
			<div className="box_booking">


			{userCourses.map((course, i)=> (            
				<UserCourseStrip user={user} course={course} key={`course_${i}`} />
			) )}
				
			</div>

			
		</div>

	</main>
    <Footer />
    </>
    )
}

export default UserCourses
