import React, {useState, useEffect, useCallback} from 'react'
import './style.css';
import Home from './Pages/Home.js'
import HomePage from './Pages/HomePage.js'
import CourseListPage from './Pages/CourseListPage.js'
import CourseDetailsPage from './Pages/CourseDetailsPage.js'
import UserCoursesPage from './Pages/UserCoursesPage.js'
import LoginPage from './Pages/LoginPage.js'
import RegisterPage from './Pages/RegisterPage.js'
import NewCoursePage from './Pages/NewCoursePage';
import {fetchGet} from './utils/fetchUtils.js'
import { ratingCalc } from './utils/ratingUtils.js'
import {useLocalStorageState} from './utils/hooks.js'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";


function App() {




  const [ accessToken, setAccessToken ] = useLocalStorageState('accessToken', window.localStorage.getItem('accessToken'))

  const [user, setUser] = useState(undefined);
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







  const getUser = useCallback(async function(token) {

    try {

      console.log(token)


      const response = await fetch(`http://localhost:8082/users/me`, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({token})
        })
      

      const json = await response.json();

      // Handle non 200 responses:
      if (!response.ok) {
        throw new Error(json.message);
      }
      setUser(json.data);
    } catch(err) {
      // setUser(undefined);
      console.log(err)  ;
    }
  }, [])


  useEffect(() => {


    if (accessToken){
      getUser(accessToken)
    }


  }, [accessToken])


  useEffect(() => {
    getUser();
  }, [getUser]);





  function handleLogout() {
    setAccessToken(null)
    setUser(undefined)
    window.location.reload(false);

  }



  return (
    <div className="App">
      <button onClick={() => handleLogout()}>LOGOUT</button>

      <Router>
        <Switch>
          <Route 
            exact  
            path="/"
            render={props => {
              if (user) {
                console.log('yor')
                return <Redirect to="/app/home" />;
              }

              return <LoginPage getUser={getUser} setAccessToken={setAccessToken} {...props} />;
            }}
            >
      
          </Route>

          <Route 
            exact
            path="/register"
            render={props => {
              if (user) {
                return <Redirect to="/app/home" />;
              }
              return <RegisterPage setAccessToken={setAccessToken} updateUser={setUser} {...props} />;
            }}
          >
          
          </Route>




            <Route 
            
            path="/app" 
 
            
            >

              <Switch>

                {/* <Route path='/'
            render={props => {
              if (user) {
                return<HomePage  departments={departments} />
              }

              return <LoginPage getUser={getUser} setAccessToken={setAccessToken} {...props} />;
            }}
                  >

                  </Route> */}

              <Route path='/app/home'
            render={props => {
              if (user) {

                return<HomePage courses={courses}  departments={departments} />
              }

              return <LoginPage getUser={getUser} setAccessToken={setAccessToken} {...props} />;
            }}                
              
              >

            </Route>

            <Route path={`/app/list`}
                        render={props => {
                          if (user) {
                            
                            return <CourseListPage setSelectedCourse={setSelectedCourse} courses={courses}/>
                          }
            
                          return <LoginPage getUser={getUser} setAccessToken={setAccessToken} {...props} />;
                        }}     
            
            >

            </Route>
            <Route 
            path="/app/details/:courseId"
            render={props => {
              if (user) {
                
                return <CourseDetailsPage user={user} courses={courses} />
              }

              return <LoginPage getUser={getUser} setAccessToken={setAccessToken} {...props} />;
            }}  
            
            >

            </Route>
            <Route 
            path="/app/mycourses"
            render={props => {
              if (user) {
                
                return <UserCoursesPage user={user} />
              }

              return <LoginPage getUser={getUser} setAccessToken={setAccessToken} {...props} />;
            }}  
            
            
            >
                
            </Route>
            <Route 
            
            path="/app/admin"
            render={props => {
              if (user) {
                
                return <NewCoursePage departments={departments} />
              }

              return <LoginPage getUser={getUser} setAccessToken={setAccessToken} {...props} />;
            }}  
            
            >

            </Route>


              </Switch>


            </Route>

            </Switch>

            </Router>



    





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
          {/* <Route 
            path="/"
            render={props => {
              if (!user) {

                // console.log('no use meng')
                return <Redirect to="/login" />;
              }

              return <Home {...props} />;
            }}          
          >
          </Route>


        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
