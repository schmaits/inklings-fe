export function getCall (endpoint) {
    return fetch(`http://localhost:3010/api${endpoint}`)
    .then(res => {
        if (res.status === 500) return Promise.reject(new Error('Not found'))
        return res.json()
    })
}