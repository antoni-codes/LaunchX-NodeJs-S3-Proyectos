// Importanción de clase MissionCommander
const MissionCommander = require('./../app/MissionCommander')
// Prueba básica de Jest
describe("Unit Tests for Mission Commander Class", () => {
    test('Create a mission commander object :', () => {
        const myMissionCommander = new MissionCommander('Emmanuel')
        expect(myMissionCommander.name).toBe('Emmanuel')
    })
})