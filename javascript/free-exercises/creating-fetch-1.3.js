fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Teste',
        body: 'Meu primeiro teste de POST em uma API!',
        userId: '6',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
    .then((response) => response.json())
    .then((json) => console.log(json));


