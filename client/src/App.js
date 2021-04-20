import {useState, useEffect} from 'react'
import './style.css';
import HomePage from './Pages/HomePage.js'
import CourseListPage from './Pages/CourseListPage.js'
import CourseDetailsPage from './Pages/CourseDetailsPage.js'
import UserCoursesPage from './Pages/UserCoursesPage.js'
import LoginPage from './Pages/LoginPage.js'
import RegisterPage from './Pages/RegisterPage.js'
import NewCoursePage from './Pages/NewCoursePage';
import {fetchGet} from './utils/fetchUtils.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

	const [ courses, setCourses ] = useState([])
  const [ departments, setDepartments ] = useState([])
	const [ error, setError ] = useState(null)
  const [ selectedCourse, setSelectedCourse ] = useState(null)


	useEffect(()=>{
        
		fetchGet('courses').then(courses => setCourses(courses) ).catch(err => setError(err)) 
    fetchGet('departments').then(depts => setDepartments(depts)).catch(err => setError(err))

	},[])
  
  useEffect(() => {


    console.log(courses[selectedCourse])



  }, [selectedCourse])



  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/list">
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
          <Route path="/">
            <HomePage departments={departments} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
