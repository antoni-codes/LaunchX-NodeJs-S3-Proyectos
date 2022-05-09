
// Usando Objeto Express
const express = require('express');
const res = require('express/lib/response');
// App de Express
const app = express();
// Puesto en que vamos a ver nuestras app en el navegador: localhost: 3000
const port = 3000

// Path inicial, responderá a la url localhost: 3000
app.get('/', (req, res) => {
    res.send('Hello World')
})

// Respondiendo texto
// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a Launch X')
})

// Con esto inicializamos esta App
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
})
