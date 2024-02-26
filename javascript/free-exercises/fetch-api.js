// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(json => console.log(json));

async function logMovies() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const movies = await response.json();
    console.log(movies);
}

logMovies();