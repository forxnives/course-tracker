
//takes rating obj ad adds up all ratings
function totalRatingsCalc(rating) {

    return rating.one + rating.two + rating.three + rating.four + rating.five

}

//takes rating obj and calculates avg
export function ratingCalc(rating) {

    const totalRatings = totalRatingsCalc(rating)

    const avg =((rating.one*1)  + (rating.two*2) + (rating.three*3) + (rating.four*4) + (rating.five*5))/totalRatings

    return {avgRating: Math.round(avg * 10) / 10, totalRatings }
}


//returns ratings obj with percentages
export function ratingBarsHelper(rating) {

    const totalRatings = totalRatingsCalc(rating)

    return {
        one: Math.round((rating.one/totalRatings)*100), 
        two: Math.round((rating.two/totalRatings)*100), 
        three: Math.round((rating.three/totalRatings)*100), 
        four: Math.round((rating.four/totalRatings)*100), 
        five: Math.round((rating.five/totalRatings)*100), 
    }

}

//determines adjective and color for rating display
export function ratingDisplayHelper(avgRating) {


    if (avgRating < 1){
        return { adjective: 'Terrible', color: '#FF0000'}
    }

    if (avgRating < 2){
        return { adjective: 'Bad', color: '#FF5C5C'}
    }

    if (avgRating < 3){
        return { adjective: 'Unsatisfactory', color: '#ED7D3A'}
    }
    if (avgRating < 4){
        return { adjective: 'Decent', color: '#FAB733'}
    }

    if (avgRating < 4.5){
        return { adjective: 'Great', color: '#8CD867'}
    }

    if (avgRating <= 5){
        return { adjective: 'Superb', color: '#32a067'}
    }

    return { adjective: 'None', color: '#0A0A0A' }




}