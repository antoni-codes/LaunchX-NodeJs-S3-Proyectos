
// Usando Objeto Express
const express = require('express');
// App de Express
const app = express();
// Puesto en que vamos a ver nuestras app en el navegador: localhost: 3000
const port = 3000

// Path inicial, responderá a la url localhost: 3000
app.get('/', (req, res) => {
    res.send('Hello World')
})

// Con esto inicializamos esta App
app.listen(port, () => {
    console.log('Example app listening on port ${port}');
    
})