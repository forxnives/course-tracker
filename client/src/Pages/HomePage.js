import React from 'react'
import Hero from '../Components/Hero.js'
import Suggestions from '../Components/Suggestions.js'
import HowItWorks from '../Components/HowItWorks.js'
import Footer from '../Components/Footer.js'

function HomePage() {
    return (
        <div id="page">
      


      
        <main className="pattern">
  
          <Hero />
  
          <Suggestions />
  
          <HowItWorks />
  
        </main>
  
        <Footer />
  
        </div>
    )
}

export default HomePage
