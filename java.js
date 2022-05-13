
const user = {
    name: "Kevin",
    lastname: "Jappert",
    age: 30,

    showwFullName() {
        return this.name + " " + this.lastname
        }
    
}

console.log(user.showwFullName())

const cuenta = {
    numero: "132131234",
    monto: 100,

    depositar() {
        this.monto = this.monto + 100
    },

    retirar() {
        this.monto = this.monto - 100
    }
}

cuenta.depositar()
cuenta.depositar()
cuenta.depositar()
cuenta.depositar()

console.log(cuenta)

cuenta.retirar()
cuenta.retirar()

console.log(cuenta)
