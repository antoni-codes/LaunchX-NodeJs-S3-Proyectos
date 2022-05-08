const User = require('./../models/User')
class UserService {

    static create(id, userName, name) {
        return new User(id, userName, name, "Sin bio")
    }

    static getInfo(user) {
        // Retorna una lista/array con los valores de los atributos del objeto
        return Object.values(user)
    }

    static updateUserUsername(user, newUserName) {
        return user.setUserName = newUserName
    }

    static getAllUsernames(newUserName) {
        const listUserNames = newUserName.map(user => user.userName)
        return listUserNames
    }
}

module.exports = UserService