import {useState, useEffect} from 'react'
import './style.css';
import HomePage from './Pages/HomePage.js'
import CourseListPage from './Pages/CourseListPage.js'
import CourseDetailsPage from './Pages/CourseDetailsPage.js'
import UserCoursesPage from './Pages/UserCoursesPage.js'
import LoginPage from './Pages/LoginPage.js'
import RegisterPage from './Pages/RegisterPage.js'
import NewCoursePage from './Pages/NewCoursePage';





function App() {

	const [ courses, setCourses ] = useState([])
	const [ error, setError ] = useState(null)

	useEffect(()=>{
        
		const retrieveCourses = async (e) => {
	
			try {
				console.log(window.location.origin)
				const response = await fetch(`http://localhost:8082/courses`, {
					method: 'GET',
					headers: {
					  'Content-Type': 'application/json',
					},
				
				})
				if (response.status===500) {
					throw new Error('Failure to retrieve')
				}
	
				const data = await response.json()
				setCourses(data.data)
			  
			} catch(err) {
				setError(err.message);
			}
		}

		retrieveCourses()

		console.log('thing work??')

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
