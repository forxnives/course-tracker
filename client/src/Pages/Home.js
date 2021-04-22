import React, {useState, useEffect} from 'react'
import HomePage from './HomePage.js'
import CourseListPage from './CourseListPage.js'
import CourseDetailsPage from './CourseDetailsPage'
import UserCoursesPage from './UserCoursesPage.js'
import LoginPage from './LoginPage.js'
import RegisterPage from './RegisterPage.js'
import NewCoursePage from './NewCoursePage';
import {fetchGet} from '../utils/fetchUtils.js'
import { ratingCalc } from '../utils/ratingUtils.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";



function Home(props) {

    let { path, url } = useRouteMatch();

    const [ fetchedCourses, setFetchedCourses ] = useState([])
    const [ courses, setCourses ] = useState([])
    const [ departments, setDepartments ] = useState([])
    const [ error, setError ] = useState(null)
    const [ selectedCourse, setSelectedCourse ] = useState(null)


    useEffect(()=>{
        
		fetchGet('courses').then(courses => setFetchedCourses(courses) ).catch(err => setError(err)) 
        fetchGet('departments').then(depts => setDepartments(depts)).catch(err => setError(err))

	},[])
  
    useEffect(() => {


    
    setCourses(fetchedCourses.map(course => {
      return {...course, ratingCalc: ratingCalc(course.rating) }
    }))


  }, [fetchedCourses])



    return (

        <Switch>
            <Route exact path={path}>
                <HomePage  departments={departments} {...props} />
            </Route>

            <Route path={`${path}/list`}>
                <CourseListPage setSelectedCourse={setSelectedCourse} courses={courses}/>
            </Route>
            <Route path="/details">
                <CourseDetailsPage index={selectedCourse} courses={courses} />
            </Route>
            <Route path="/mycourses">
                <UserCoursesPage />
            </Route>
            <Route path="/admin">
                <NewCoursePage />
            </Route>



        </Switch>

    )
}

export default Home
