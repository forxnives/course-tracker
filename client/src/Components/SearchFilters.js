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
					<li>
						<div className="layout_view">
							<a href="#0" className="active"><i className="icon-th"></i></a>
							<a href="listing-2.html"><i className="icon-th-list"></i></a>
							<a href="list-map.html"><i className="icon-map"></i></a>
						</div>
					</li>
					<li>
						<a className="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
					</li>
				</ul>
			</div>

		</div>
    )
}

export default SearchFilters
