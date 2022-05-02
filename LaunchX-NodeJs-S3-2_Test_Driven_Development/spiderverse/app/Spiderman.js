class Spiderman {
    constructor(name, age, actor, numMovies, studio) {
        this.name = name
        this.age = age
        this.actor = actor
        this.numMovies = numMovies
        this.studio = studio
    }

    getInfo() {
        // "return" para regresar un string con interpolación donde puedas agregar las propiedades actor y studio 
        return console.log(`Hey, I'm ${this.name} from ${this.studio}`)
    }

}



// Exportamos la Clase usando CommonJS
module.exports = Spiderman