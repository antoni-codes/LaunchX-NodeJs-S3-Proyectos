const UserService = require('./../../app/services/UserService');

class UserView {

    static createUser(payload) {

        if (payload === null) {
            console.log("Error es Null");
            return { error: "El payload no existe." }
        } else if (typeof payload.id === 'number' && typeof payload.userName === 'string' && typeof payload.name === 'string') {
            return UserService.create(payload.id, payload.userName, payload.name)
        } else {
            return { error: "Error, las propiedades del payload necesita tener un tipo de valor válido" }
        }

    }

}

module.exports = UserView
