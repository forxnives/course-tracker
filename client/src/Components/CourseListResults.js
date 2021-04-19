import React, {useEffect, useState} from 'react'
import CourseListFilters from './CourseListFilters.js'
import CourseCard from './CourseCard.js'


function CourseListResults({courses}) {





	


    return (
		<div class="container margin_60_35">
			<div class="row">

                <CourseListFilters />

				<div class="col-lg-9">

					<div class="row">

						{courses.map((course, i)=> (
							<CourseCard key={`course_${i}`} course={course}/>
						))}




                      


					</div>






					<p class="text-center"><a href="#0" class="btn_1 rounded add_top_30">Load more</a></p>
				</div>

			</div>		
		</div>
    )
}

export default CourseListResults
