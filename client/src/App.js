import {useState, useEffect} from 'react'
import './style.css';
import HomePage from './Pages/HomePage.js'
import CourseListPage from './Pages/CourseListPage.js'
import CourseDetailsPage from './Pages/CourseDetailsPage.js'
import UserCoursesPage from './Pages/UserCoursesPage.js'
import LoginPage from './Pages/LoginPage.js'
import RegisterPage from './Pages/RegisterPage.js'
import NewCoursePage from './Pages/NewCoursePage';

import {fetchCourses} from './utils/fetchUtils.js'





function App() {

	const [ courses, setCourses ] = useState([])
	const [ error, setError ] = useState(null)

	useEffect(()=>{
        

		fetchCourses().then(courses => setCourses(courses) ).catch(error => setError(error.message)) 




	},[])










  return (
    <div className="App">


      <HomePage />

      <CourseListPage courses={courses} />

      <CourseDetailsPage courses={courses} />

      <UserCoursesPage />

      {/* <LoginPage />

      <RegisterPage /> */}


      <NewCoursePage />







    </div>
  );
}

export default App;
