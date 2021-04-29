import React from 'react'
import {
    Link,
    useHistory,
  } from "react-router-dom";



function Navbar({handleLogout, setReduceMap, user}) {

  let history = useHistory()



  function handleAllCourses(){
    setReduceMap({

        filters: {
          dept: null,
          rating: null,
          sites: [], 
          keywords: []
    
        },
        sort:  null,
        search: null,
    

    })

    if (history.location.pathname === '/app/list' ){
      window.location.reload()
    }

    history.push('/app/list')
  } 


    return (
<nav className="navbar navbar-light upper_nav" style={{backgroundColor: "#003049", margin: '0px', borderRadius: '0px'}}>

<div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center'}} >
  <Link to='/app/home' style={{display: 'flex', padding: '10px 10px 5px'}} className="navbar-brand" href="#">
    <img className='adtelligent_logo' src="https://static.wixstatic.com/media/369c26_9b881804a868429db8fe1bb25c2bcf2b~mv2.png/v1/fill/w_172,h_34,al_c,q_85,usm_0.66_1.00_0.01/ADTLogo.webp" alt="" />
  </Link>


  <div style={{display: 'flex', alignItems: 'flex-end'}}>
    <h5 className='nav-cms-header' style={{color: 'white', letterSpacing: '3px', opacity: '30%', padding: '2px 0px'}}>Course Management System</h5> 
  </div>

</div>

<div  style={{display: 'flex', alignContent: 'center', justifyContent: 'center', marginLeft: 'auto', opacity: '90%'}} className='nav-links' > 

    { 
      user.isAdmin && (    
        <Link to='/app/admin' style={{display: 'flex', alignContent: 'center', padding: '0px 10px'}} className='nav-link'>
          <h4 style={{color: 'white', cursor: 'pointer', display: 'flex', paddingTop: '5px'}} >Admin</h4>
        </Link>
    )}



    <a href="#0" onClick={handleAllCourses} style={{display: 'flex', alignContent: 'center', padding: '0px 10px'}} className='nav-link'>
      <h4 style={{color: 'white', cursor: 'pointer', display: 'flex', paddingTop: '5px'}} >All Courses</h4>
    </a>

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
