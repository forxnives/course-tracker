import React from 'react'

import SearchSection from '../Components/SearchSection.js'
import SearchFilters from '../Components/SearchFilters.js'
import CourseListResults from '../Components/CourseListResults.js'
import Footer from '../Components/Footer.js'


function CourseListPage({courses, setSelectedCourse, departments, reduceMap, setReduceMap}) {
    return (
	<>

		<div id="page" className="theia-exception">


			


		
		<main>


			<SearchSection courses={courses} departments={departments} reduceMap={reduceMap} setReduceMap={setReduceMap}  />

			<SearchFilters setReduceMap={setReduceMap} reduceMap={reduceMap} />

			
			<CourseListResults setReduceMap={setReduceMap} reduceMap={reduceMap} courses={courses}/>

			


			
		</main>


		</div>

		<Footer />
	</>
    )
}

export default CourseListPage
