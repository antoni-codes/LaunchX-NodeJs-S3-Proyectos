
class User {
    constructor(id, userName, name, bio, dateCreated, lastUpdated){
        this.id = id
        this.userName = userName
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }

    getUsername() {
        return this.userName
    }

    getBio() {
        return this.bio
    }

    getDateCreated() {
        return this.dateCreated
    }

    getLastUpdated() {
        return this.lastUpdated
    }
}

module.exports = User