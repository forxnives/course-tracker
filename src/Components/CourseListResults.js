import React from 'react'
import CourseListFilters from './CourseListFilters.js'
import CourseCard from './CourseCard.js'


function CourseListResults() {
    return (
		<div class="container margin_60_35">
			<div class="row">

                <CourseListFilters />

				<div class="col-lg-9">

					<div class="row">



                        <CourseCard />

                        
                        <CourseCard />

                        
                        <CourseCard />

                        
                        <CourseCard />

                      


					</div>






					<p class="text-center"><a href="#0" class="btn_1 rounded add_top_30">Load more</a></p>
				</div>

			</div>		
		</div>
    )
}

export default CourseListResults
