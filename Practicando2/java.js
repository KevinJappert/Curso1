
///constructor
function Person() {
    this.name = ""
    this.lastname = ""
    this.age = 0
    this.showwFullName = function () {
        return this.name + " " + this.lastname
    }
}

const user2 = new Person()
user2.name = "JoE"
user2.lastname = "Mcmillan"
user2.age = 30


const user3 = new Person()
user3.name = "Kevin"
user3.lastname = "Jappert"
user3.age = 30


const user4 = new Person()
const user5 = new Person()


console.log(user2,user3, user4, user5)
