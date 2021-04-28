import React, {useState, useEffect} from 'react'

function SearchFilters({setReduceMap, reduceMap}) {

	const [ sortMode, setSortMode ] = useState('oldest')

	useEffect(()=> {
		setReduceMap({...reduceMap, sort: sortMode})
	},[sortMode, reduceMap, setReduceMap])

	
    return (
		<div className="filters_listing version_2  sticky_horizontal">
			<div className="container">
				<ul className="clearfix">
					<li>
						<div className="switch-field">

							<input onChange={()=>setSortMode('oldest')} type="radio" id="oldest" name="listing_filter" value="oldest" defaultChecked/>
							<label htmlFor="oldest">Oldest</label>
							<input onChange={()=>setSortMode('latest')} type="radio" id="latest" name="listing_filter" value="latest"/>
							<label htmlFor="latest">Latest</label>
							<input onChange={()=>setSortMode('rating')} type="radio" id="all" name="listing_filter" value="all"/>
							<label htmlFor="all">Rating</label>
							<input onChange={()=>setSortMode('popular')} type="radio" id="popular" name="listing_filter" value="popular"/>
							<label htmlFor="popular">Popular</label>


						</div>
					</li>


				</ul>
			</div>

		</div>
    )
}

export default SearchFilters
