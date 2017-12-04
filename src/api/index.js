import fetch from 'isomorphic-fetch'

const baseURL = 'https://api-rest-jar.herokuapp.com/api'

const API = {
    news: {
        // Call all News of API
        async getAll () {
            const response = await fetch(`${baseURL}/news`)
            const data = await response.json()
            return data
        },

        async getSingle (id) {
            const response = await fetch(`${baseURL}/news/${id}`)
            const data = await response.json()
            return data
        },

        async save (item) {
            const response = await fetch(`${baseURL}/news`,{
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }),
                body: JSON.stringify(item)                
            })
            const data = await response.json()
            return data
        }
    }
}

export default API