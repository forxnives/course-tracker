
import './style.css';
import HomePage from './Pages/HomePage.js'
import CourseListPage from './Pages/CourseListPage.js'
import CourseDetailsPage from './Pages/CourseDetailsPage.js'
import UserCoursesPage from './Pages/UserCoursesPage.js'
import LoginPage from './Pages/LoginPage.js'
import RegisterPage from './Pages/RegisterPage.js'





function App() {


  return (
    <div className="App">


      <HomePage />

      <CourseListPage />

      <CourseDetailsPage />

      <UserCoursesPage />

      {/* <LoginPage />

      <RegisterPage /> */}







    </div>
  );
}

export default App;
