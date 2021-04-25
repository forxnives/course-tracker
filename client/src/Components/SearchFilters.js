import React from 'react'

function SearchFilters() {
    return (
		<div className="filters_listing version_2  sticky_horizontal">
			<div className="container">
				<ul className="clearfix">
					<li>
						<div className="switch-field">
							<input type="radio" id="all" name="listing_filter" value="all" defaultChecked/>
							<label htmlFor="all">All</label>
							<input type="radio" id="popular" name="listing_filter" value="popular"/>
							<label htmlFor="popular">Popular</label>
							<input type="radio" id="latest" name="listing_filter" value="latest"/>
							<label htmlFor="latest">Latest</label>
						</div>
					</li>


				</ul>
			</div>

		</div>
    )
}

export default SearchFilters
