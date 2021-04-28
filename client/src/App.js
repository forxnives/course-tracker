import React, {useState, useEffect, useCallback} from 'react'
import './style.css';
import HomePage from './Pages/HomePage.js'
import CourseListPage from './Pages/CourseListPage.js'
import CourseDetailsPage from './Pages/CourseDetailsPage.js'
import UserCoursesPage from './Pages/UserCoursesPage.js'
import LoginPage from './Pages/LoginPage.js'
import RegisterPage from './Pages/RegisterPage.js'
import NewCoursePage from './Pages/NewCoursePage';
import ScrollToTop from './Components/ScrollToTop.js';
import {fetchGet} from './utils/fetchUtils.js'
import { ratingCalc } from './utils/ratingUtils.js'
import {useLocalStorageState} from './utils/hooks.js'
import {searchCourses, filterCourses, sortCourses} from './utils/generalUtils.js'
import Navbar from './Components/Navbar.js'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


function App() {

  
  
  const [ accessToken, setAccessToken ] = useLocalStorageState('accessToken', window.localStorage.getItem('accessToken'))
  
  const [user, setUser] = useState(undefined);
  const [ fetchedCourses, setFetchedCourses ] = useState([])
  const [ courses, setCourses ] = useState([])
  const [ reducedCourses, setReducedCourses ] = useState([])
  const [ departments, setDepartments ] = useState([])
  const [ error, setError ] = useState(null)
  
  

  const [ reduceMap, setReduceMap ] = useState({
    filters: {
      dept: null,
      rating: null,
      sites: [], 
      keywords: []

    },
    sort:  null,
    search: null,

  })


  useEffect(() => {


    let tempCourses = [...courses]

    if (reduceMap.search) {

      tempCourses = searchCourses(tempCourses, reduceMap.search)
    }

    if (reduceMap.filters){

      tempCourses = filterCourses(tempCourses, reduceMap.filters)


    }

    if (reduceMap.sort && reduceMap.sort !== 'oldest') {
      tempCourses = sortCourses(tempCourses, reduceMap.sort)
    }



    setReducedCourses(tempCourses)


  },[reduceMap, courses])


  
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
  }, [setUser])
  
  
  useEffect(() => {
    
    
    if (accessToken){
      getUser(accessToken)
    }
    
    
  }, [accessToken, getUser])
  
  
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

      <Router>
        <ScrollToTop />
        <Switch>
          <Route 
            exact  
            path="/"
            render={props => {
              if (user) {

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
              return <RegisterPage departments={departments} setAccessToken={setAccessToken} updateUser={setUser} {...props} />;
            }}
          >
          
          </Route>




            <Route 
            
            path="/app" 
 
            
            >

              { user && (<Navbar user={user} setReduceMap={setReduceMap} handleLogout={handleLogout} />)}

              <Switch>


   

              <Route path='/app/home'
            render={props => {

              if (user) {

                return <HomePage user={user} reduceMap={reduceMap} setReduceMap={setReduceMap} courses={courses}  departments={departments} />
              }

              return <LoginPage getUser={getUser} setAccessToken={setAccessToken} {...props} />;
            }}                
              
              >

            </Route>

            <Route path={`/app/list`}
                        render={props => {
                          if (user) {
                            
                            return <CourseListPage user={user} reduceMap={reduceMap} setReduceMap={setReduceMap} departments={departments} courses={
                              
                              
                              (reducedCourses?.length || reduceMap?.search || reduceMap?.filters?.sites?.length) ? (reducedCourses) : (courses)
                            
                            
                            }/>
                          }
            
                          return <LoginPage getUser={getUser} setAccessToken={setAccessToken} {...props} />;
                        }}     
            
            >

            </Route>
            <Route 
            path="/app/details/:courseId"
            render={props => {
              if (user) {
                
                return <CourseDetailsPage reduceMap={reduceMap} setReduceMap={setReduceMap} departments={departments} user={user} courses={courses} />
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
              if (user && user.isAdmin) {
                
                return <NewCoursePage departments={departments} />
              }

              if (user){
                return <HomePage user={user} reduceMap={reduceMap} setReduceMap={setReduceMap} courses={courses}  departments={departments} />
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
