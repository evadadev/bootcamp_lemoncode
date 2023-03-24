import axios from "axios";

function getUsers() {
    return axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response) => {
        const myPromise = new Promise((resolve) => {
            setTimeout(function () {
                resolve(response.data.results);
            }, 2000);
        });

        return myPromise;
    });
};

function getUser(id) {
    return axios.get("https://rickandmortyapi.com/api/character/" + id).then((response => {
        return response.data;
    }));
}

export { getUsers, getUser };