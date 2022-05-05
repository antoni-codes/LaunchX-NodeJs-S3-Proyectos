const User = require('./../../app/models/User')


describe("Unit Test fors for User Class", () => {
    test("Create an User Object", () => {
        // Aquí se invoca el código que seusarna en la App
        const myUser = new User(1, 'antonicodes', 'Emmanuel', "Hi, i'm a Web Developer", 'dateCreated', 'lastUpdated')

        // Aquí se validan los resultados de el código anterior
        /*
            Esta estructura es una comparación que va a igualar el valor de la izquierda con el valor 
            de la derecha (valor esperado)
        */
        expect(myUser.id).toBe(1)
        expect(myUser.userName).toBe('antonicodes')
        expect(myUser.bio).toBe("Hi, i'm a Web Developer")
        expect(myUser.dateCreated).not.toBeUndefined() // Verifica que el valor no sea undefine
        expect(myUser.lastUpdated).not.toBeUndefined() // Verifica que el valor no sea undefine
    })

    test("Add Getters to the class", () => {
        const myUser = new User(1, 'antonicodes', 'Emmanuel', "Hi, i'm a Web Developer" );

        expect(myUser.getUsername).toBe('antonicodes');
        expect(myUser.getBio).toBe("Hi, i'm a Web Developer")
        expect(myUser.getDateCreated).not.toBeUndefined()
        expect(myUser.getLastUpdated).not.toBeUndefined()
    })

    test("Add Setters to the class", () => {
        const myUser = new User(1, 'antonicodes', 'Emmanuel', "Hi, i'm a Web Developer");

        myUser.setUserName = "antoniandcodes"
        expect(myUser.userName).toBe("antoniandcodes")

        myUser.setBio = "I love programming"
        expect(myUser.bio).toBe("I love programming")
    })
})