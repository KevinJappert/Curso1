class Person {

    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
        

    }


    greet() {
        return 'hola mundo, soy' + this.name + this.lastname
    }
}


const user = new Person ('Joe', 'Ray')
const user2 = new Person ('Ryan', 'Jesus')

console.log(user.greet())
console.log(user2.greet())

