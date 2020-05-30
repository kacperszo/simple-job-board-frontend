export const url = "http://localhost:8080/api/v1"

const checkForError = response => {
    if (!response.ok) throw Error(response.statusText)
    return response.json()
}

export const findAllAdvertisements = token => {
    if (token) {
        return fetch(`${url}/advertisements`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(checkForError)
    }
    return fetch(`${url}/advertisements`).then(checkForError)
}

export const findAdvertisementById = (id, token) => {
    if (token) {
        return fetch(`${url}/advertisements/${id}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(checkForError)
    }
    return fetch(`${url}/advertisements/${id}`).then(checkForError)
}

export const updateAdvertisement = (advertisement, token) => {
    return fetch(`${url}/advertisements/${advertisement.id}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "title": advertisement.title,
            "content": advertisement.content,
            "expirationDate": advertisement.expirationDate,
            "hidden": advertisement.hidden
        })
    }).then(checkForError);
}

export const removeAdvertisement = (id, token) => {
    return fetch(`${url}/advertisements/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }).then(response => response);
}

export const getUserToken = (username, password) => {
    return fetch(`${url}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then(checkForError);
}