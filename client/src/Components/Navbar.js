import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function Navbar({handleLogout}) {
    return (
<nav class="navbar navbar-light" style={{backgroundColor: "#003049", margin: '0px', borderRadius: '0px', display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>

< Link to='/app/home' style={{display: 'flex', padding: '10px 10px 5px'}} class="navbar-brand" href="#">
  <img src="https://static.wixstatic.com/media/369c26_9b881804a868429db8fe1bb25c2bcf2b~mv2.png/v1/fill/w_172,h_34,al_c,q_85,usm_0.66_1.00_0.01/ADTLogo.webp" alt="" />
</Link>


<div style={{display: 'flex', alignItems: 'flex-end'}}>
   <h5 className='nav-cms-header' style={{color: 'white', letterSpacing: '3px', opacity: '30%', padding: '2px 0px'}}>Course Management System</h5> 
</div>

<div  style={{display: 'flex', alignContent: 'center', marginLeft: 'auto', opacity: '90%'}} className='nav-links' > 

    <Link to='/app/list' style={{display: 'flex', alignContent: 'center', padding: '0px 10px'}} className='nav-link'>
      <h4 style={{color: 'white', cursor: 'pointer', display: 'flex', paddingTop: '5px'}} >All Courses</h4>
    </Link>

    <Link to='/app/mycourses' style={{display: 'flex', alignContent: 'center', padding: '0px 10px'}} className='nav-link'>
      <h4 style={{color: 'white', cursor: 'pointer', display: 'flex', paddingTop: '5px'}} >My Courses</h4>
    </Link>

    <div onClick={handleLogout} style={{display: 'flex', alignContent: 'center', padding: '0px 10px'}} className='nav-link'>
      <h4 style={{color: 'white', cursor: 'pointer', display: 'flex', paddingTop: '5px'}} >Log Out</h4>
    </div>



</div>



</nav>   
    )
}

export default Navbar