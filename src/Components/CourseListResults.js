import React, {useEffect, useState} from 'react'
import CourseListFilters from './CourseListFilters.js'
import CourseCard from './CourseCard.js'


function CourseListResults() {


	const [ courses, setCourses ] = useState([])
	const [ error, setError ] = useState(null)

	useEffect(()=>{
        
		const retrieveCourses = async (e) => {
	
			try {
				console.log(window.location.origin)
				const response = await fetch(`http://localhost:8082/courses`, {
					method: 'GET',
					headers: {
					  'Content-Type': 'application/json',
					},
				
				})
				if (response.status===500) {
					throw new Error('Failure to retrieve')
				}
	
				const data = await response.json()
				setCourses(data.data)
			  
			} catch(err) {
				setError(err.message);
			}
		}

		retrieveCourses()
		console.log('thing work??')

	},[])


	console.log(courses)
	
	


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
