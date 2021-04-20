import React from 'react'

import SearchSection from '../Components/SearchSection.js'
import SearchFilters from '../Components/SearchFilters.js'
import CourseListResults from '../Components/CourseListResults.js'
import Footer from '../Components/Footer.js'


function CourseListPage({courses, setSelectedCourse}) {
    return (
	<>

		<div id="page" className="theia-exception">


			


		
		<main>


			<SearchSection />

			<SearchFilters />

			
			<CourseListResults setSelectedCourse={setSelectedCourse} courses={courses}/>

			


			
		</main>


		</div>

		<Footer />
	</>
    )
}

export default CourseListPage
