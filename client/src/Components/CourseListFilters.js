import React, {useState} from 'react'

function CourseListFilters({setReduceMap, reduceMap}) {

    const [ sliderValue, setSliderValue ] = useState(0)


    function handleRatingSlider(e) {

        setReduceMap({...reduceMap, filters: {...reduceMap.filters, rating: e.target.valueAsNumber/2}})
        setSliderValue(e.target.valueAsNumber/2)
        
    }


    return (
        <aside className="col-lg-3" id="sidebar">
        <div id="filters_col">
            <a style={{cursor:'default'}} >Filters </a>
            <div className="collapse show" id="collapseFilters">
                <div className="filter_type">
                    <h6>Category</h6>
                    <ul>
                        <li>
                            <label className="container_check">Restaurants <small>43</small>
                              <input type="checkbox"/>
                              <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="container_check">Shops <small>33</small>
                              <input type="checkbox"/>
                              <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="container_check">Bars <small>12</small>
                              <input type="checkbox"/>
                              <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="container_check">Events <small>44</small>
                              <input type="checkbox"/>
                              <span className="checkmark"></span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="filter_type">
                    <h6>Rating</h6>
                    <div className="distance"> Minimum rating <span> {sliderValue} stars</span> </div>
                    <input defaultValue='0' onChange={handleRatingSlider} type="range" min="0" max="10" step="1" data-orientation="horizontal"/>
                </div>
                <div className="filter_type">
                    <h6>Rating</h6>
                    <ul>
                        <li>
                            <label className="container_check">Superb 9+ <small>34</small>
                              <input type="checkbox"/>
                              <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="container_check">Very Good 8+ <small>21</small>
                              <input type="checkbox"/>
                              <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="container_check">Good 7+ <small>15</small>
                              <input type="checkbox"/>
                              <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="container_check">Pleasant 6+ <small>34</small>
                              <input type="checkbox"/>
                              <span className="checkmark"></span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    </aside>
    )
}

export default CourseListFilters
