import React, {useEffect, useState} from 'react'
import CourseListFilters from './CourseListFilters.js'
import CourseCard from './CourseCard.js'


function CourseListResults({courses, setReduceMap, reduceMap} = {courses:[], setReduceMap, reduceMap}) {

	


	

    return (
		<div className="container margin_60_35">
			<div className="row">

                <CourseListFilters setReduceMap={setReduceMap} reduceMap={reduceMap}/>

				<div className="col-lg-9">

					<div className="row">

						{courses.map((course, i)=> (
							<CourseCard index={i} key={`course_${i}`} course={course}/>
						))}




                      


					</div>






					<p className="text-center"><a href="#0" className="btn_1 rounded add_top_30">Load more</a></p>
				</div>

			</div>		
		</div>
    )
}

export default CourseListResults
