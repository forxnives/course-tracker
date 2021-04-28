import React, {useEffect, useState} from 'react'
import SuggestCat from './SuggestCat'
import {getRecommended, sortCourses, getTrending} from '../utils/generalUtils.js'

function Suggestions({courses, deptId}) {


    const [ recommended, setRecommended ] = useState([])
    const [ popular, setPopular ] = useState([])
    const [ trending, setTrending ] = useState([])
    


    useEffect (() => {

        setRecommended(getRecommended(courses, deptId))
        setPopular(sortCourses(courses, 'popular'))
        setTrending(getTrending(courses))

        

    }, [courses, deptId])






    return (
        
        <div className="container margin_60_35">

            <SuggestCat courses={recommended.slice(0,4)}  cat='Recommended for you' tag='Highest rated courses in your department' />

            <SuggestCat courses={popular.slice(0,4)} cat='Popular' tag='The most taken courses on the platform' />

            <SuggestCat courses={trending.slice(0,4)} cat='Trending' tag='See what courses other people are taking' />
       

        </div>
    )
}

export default Suggestions
