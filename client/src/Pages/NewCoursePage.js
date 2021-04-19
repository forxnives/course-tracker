import React, {useState} from 'react'

function NewCoursePage() {

    const dpWebDev = '607cb63644e9b5b23b9d1dd8'

    const [courseTitle, setCourseTitle ] = useState('')
    const [courseAuthor, setCourseAuthor ] = useState('') 
    const [courseSite, setCourseSite ] = useState('') 
    const [courseSiteLink, setCourseSiteLink ] = useState('') 
    const [courseImage, setCourseImage ] = useState('') 
    const [courseTopics, setCourseTopics ] = useState([]) 
    const [courseDepartment, setCourseDepartment ] = useState(dpWebDev) 
    const [courseKeywords, setCourseKeywords ] = useState('') 
    const [courseDescription, setCourseDescription ] = useState('') 




	const newCourse = async (e) => {

        console.log('submitting>>??')

		const response = await fetch(`http://localhost:8082/courses`, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({

				title: courseTitle,

                author: courseAuthor,

                site: {
                    link:courseSiteLink,
                    name: courseSite
                 },

                image: courseImage,

				topics: ['Javascript', 'React', 'HTML', 'CSS'],

			
				description: courseDescription,
			

			
				department: courseDepartment,
			
				keywords: ['javasript', 'web', 'andrei', 'neagoie'],
			
				rating: {
			
					one: 3,
					two: 6,
					three: 7,
					four: 45,
					five: 176
			
				},
				
			}),

		})

		if (response.status===500) {

			throw new Error(response.statusText)
		}

		if (response.status===200) {
            alert('Successfully Submitted')
		}


	}

    function handleSubmit(e) {
        e.preventDefault()
        newCourse()

    }






    return (
   

        <form onSubmit={(e) => handleSubmit(e)}>
            <div class="row">
                <div class="form-group col-md-6">
                    <label>Title</label>
                    <input type="text" name="title_course" id="title_course" placeholder="" class="form-control" onChange={(e) => setCourseTitle(e.target.value)}/>
                </div>
                <div class="form-group col-md-6">
                    <label>Author</label>
                    <input type="text" name="author_course" id="author_course" placeholder="" class="form-control" onChange={(e) => setCourseAuthor(e.target.value)}/>
                </div>
                <div class="form-group col-md-6">
                    <label>Site</label>
                    <input type="text" name="site_course" id="site_course" placeholder="" class="form-control" onChange={(e) => setCourseSite(e.target.value)}/>
                </div>

                <div class="form-group col-md-6">
                    <label>Course Link</label>
                    <input type="text" name="link_course" id="link_course" placeholder="" class="form-control" onChange={(e) => setCourseSiteLink(e.target.value)}/>
                </div>

                <div class="form-group col-md-6">
                    <label>Image Path</label>
                    <input type="text" name="img_course" id="img_course" placeholder="" class="form-control" onChange={(e) => setCourseImage(e.target.value)}/>
                </div>

                <div class="form-group col-md-6">
                    <label>Topics</label>
                    <input type="text" name="topic_course" id="topic_course" placeholder="" class="form-control" onChange={(e) => setCourseTopics(e.target.value)}/>
                </div>

                <div class="form-group col-md-6">
                    <label>DepartmentId</label>
                    <input type="text" name="department_course" id="department_course" value={dpWebDev} class="form-control" onChange={(e)=> setCourseDepartment(e.target.value)}/>
                </div>

                <div class="form-group col-md-6">
                    <label>Keywords</label>
                    <input type="text" name="keywords_course" id="keywords_course" class="form-control" onChange={(e)=> setCourseKeywords(e.target.value)}/>
                </div>


                <div class="form-group col-md-12">
                    <label>Description</label>
                    <textarea name="description_text" id="description_text" class="form-control" style={{height:'130px;'}} onChange={(e)=> setCourseDescription(e.target.value)} ></textarea>
                </div>
                <div class="form-group col-md-12 add_top_20 add_bottom_30">
                    <input type="submit" value="Submit" class="btn_1" id="submit-review"/>
                </div>
            </div>
        </form>
            

    )
}

export default NewCoursePage