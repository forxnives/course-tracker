import React, {useState} from 'react'
import Search from './Search.js'




function Hero({departments, reduceMap, setReduceMap}) {




    return (
        <>
        <section className="hero_single version_2">
          <div className="wrapper">
            <div className="container">
              <h3 style={{paddingBottom: '90px'}}> <span >Brush</span> <span style={{color: '#FD5B19'}}>up</span> on your skills</h3>
              <p>Discover the best courses from around the web</p>
            </div>

        
        <Search departments={departments} reduceMap={reduceMap} setReduceMap={setReduceMap} />
        {/* <div className="container">
          <div className="row">
            <div className="col-md-12">
                    <div className="input-group" id="adv-search">
                        <input onKeyPress={(e) => handleKeypress(e)} value={reduceMap.search} onChange={(e)=> setReduceMap({...reduceMap, search:e.target.value})} type="text" className="form-control search-input" placeholder="Search for courses" />
                        <div className="input-group-btn">
                            <div className="btn-group" role="group">
                                <div className="dropdown dropdown-lg">
                                    <button onClick={()=> setDropDownToggle(!dropDownToggle)} type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span style={{marginRight:'10px'}} className="caret"></span>{reduceMap.filters.dept || 'Department'}</button>

                                    <div style={{opacity: dropDownToggle ? ('100%'): ('0%') }} className='customDropdown'>


                                      {departments.map(dept => (
                                      <div className='dropdown-dept' onClick={() => handleDeptClick(dept.name)} style={{cursor: 'pointer'}}><h5 style={{padding: '5px 10px', margin: '0px'}} >{dept.name}</h5></div>
                                      ))}
                                    
                                       </div>

                                </div>
                                <button style={{backgroundColor: '#003049'}} onClick={() => history.push('/app/list/')} type="button" className="btn btn-primary"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
          </div> */}

          </div>
          
        </section>


<div className="main_categories">
<div className="container">
  <ul className="clearfix">
    <li>
      <a href="grid-listings-filterscol.html">
        <i className="icon-shop"></i>
        <h3>{departments[0]?.name}</h3>
      </a>
    </li>
    <li>
      <a href="grid-listings-filterscol.html">
        <i className="icon-lodging"></i>
        <h3>{departments[1]?.name}</h3>
      </a>
    </li>
    <li>
      <a href="grid-listings-filterscol.html">
        <i className="icon-restaurant"></i>
        <h3>{departments[2]?.name}</h3>
      </a>
    </li>
    <li>
      <a href="grid-listings-filterscol.html">
        <i className="icon-bar"></i>
        <h3>{departments[3]?.name}</h3>
      </a>
    </li>
    <li>
      <a href="grid-listings-filterscol.html">
        <i className="icon-dot-3"></i>
        <h3>More</h3>
      </a>
    </li>
  </ul>
</div>

</div>

</>
    )
}

export default Hero
