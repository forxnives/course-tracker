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

function HomePage({departments, courses}) {



    return (
        <div id="page">

      
        <main className="pattern">
  
          <Hero departments={departments} />
  
          <Suggestions courses={courses} />
  
          <HowItWorks />
  
        </main>
  
        <Footer />
  
        </div>
    )
}

export default HomePage
