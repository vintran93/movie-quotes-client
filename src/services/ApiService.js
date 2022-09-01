class ApiService {
    constructor() {
        this.baseURL = 'https://movie-quotes-app-api.herokuapp.com/'
    }
    // used await/async to refactor vs. using .then and callbacks and for readability

    // fetch all movies
    async fetchMovies() {
        let res = await fetch(this.baseURL + '/movies')
        let data = await res.json()
        return data
    }

    // fetch an individual movie
    async fetchMovie(id) {
        let res = await fetch(this.baseURL + `/movies/${id}`)
        let data = await res.json()
        return data
    }

    // fetch individual character
    async fetchCharacter(id) {
        let res = await fetch(this.baseURL + `/characters/${id}`)
        let data = await res.json()
        return data
    }

    // create movie and post to database
    async fetchCreateMovie(movieData) {

        let configObj = {
            method: 'POST',
            body: JSON.stringify(movieData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        let res = await fetch(this.baseURL + `/movies`, configObj)
        let data = await res.json()
        return data
    }

    // create character and post to database
    async fetchCreateCharacter(characterData) {
        let configObj = {
            method: 'POST',
            body: JSON.stringify(characterData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        let res = await fetch(this.baseURL + '/characters', configObj)
        let data = await res.json()
        return data
    }

    // delete the character from database
    async fetchRemoveCharacter(id) {
        let configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        let res = await fetch(this.baseURL + `/characters/${id}`, configObj)
    }

    // delete the movie from the database
    async fetchRemoveMovie(id) {
        let configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        let res = await fetch(this.baseURL + `/movies/${id}`, configObj)
    }

}
