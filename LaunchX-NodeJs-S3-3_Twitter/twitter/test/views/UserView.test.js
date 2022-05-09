
const UserView = require('./../../app/views/UserView')

describe("Test for UserView", () => {

    test("1. Return an error object try to create a new user with a null payload", () => {

        const payload = null
        const result = UserView.createUser(payload)
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    })

    test("2. Return an error object when try to create a new user with a payload with invalid propierties", () => {
        const payload = {id: "id", userName: null, name: 12}
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesita tener un valor válido/)
    })

    test("3. Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {userName: 'UserName'}
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesita tener un valor válido/)
    })

    test("4. Create a user by a given valid payload", () => {
        const payload = {id: 1, userName: 'antonicodes', name: 'Emmanuel Hernández'}
        const result = UserView.createUser(payload)

        expect(result.id).toBe(1)
        expect(result.userName).toBe('antonicodes')
        expect(result.name).toBe('Emmanuel Hernández')
    })
})

