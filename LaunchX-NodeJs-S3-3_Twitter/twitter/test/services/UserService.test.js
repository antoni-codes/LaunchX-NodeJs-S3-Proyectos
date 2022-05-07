const UserService = require('./../../app/services/UserService')


describe("Unit Test for UserService Class", () => {
    /*
     *Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
    Criterios de aceptación:
    1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
    2. El valor de `bio` deberá ser por default para todos los `user` creados.
     */
    test("1. Create a new user sing the myUserService", () => {

        const myUserService = UserService.create(1, 'antonicodes', 'Emmanuel Hernández')
        expect(myUserService.id).toBe(1)
        expect(myUserService.userName).toBe('antonicodes')
        expect(myUserService.name).toBe('Emmanuel Hernández')
        expect(myUserService.bio).not.toBeUndefined()
    })

    // Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto. 
    test("2. Get all User Data in a list'", () => {

        const myUserService = UserService.create(1, 'antonicodes', 'Emmanuel Hernández')
        const userInfoInList = UserService.getInfo(myUserService)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe('antonicodes')
        expect(userInfoInList[2]).toBe('Emmanuel Hernández')
        expect(userInfoInList[3]).toBe("Sin bio")
    })


})