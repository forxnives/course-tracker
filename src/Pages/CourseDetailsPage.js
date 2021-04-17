import React from 'react'
import SearchSection from '../Components/SearchSection.js'
import CourseDetailsAside from '../Components/CourseDetailsAside.js'
import CourseDetailsDescription from '../Components/CourseDetailsDescription.js'
import CourseDetailsRating from '../Components/CourseDetailsRating.js'
import ReviewComment from '../Components/ReviewComment.js'
import AddReview from '../Components/AddReview.js'
import CourseStrip from '../Components/CourseStrip.js'

function CourseDetailsPage() {
    return (
        <div id="page" class="theia-exception">
		


        
        <main>	

            <SearchSection />	


            
            <nav class="secondary_nav sticky_horizontal_2">
                <div class="container">
                    <ul class="clearfix">
                        <li><a href="#description" class="active">Description</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#sidebar"></a></li>
                    </ul>
                </div>
            </nav>


    
            <div class="container margin_60_35">
                    <div class="row">
                        <div class="col-lg-8">

                            {/* <CourseDetailsDescription /> */}

                            <CourseStrip />


                        
                            <section id="reviews">
                                
                                <h2>Reviews</h2>

                                <CourseDetailsRating />
    
                                <div class="reviews-container">

                                    <ReviewComment />

                                    <ReviewComment />

                                    <ReviewComment />

                                    <ReviewComment />

                                    <ReviewComment />
    

     
                                </div>
           
                            </section>
          
                            <hr/>

                                <AddReview />
    

                        </div>

                        <CourseDetailsAside />
 
                        
     
                    </div>

            </div>
    
            
        </main>

        


        </div>
    )
}

export default CourseDetailsPage
