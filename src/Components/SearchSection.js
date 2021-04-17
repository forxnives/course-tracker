import React from 'react'

function SearchSection() {
    return (
        <>
        		<div id="results">
		   <div class="container">
			   <div class="row">
				   <div class="col-lg-3 col-md-4 col-10">
					   <h4><strong>145</strong> result for All listing</h4>
				   </div>
				   <div class="col-lg-9 col-md-8 col-2">
					   <a href="#0" class="search_mob btn_search_mobile"></a> 
						<div class="row no-gutters custom-search-input-2 inner">
							<div class="col-lg-4">
								<div class="form-group">
									<input class="form-control" type="text" placeholder="What are you looking for..."/>
									<i class="icon_search"></i>
								</div>
							</div>
							<div class="col-lg-4">
								<div class="form-group">
									<input class="form-control" type="text" placeholder="Where"/>
									<i class="icon_pin_alt"></i>
								</div>
							</div>
							<div class="col-lg-3">
								<select class="wide">
									<option>All Categories</option>	
									<option>Shops</option>
									<option>Hotels</option>
									<option>Restaurants</option>
									<option>Bars</option>
									<option>Events</option>
									<option>Fitness</option>
								</select>
							</div>
							<div class="col-lg-1">
								<input type="submit" value="Search"/>
							</div>
						</div>
				   </div>
			   </div>

				<div class="search_mob_wp">
					<div class="custom-search-input-2">
						<div class="form-group">
							<input class="form-control" type="text" placeholder="What are you looking for..."/>
							<i class="icon_search"></i>
						</div>
						<div class="form-group">
							<input class="form-control" type="text" placeholder="Where"/>
							<i class="icon_pin_alt"></i>
						</div>
						<select class="wide">
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
