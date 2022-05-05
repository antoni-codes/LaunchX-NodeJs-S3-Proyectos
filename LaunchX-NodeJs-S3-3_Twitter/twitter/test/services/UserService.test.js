const UserService = require('./../../app/services/UserService')


describe("Unit Test for UserService Class", () => {
    test("1. Create a new user sing the myUserService", () => {
        
        const myUserService = new UserService(1, 'antonicodes', 'Emmanuel Hernández')

        expect(myUserService.id).toBe(1)
        expect(myUserService.userName).toBe('antonicodes')
        expect(myUserService.name).toBe('Emmanuel Hernández')
        expect(myUserService.bio).not.toBeUndefined()
    })
})