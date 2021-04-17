import React from 'react'

import SearchSection from '../Components/SearchSection.js'
import SearchFilters from '../Components/SearchFilters.js'
import CourseListResults from '../Components/CourseListResults.js'


function CourseListPage() {
    return (

	<div id="page" class="theia-exception">


		


	
	<main>


	    <SearchSection />

		<SearchFilters />

        
		<CourseListResults />

		


		
	</main>


	</div>
    )
}

export default CourseListPage
