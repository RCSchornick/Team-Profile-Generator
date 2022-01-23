const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, ID, email, github) {
        super(name, ID, email)
        this.github=github
    }
    getgithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}
module.exports=Engineer