export async function fetchCourses(e) {
	
    // try {
        
        const response = await fetch(`http://localhost:8082/courses`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        
        })
        if (response.status===500) {
            throw new Error('Failure to retrieve')
        }

        const data = await response.json()
        return data.data
        // console.log(err)
        // return(err);
      
    // } catch(err) {

    // }
}