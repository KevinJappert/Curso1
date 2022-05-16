
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

    depositar(cuanto) {
        this.monto = this.monto + cuanto
    },

    retirar(cuanto) {
        this.monto = this.monto - cuanto
    }
}

cuenta.depositar(100)
cuenta.depositar(50)
cuenta.depositar(10)
cuenta.depositar(10)

console.log(cuenta)

cuenta.retirar(10)
cuenta.retirar(200)

console.log(cuenta)

/////////////////////////////////
