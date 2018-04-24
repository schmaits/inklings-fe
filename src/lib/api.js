export function getCall (endpoint) {
    return fetch(`http://localhost:3010/api${endpoint}`)
    .then(res => {
        if (res.status === 500) return Promise.reject(new Error('Not found'))
        return res.json()
    })
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
}