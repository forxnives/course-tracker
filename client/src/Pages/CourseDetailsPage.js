import React from 'react'
import SearchSection from '../Components/SearchSection.js'
import CourseDetailsAside from '../Components/CourseDetailsAside.js'
import CourseDetailsDescription from '../Components/CourseDetailsDescription.js'
import CourseDetailsRating from '../Components/CourseDetailsRating.js'
import ReviewComment from '../Components/ReviewComment.js'
import AddComment from '../Components/AddComment.js'
import CourseStrip from '../Components/CourseStrip.js'
import Footer from '../Components/Footer.js'

function CourseDetailsPage({courses, index} = {courses: [], index}) {
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


    
            <div className="container margin_60_35">
                    <div className="row">
                        <div className="col-lg-8">

                            {/* <CourseDetailsDescription /> */}

                            <CourseStrip course={courses[index]} />


                        
                            <section id="reviews">
                                
                                <h2>Reviews</h2>

                                <CourseDetailsRating course={courses[index]} />
    
                                <div className="reviews-container">

                                    <ReviewComment />

                                    <ReviewComment />

                                    <ReviewComment />

                                    <ReviewComment />

                                    <ReviewComment />
    

     
                                </div>
           
                            </section>
          
                            <hr/>

                                <AddComment />
    

                        </div>

                        <CourseDetailsAside />
 
                        
     
                    </div>

            </div>
    
            
        </main>

        


        </div>
        <Footer />
       </> 
    )
}

export default CourseDetailsPage
