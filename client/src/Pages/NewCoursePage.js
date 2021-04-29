import React, {useState} from 'react'
import Footer from '../Components/Footer.js'
import {newCourse} from '../utils/fetchUtils'
import {arrayConvert} from '../utils/generalUtils.js'
// import Footer from '../Components/Footer.js'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function NewCoursePage({departments, user}) {


    const [courseTitle, setCourseTitle ] = useState('')
    const [courseAuthor, setCourseAuthor ] = useState('') 
    const [courseSite, setCourseSite ] = useState('') 
    const [courseSiteLink, setCourseSiteLink ] = useState('') 
    const [courseImage, setCourseImage ] = useState('') 
    const [courseTopics, setCourseTopics ] = useState([]) 
    const [courseDepartment, setCourseDepartment ] = useState('') 
    const [courseKeywords, setCourseKeywords ] = useState('') 
    const [courseDescription, setCourseDescription ] = useState('') 

    useState(() => {
        setCourseDepartment(departments[0]?._id)
    }, [departments]) 
    
 

    function handleSubmit(e) {
        e.preventDefault()
        
        newCourse({

				title: courseTitle,
                author: courseAuthor,
                site: {
                    link:courseSiteLink,
                    name: courseSite
                 },
                image: courseImage,
				topics: arrayConvert(courseTopics),
				description: courseDescription,
				department: courseDepartment,
				keywords: arrayConvert(courseKeywords),
				rating: {
					one: 0,
					two: 0,
					three: 0,
					four: 0,
					five: 0
				},
				
			}).then(response => {

                if (response.status===200) {
                    alert('Successfully Submitted')
                }

            }).catch(err => alert(err))
    }


    const dropdownOptions = departments.map(department => ({value: department._id, label: department.name}))
      
      
      const defaultOption = dropdownOptions[0];


    return (
        <>

<div className="sub_header_in sticky_header" style={{backgroundColor: 'rgb(0, 119, 184)'}}><div className="container"><h1>Add Course</h1></div></div>

        <div className='container margin_60_35'>

        
   

        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
                <div className="form-group col-md-6">
                    <label>Title</label>
                    <input type="text" name="title_course" id="title_course" placeholder="" className="form-control" onChange={(e) => setCourseTitle(e.target.value)}/>
                </div>
                <div className="form-group col-md-6">
                    <label>Author</label>
                    <input type="text" name="author_course" id="author_course" placeholder="" className="form-control" onChange={(e) => setCourseAuthor(e.target.value)}/>
                </div>
                <div className="form-group col-md-6">
                    <label>Site</label>
                    <input type="text" name="site_course" id="site_course" placeholder="" className="form-control" onChange={(e) => setCourseSite(e.target.value)}/>
                </div>

                <div className="form-group col-md-6">
                    <label>Course Link</label>
                    <input type="text" name="link_course" id="link_course" placeholder="" className="form-control" onChange={(e) => setCourseSiteLink(e.target.value)}/>
                </div>

                <div className="form-group col-md-6">
                    <label>Image Path</label>
                    <input type="text" name="img_course" id="img_course" placeholder="" className="form-control" onChange={(e) => setCourseImage(e.target.value)}/>
                </div>

                <div className="form-group col-md-6">
                    <label>Topics</label>
                    <input type="text" name="topic_course" id="topic_course" placeholder="" className="form-control" onChange={(e) => setCourseTopics(e.target.value)}/>
                </div>

                <div className="form-group col-md-6">
                    <label>Department</label>
                    <Dropdown  options={dropdownOptions} onChange={(e) => setCourseDepartment(e.value)} value={defaultOption} placeholder="Select an option" />;
                </div>


                <div className="form-group col-md-6">
                    <label>Keywords</label>
                    <input type="text" name="keywords_course" id="keywords_course" className="form-control" onChange={(e)=> setCourseKeywords(e.target.value)}/>
                </div>

                <div className="form-group col-md-12">
                    <label>Description</label>
                    <textarea name="description_text" id="description_text" className="form-control" style={{height:'130px'}} onChange={(e)=> setCourseDescription(e.target.value)} ></textarea>
                </div>
                <div className="form-group col-md-12 add_top_20 add_bottom_30">
                    <input type="submit" value="Submit" className="btn_1" id="submit-course"/>
                </div>
            </div>
        </form>

        </div>

        <Footer />

        </>


            
    )
}

export default NewCoursePage
