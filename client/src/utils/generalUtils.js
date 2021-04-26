import { isCompositeComponent } from "react-dom/test-utils"

export function searchCourses(courses, query) {

    const tempCourses = courses.reduce((accumulator, course) => {

      let relevance = 0
      if (course.title.toLowerCase().includes(query.toLowerCase())) {
        relevance =+ 10   
      }

      for (let k=0; k<course.topics.length; k++){

        if (course.topics[k]?.toLowerCase().includes(query.toLowerCase())) {
          relevance =+ 8
        }
      }

      for (let k=0; k<course.keywords.length; k++){

        if (course.keywords[k]?.toLowerCase().includes(query.toLowerCase())) {
          relevance =+ 7
        }
      }

      if (course.department.name.toLowerCase().includes(query.toLowerCase())) {
        relevance =+ 6
      }

      if (course.description.toLowerCase().includes(query.toLowerCase())) {
        relevance =+ 4
      }

      if (course.author.toLowerCase().includes(query.toLowerCase())) {
        relevance =+ 3
      }

      if (course.site.name.toLowerCase().includes(query.toLowerCase())) {
        relevance =+ 2
      }

      if (relevance > 0) {
        accumulator.push({...course, relevance})
      }

      return accumulator
  },  [])
  

  return tempCourses.sort( (first, second) => {
    return second.relevance - first.relevance
  })
}




export function filterCourses(courses, filters) {



  if (filters.dept){
    courses = courses.filter(course => {
      return course.department.name === filters.dept
    })
  }

  if (filters.rating){
    courses = courses.filter(course => {
      return course.ratingCalc.avgRating >= filters.rating
    })
  }

  if (filters.sites.length){

    courses = filters.sites.reduce((accumulator, site) => {

      let filteredCourses = courses.filter(course => (course.site.name === site))

      if (filteredCourses.length){
        return [...accumulator, ...filteredCourses]
      }
      return accumulator
    },[])

  }

  if (filters.keywords.length){

    courses = filters.keywords.reduce((accumulator, keyword) => {

      let filteredCourses = courses.filter(course => {

        const keywords = course.keywords.map(kw => (kw.toLowerCase().trim()))
        

        return keywords.includes(keyword)
        
        
        })
      // console.log(filteredCourses)

      if (filteredCourses.length){
        return [...accumulator, ...filteredCourses]
      }
      return accumulator
    },[])
  }

  return courses.filter((value, index, self) => self.indexOf(value) === index)
}


export function getTopKeywords(courses){


  const keywords = courses.reduce((accumulator, course) => {

    for (let k=0; k< course.keywords.length; k++){
      let currentKeyword = course.keywords[k].toLowerCase().trim()
      if (currentKeyword in accumulator){

        accumulator[currentKeyword] = accumulator[currentKeyword] + 1
      }else{
        accumulator[currentKeyword] = 1
      }
    }
    return accumulator

  }, {})

  const sortable = [];
  for (let keyword in keywords) {
    if (keyword !== ""){
      sortable.push([keyword, keywords[keyword]]);
    }

}

sortable.sort((a, b) => {
    return  b[1] - a[1];
});

  return sortable.slice(0, 5)
}


export function sortCourses(courses, mode){

  if (mode==='latest'){
    return courses.reverse()
  }

  const sortModeMap = {
    'rating': (a, b) => (b.ratingCalc.avgRating - a.ratingCalc.avgRating),
    'popular': (a, b) => {
      
      return b.timesTaken - a.timesTaken
    }
  }

  if (mode) {
    console.log(courses.sort(sortModeMap[mode]))
    return courses.sort(sortModeMap[mode])
  }

 

  return courses

  // return courses

} 


export function arrayConvert(string) {

 


  return string.split(',')


}

export function titleCase(str) {
  const splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }

  return splitStr.join(' '); 
}

