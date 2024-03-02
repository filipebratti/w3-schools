fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify ({
        title: 'foo',
        body: 'test',
        userId: '4',
    }),
    headers: {
        'Content-type': 'application/json; charser=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json))