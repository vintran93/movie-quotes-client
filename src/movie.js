class Movie {
    constructor(data) { // create and initialize an object instance of that class
        this.id = data.id
        this.title = data.title
        this.characters = data.characters
    }
    // list the movies index
    render() {
        return `
        <li>
            <a href="#" data-id="${this.id}">${this.title}</a>
        </li>
        `
    }
    // show the movie title and all the characters in the movie
    renderMovie() {
        return `
        <h3> ${this.title} - Characters </h3>
            <br>
            <button id="add-character" data-id="${this.id}">Add Character</button> |
            <button id='delete-bttn' data-id=${this.id} onclick="deleteMovie()">Delete Movie</button> 
            <div id="add-character-div">
            </div>
        <br>
        <br>
        `
    }
}





