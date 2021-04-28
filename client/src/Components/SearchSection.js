import React from 'react'
import Search from './Search.js'
import {
    useRouteMatch
  } from "react-router-dom";



function SearchSection({courses, departments, reduceMap, setReduceMap}) {


    let match = useRouteMatch();




    return (
        <>
        		<div id="results">
		   <div className="container">
			   <div className="row">

				   {/* <div className="col-md-8 col-2"> */}

				   <Search departments={departments} reduceMap={reduceMap} setReduceMap={setReduceMap} />



				   {
					   match.path === '/app/list' &&
					   
					   <div className="">
					   <h4 style={{textAlign: 'center'}} ><strong>{courses && (courses.length)}</strong> results {reduceMap?.search && (`for ${reduceMap.search}`)}</h4>
				   </div>}



			   </div>

				<div className="search_mob_wp">
					<div className="custom-search-input-2">
						<div className="form-group">
							<input className="form-control" type="text" placeholder="What are you looking for..."/>
							<i className="icon_search"></i>
						</div>
						<div className="form-group">
							<input className="form-control" type="text" placeholder="Where"/>
							<i className="icon_pin_alt"></i>
						</div>
						<select className="wide">
							<option>All Categories</option>	
							<option>Shops</option>
							<option>Hotels</option>
							<option>Restaurants</option>
							<option>Bars</option>
							<option>Events</option>
							<option>Fitness</option>
						</select>
						<input type="submit" value="Search"/>
					</div>
				</div>

		   </div>

	   </div>

	   		

        </>
    )
}

export default SearchSection
