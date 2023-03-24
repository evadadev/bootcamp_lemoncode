import { getUser } from "./data-business";

const createCharacterRow = (character) => {
    const element = document.createElement("div");
    element.setAttribute("id", character.id)
    const avatar = createAvatar(character);
    element.appendChild(avatar);
    const link = createRowText(character);
    element.appendChild(link);
    element.className = "character-row";
    element.addEventListener("click", () => {
        getUser(character.id).then(response => {
            showCharacter(response);
        })
    })
    

    return element;
};

const createAvatar = (character) => {
    const element = document.createElement("img");
    element.width = 150;
    element.className = "thumbnail";
    element.src = character.image;

    return element;
};

const createRowText = (character) => {
    const element = document.createElement("span");
    element.append(character.name);

    return element;
};

const createAvatarDetail = (character) => {
    const element = document.createElement("img");
    element.width = 350;
    element.src = character.image;

    return element;
};

const showCharacter = (character) => {
    const characterDetail = document.getElementById("character-detail");
    characterDetail.innerHTML = "";
    characterDetail.appendChild(createAvatarDetail(character));
    characterDetail.appendChild(createParagraph("Name: " + character.name));
    characterDetail.appendChild(createParagraph("Status: " + character.status));
    characterDetail.appendChild(createParagraph("Species: " + character.species));

    if(character.location) {
        characterDetail.appendChild(createParagraph("Location: " + character.location.name));
        characterDetail.appendChild(createParagraph("Location: " + character.location.url));
    }
    if(character.episode) {
        for(let epi of character.episode) {
            characterDetail.appendChild(createParagraph("episode : " + epi));
        }
    }

    
    console.log(character);
    
};

const createParagraph = (text) => {
    const element = document.createElement("p");
    element.append(text);

    return element;
};

export { createCharacterRow, showCharacter };