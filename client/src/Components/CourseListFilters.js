import React, {useState} from 'react'
import {titleCase} from '../utils/generalUtils.js'



function CourseListFilters({setReduceMap, reduceMap, keywords}) {

    const [ sliderValue, setSliderValue ] = useState(0)

    

    const siteArray = ['Udemy', 'Coursera', 'Skillshare', 'Youtube']


    function handleRatingSlider(e) {



        setReduceMap({...reduceMap, filters: {...reduceMap.filters, rating: e.target.valueAsNumber/2}})
        setSliderValue(e.target.valueAsNumber/2)
        
    }

    function handleSiteFilter(e, site) {



        if (e.target.checked){
            

            setReduceMap({...reduceMap, filters: {...reduceMap?.filters, sites: [...reduceMap.filters?.sites, site]}})

        }else {

            let index = reduceMap.filters.sites.indexOf(site)
            

            if (index > -1) {

                let siteFilters = [...reduceMap.filters.sites]
                siteFilters.splice(index, 1)
                setReduceMap({...reduceMap, filters: {...reduceMap.filters, sites: siteFilters}})
              }
        }

    }


    function handleKeywordFilter(e, keyword) {

        if (e.target.checked){
            setReduceMap({...reduceMap, filters: {...reduceMap.filters, keywords: [...reduceMap.filters.keywords, keyword[0]]}})
        }else {

            let index = reduceMap.filters.keywords.indexOf(keyword[0])
            

            if (index > -1) {

                let keywordFilters = [...reduceMap.filters.keywords]
                keywordFilters.splice(index, 1)
                setReduceMap({...reduceMap, filters: {...reduceMap.filters, keywords: keywordFilters}})
              }
        }

    }


    return (
        <aside className="col-lg-3" id="sidebar">
        <div id="filters_col">
            <a href="#0" style={{cursor:'default'}} >Filters </a>
            <div className="collapse show" id="collapseFilters">
                <div className="filter_type">
                    <h6>Site</h6>
                    <ul>

                        {
                            siteArray.map((site, i) =>(
                                <li key={`site_${i}`}>
                                <label className="container_check">{site} 
                                  <input onChange={(e) => handleSiteFilter(e, site)} type="checkbox"/>
                                  <span className="checkmark"></span>
                                </label>
                            </li>
                            ))
                        }


                    </ul>
                </div>
                <div className="filter_type">
                    <h6>Rating</h6>
                    <div className="distance"> Minimum rating <span> {sliderValue} stars</span> </div>
                    <input defaultValue='0' onChange={handleRatingSlider} type="range" min="0" max="10" step="1" data-orientation="horizontal"/>
                </div>
                <div className="filter_type">
                    <h6>Top Keywords</h6>
                    <ul>

                        {keywords.map((keyword, i) => (
                            <li key={`keyword_${i}`}>
                                <label className="container_check">{titleCase(keyword[0])}<small>{keyword[1]}</small>
                                    <input onChange={(e) =>  handleKeywordFilter(e, keyword)}  type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>

        </div>

    </aside>
    )
}

export default CourseListFilters
