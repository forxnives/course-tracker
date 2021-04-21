import {useState, useEffect, useCallback} from 'react'
import './style.css';
import HomePage from './Pages/HomePage.js'
import CourseListPage from './Pages/CourseListPage.js'
import CourseDetailsPage from './Pages/CourseDetailsPage.js'
import UserCoursesPage from './Pages/UserCoursesPage.js'
import LoginPage from './Pages/LoginPage.js'
import RegisterPage from './Pages/RegisterPage.js'
import NewCoursePage from './Pages/NewCoursePage';
import {fetchGet} from './utils/fetchUtils.js'
import { ratingCalc } from './utils/ratingUtils.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";


function App() {

	const [ fetchedCourses, setFetchedCourses ] = useState([])
  const [ courses, setCourses ] = useState([])
  const [ departments, setDepartments ] = useState([])
	const [ error, setError ] = useState(null)
  const [ selectedCourse, setSelectedCourse ] = useState(null)

  const [user, setUser] = useState(undefined);

  const getUser = useCallback(async function() {
    try {

      const response = await fetch(`http://localhost:8082/users/me`,{
      credentials: 'include',
      
       }
      );

      const json = await response.json();
      // Handle non 200 responses:
      if (!response.ok) {
        throw new Error(json.message);
      }
      setUser(json.data);
    } catch(err) {
      setUser(undefined);
      console.log(err);
    }
  }, [])
  useEffect(() => {
    getUser();
  }, [getUser]);






	useEffect(()=>{
        
		fetchGet('courses').then(courses => setFetchedCourses(courses) ).catch(err => setError(err)) 
    fetchGet('departments').then(depts => setDepartments(depts)).catch(err => setError(err))

	},[])
  
  useEffect(() => {


    
    setCourses(fetchedCourses.map(course => {
      return {...course, ratingCalc: ratingCalc(course.rating) }
    }))


  }, [fetchedCourses])

  console.log(courses)



  return (
    <div className="App">

      <Router>
        <Switch>
          <Route 
            exact  
            path="/login"
            render={props => {
              if (user) {
                return <Redirect to="/" />;
              }

              return <LoginPage getUser={getUser} {...props} />;
            }}
            >
      
          </Route>

          <Route 
            exact
            path="/register"
            render={props => {
              if (user) {
                return <Redirect to="/" />;
              }
              return <RegisterPage getUser={getUser} updateUser={setUser} {...props} />;
            }}
          >
          
          </Route>


          {/* <Route path="/list">
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
          </Route> */}
          <Route 
            path="/"
            render={props => {
              if (!user) {
                return <Redirect to="/login" />;
              }

              return <HomePage departments={departments} {...props} />;
            }}          
          >
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
