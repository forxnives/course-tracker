import React, {useState, useEffect} from 'react'
import SearchSection from '../Components/SearchSection.js'
import CourseDetailsAside from '../Components/CourseDetailsAside.js'
import CourseDetailsDescription from '../Components/CourseDetailsDescription.js'
import CourseDetailsRating from '../Components/CourseDetailsRating.js'
import ReviewComment from '../Components/ReviewComment.js'
import AddComment from '../Components/AddComment.js'
import CourseStrip from '../Components/CourseStrip.js'
import Footer from '../Components/Footer.js'

import {fetchGet} from '../utils/fetchUtils.js'
import {ratingCalc} from '../utils/ratingUtils.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";


function CourseDetailsPage({courses=[], user} ) {

    let {params} = useRouteMatch();

    let {courseId} = params;

    const [ course, setCourse ] = useState(null);
    const [ forceUpdate, setForceUpdate ] = useState(false)


    
    useEffect(() => {
        fetchGet(`courses/single/${courseId}`).then(course => setCourse({...course, ratingCalc:ratingCalc(course.rating)}) ).catch(err => console.log(err)) 
    },[forceUpdate])





    return (

       <> 
        <div id="page" className="theia-exception">
		


        
        <main>	

            <SearchSection />	


            
            <nav className="secondary_nav sticky_horizontal_2">
                <div className="container">
                    <ul className="clearfix">
                        <li><a href="#description" className="active">Description</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#sidebar"></a></li>
                    </ul>
                </div>
            </nav>


            {
                course ? (

                    <div className="container margin_60_35">
                    <div className="row">
                        <div className="col-lg-8">



                            <CourseStrip user={user} course={course} />


                        
                            <section id="reviews">
                                
                                <h2>Reviews</h2>

                                <CourseDetailsRating course={course} />
    
                                <div className="reviews-container">


                                {
                                    course.comments.map(comment => (<ReviewComment comment={comment} />))
                                }


    

     
                                </div>
           
                            </section>
          
                            <hr/>

                                <AddComment setForceUpdate={setForceUpdate} forceUpdate={forceUpdate} courseId={courseId} user={user} />
    

                        </div>

                        <CourseDetailsAside />
 
                        
     
                    </div>

            </div>

                ) : null
            }


    

    
            
        </main>

        


        </div>
        <Footer />
       </> 
    )
}

export default CourseDetailsPage
