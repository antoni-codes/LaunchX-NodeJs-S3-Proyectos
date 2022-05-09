
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
/*-- Agregando una nueva ruta y respondiendo un nuevo texto --*/
// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a Launch X')
})

/*-- Regresando un Objeto --*/
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = { name: "Emmanuel", msg: "Hello" }
    res.send(explorer)
})

/*-- Query Params: Recibir parámetros por la url --*/
// http://localhost:3000/explorers/antoni
// req.params = {"explorerName":"antoni"}
app.get('/explorers/:explorerName', (req, res) => {
    req.params = { explorerName: "antoni" }
    res.send(req.params)
})


// Con esto inicializamos esta App
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

})
