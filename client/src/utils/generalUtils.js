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




export function arrayConvert(string) {

  // string.replace(/\s/g, '')


  return string.split(',')


}

