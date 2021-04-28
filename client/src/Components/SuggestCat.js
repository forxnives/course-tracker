import React from 'react'
import { getReccomended } from '../utils/generalUtils'
import {
  Link
} from "react-router-dom";

function SuggestCat({cat, courses, tag}) {


    return (
        <>
        <div className="main_title_3">
        <span></span>
        <h2>{cat}</h2>
        <p>{tag}</p>

      </div>
      <div className="row add_bottom_30">


        {courses?.map((course, i)=>(

          <div key={`recommendation_${i}`} className="col-lg-3 col-sm-6">
          <Link to={`/app/details/${course._id}`} className="grid_item small">
            <figure>
              <img src={course.image} alt=""/>
              <div className="info">
                <h3>{course.title}</h3>
              </div>
            </figure>
          </Link>
          </div>


        ))}




      </div>
      </>
    )
}

export default SuggestCat
