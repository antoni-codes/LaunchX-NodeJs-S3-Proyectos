const Spiderman = require('./../app/Spiderman')

describe("Unit Tests for Spiderman Class", () => {
    test('Case 1: Create an Spiderman Object', () => {
        
        // Aquí escribimos el código que queremos usar tal cuál
        // Quiero poder instanciar un objeto a partir de la clase Spiderman con esta información
        const andrewGarfield = new Spiderman('The Amazing Spiderman', 31, 'Andrew Garfield', 2, 'Sony')

        // Validamos que este código funcione de la forma esperada
        expect(andrewGarfield.name).toBe('The Amazing Spiderman')
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe('Andrew Garfield')
        expect(andrewGarfield.numMovies).toBe(2)
        expect(andrewGarfield.studio).toBe('Sony')
    })

    test('Case 2: Use the method getInfo()', () => {
        const tomHolland = new Spiderman('Spiderman: Far from Home', 25, 'Tom Holland', 5, 'Marvel')
        expect(tomHolland.getInfo())
    })
})