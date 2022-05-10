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

