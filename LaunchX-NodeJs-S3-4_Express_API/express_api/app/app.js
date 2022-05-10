/*-- Usando Objeto Express --*/
const express = require('express');

// app de express app
const app = express();
app.use(express.json()) // Indicamos que usaremos JSON

// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

/*-- Inicializaciónd de la app  --*/
app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
})


/*-- GET: CREA UN ENDPOINT QUE REGRESE UNA LISTA DE EXPLORERS --*/
// HTTP METHODS
app.get('/v1/explorers', (req, res) => {
    console.log(`API Explorers GET ALL requests ${new Date()}`);

    const explorer1 = {id:1, name: 'Emmanuel'}
    const explorer2 = {id:2, name: 'Carlo'}
    const explorer3 = {id:3, name: 'Laura'}
    const explorer4 = {id:4, name: 'Nicole'}

    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

/*-- GET: CREA UN "ENDPOINT" QUE TE REGRESE UN EXPLORER MEDIANTE UN ID --*/
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorer GET request ${new Date()}`);
    console.log(`Getting Explorer with id: ${req.params.id}`);

    const explorer = {id: 1, name: 'Emmanuel'}
    res.status(200).json(explorer);
})


/*-- POST: CREA UN "ENDPOINT" QUE SE ENCARGUE DE CREAR UN EXPLORER --*/
app.post('/v1/explorers', (req, res) => {
    console.log(`API Explorers POST request ${new Date()}`);

    const requestBody = req.body // Parámetros de un cliente
    res.status(201).json({message: "Created"})
})

/*-- PUT: CREA UN "ENDPOINT" QUE SE ENCARGUE DE ACTUALIZAR UN EXPLORER  --*/
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers PUT request ${new Date()}`);
    console.log(`Update Explorer with id ${req.params.id}`);

    const requestBody = req.body // Parámetros de un cliente
    res.status(200).json({message: "Update!"})
})

/*-- DELETE: CREA UN "ENDPOINT" PARA ELIMINAR UN EXPLORER--*/
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers DELETE request ${new Date()}`);
    console.log(`Delete Explorer with id: ${req.params.id}`);
    
    const requestBody = req.body // Parámetros de un cliente
    res.status(200).json({message: "Deleted"});
})