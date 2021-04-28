import React, {useState, useEffect} from 'react'
import {getRelated} from '../utils/generalUtils.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useHistory
  } from "react-router-dom";

function CourseDetailsAside({setForceUpdate, forceUpdate, course, courses, departments, reduceMap, setReduceMap}) {

    const history = useHistory()
    const [ related, setRelated ] = useState([])
    const defaultReduceMap = {
        filters: {
          dept: null,
          rating: null,
          sites: [], 
          keywords: []
    
        },
        sort:  null,
        search: null,

}

    useEffect(() => {

        const sorted = getRelated(course, courses)
        
        setRelated(sorted.slice(0,3))

    }, [course] )

    function handleRelatedClick(courseId) {
        history.push(`/app/details/${courseId}`)
        setForceUpdate(!forceUpdate)

    }

    function handleDeptClick(dept) {

        // setReduceMap({
        //         filters: {
        //           dept: dept.name,
        //           rating: null,
        //           sites: [], 
        //           keywords: []
            
        //         },
        //         sort:  null,
        //         search: null,
        
        // })

        setReduceMap({...defaultReduceMap, filters:{...defaultReduceMap, dept:dept.name}})
        history.push('/app/list')
    }
    

    function handleWordClick(word) {
        setReduceMap({
            ...defaultReduceMap,
            search: word
        }) 

        history.push('/app/list')
    }



    return (
        <aside className="col-lg-3">


        <div className="widget">
            <div className="widget-title">
                <h4>Related Courses</h4>
            </div>
            <ul className="comments-list">

                {related.map((course, i) => (

                    <li key={`related_${i}`} style={{cursor: 'pointer'}} onClick={() => handleRelatedClick(course._id)}>
                        <div className="alignleft">
                            <a><img src={course.image} alt=""/></a>
                        </div>
                        <small>{course.site.name}</small>
                        <h3><a title="">{course.title}</a></h3>
                    </li>

                ))}

            </ul>
        </div>

        <div className="widget">
            <div className="widget-title">
                <h4>Departments</h4>
            </div>
            <ul className="cats">

                {departments.map((dept, i) =>(
                    <li onClick={() => handleDeptClick(dept)} key={`department_${i}`}><a href="#">{dept.name} <span>({dept.courseIds.length})</span></a></li>
                ))}
                
            </ul>
        </div>

        <div className="widget">
            <div className="widget-title">
                <h4>Keywords</h4>
            </div>
            <div className="tags">

                {
                    [...course.keywords, ...course.topics].map((word, i) => (
                        <a style={{cursor: 'pointer'}} onClick={() => handleWordClick(word)}>{word}</a>
                    ))
                }


            </div>
        </div>

    </aside>
    )
}

export default CourseDetailsAside
