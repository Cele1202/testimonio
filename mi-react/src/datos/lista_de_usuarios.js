
// llamando a la API de JSONPlaceholder usando el Protocolo HTTP
let response = await fetch('https://jsonplaceholder.typicode.com/users')

// Sacando los usuarios de la respuesta
let users = await response.json()

export default users;