
class UserService {
    constructor(id, userName, name) {
        this.id = id
        this.userName = userName
        this.name = name
    }

    static create(id, userName, name,) {
        return new User(id, userName, name, "Sin bio")
    }
}

module.exports = UserService