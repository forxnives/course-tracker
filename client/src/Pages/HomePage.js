import React from 'react'
import Hero from '../Components/Hero.js'
import Suggestions from '../Components/Suggestions.js'
import HowItWorks from '../Components/HowItWorks.js'
import Footer from '../Components/Footer.js'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";








function HomePage({user, departments, courses, reduceMap, setReduceMap}) {


    return (
      <>


        <div id="page">

      
        <main className="pattern">
  
          <Hero reduceMap={reduceMap} setReduceMap={setReduceMap} departments={departments} />
  
          <Suggestions deptId={user.departmentId} courses={courses} />
  
          <HowItWorks />
  
        </main>
  
        <Footer />
  
        </div>

        </>
    )
}

export default HomePage
