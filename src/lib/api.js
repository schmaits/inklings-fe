export function getCall (endpoint) {
    return fetch(`http://localhost:3010/api${endpoint}`)
        .then(res => {
            return res.json()
        })
        .catch(err => {
            throw err;
        });
}

export function putCall (endpoint, newData) {
    return fetch(`http://localhost:3010/api${endpoint}`, {
        method: 'PUT',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }),
        body: JSON.stringify(newData)
    })
    .catch(err => {
        throw err;
    })
}

export function postCall (endpoint, postObj) {
    return fetch(`http://localhost:3010/api${endpoint}`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }),
        body: JSON.stringify(postObj)
    })
    .catch(err => {
        throw err;
    })
}