//async fetch utils


//get request, takes route

export async function fetchGet (route) {

    const response = await fetch(`http://localhost:8082/${route}`, {
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

    
}


//add course (takes course object)
export async function newCourse (course) {

    const response = await fetch(`http://localhost:8082/courses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
    })

    if (response.status===500) {
        throw new Error(response.statusText)
    }

    return response


}

export async function fetchPost (route, body) {
    const response = await fetch(`http://localhost:8082/${route}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })

    if (response.status===500) {
        throw new Error(response.statusText)
    }

    return response
}




