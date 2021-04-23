import React from 'react'
import SuggestCat from './SuggestCat'

function Suggestions({courses}) {


    // console.log(courses)





    return (
        
        <div className="container margin_60_35">

            <SuggestCat cat='Reccomended for you' />

            <SuggestCat cat='Popular' />

            <SuggestCat cat='Trending' />
       

        </div>
    )
}

export default Suggestions
