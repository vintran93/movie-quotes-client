class Character {

    constructor(data) { // create and initialize an object instance of that class
        this.id = data.id;
        this.movie_id = data.movie.id;
        this.name = data.name;
        this.quote = data.quote;
        this.likes = data.likes;
        this.image = data.image;
    }

    renderCharacter() {
        const card = document.createElement("div");
        const image = document.createElement("img");
        const characterName = document.createElement("h1");
        const characterQuote = document.createElement('h4');
        const characterLikes = document.createElement("h3");
        const likesNum = document.createElement("h5");
        const likeBttn = document.createElement("button");
        const deleteBttn = document.createElement("button");

        card.id = `card-${this.id}`;
        card.className = "card";

        image.src = this.image;
        image.alt = `${this.name} image`;

        characterName.textContent = this.name;
        characterQuote.textContent = this.quote;
        characterLikes.textContent = "Likes: ";

        likesNum.className = "like-num";
        likesNum.textContent = this.likes;
        likeBttn.className = "like-bttn";
        likeBttn.textContent = "♥";

        likeBttn.addEventListener("click", (e) => {
            e.stopPropagation();
            ++this.likes; //increment likes
            fetch(`https://movie-quotes-app-api.herokuapp.com/characters/${this.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ likes: this.likes })
            })
            likesNum.textContent = this.likes; // Updating DOM with textContent property of likesNum element to a new number

        })

        deleteBttn.id = "delete-character";
        deleteBttn.textContent = "Delete";
        deleteBttn.className = "delete-bttn";
        deleteBttn.textContent = "Delete";

        deleteBttn.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            fetch(`https://movie-quotes-app-api.herokuapp.com/characters/${this.id}`, {
                method: 'DELETE'
            })
            card.remove();
        });

        card.append(image, characterName, characterQuote, characterLikes, likesNum, likeBttn, deleteBttn);
        charactersContainer.appendChild(card);

        return card

    }
}

