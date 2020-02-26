const fetchDataFunction = (url) => {
    return fetch(url).then(response => response.json());
}

export default fetchDataFunction; 