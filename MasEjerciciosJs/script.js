// dineroCofla = prompt("cuanto dinero tienes cofla?");
// dineroRoberto = prompt("cuanto dinero tienes roberto?");
// dineroPedro = prompt("cuanto dinero tienes pedro?");

// dineroCofla = parseInt(dineroCofla);
// dineroRoberto = parseInt(dineroRoberto);
// dineroPedro = parseInt(dineroPedro);

// //  1$ = cucurucho de 2 bochas.
// //  3$ = cucurucho de 3 bochas.
// //  5$ = 1/4.
// //  7$ = 1/2 o 2 de 1/4.
// //  0$ = no tenes suficiente dinero.

// if(dineroCofla >= 1 && dineroCofla < 3 ){
//     alert("Te alcanza para un cucurucho de 2 bochas");
//     alert("y te sobran " + (dineroCofla - 1) + "$");
// }
// else if(dineroCofla < 1){
//     alert("No tienes suficiente dinero");
// }
// else if(dineroCofla >= 3 && dineroCofla < 5){
//     alert("Te alcanza para un cucurucho de 3 bochas");
//     alert("y te sobran " + (dineroCofla - 3) + "$");
// }
// else if(dineroCofla >= 5 && dineroCofla < 7){
//     alert("Te alcanza para 1/4 de helado");
//     alert("y te sobran " + (dineroCofla - 5) + "$");
// }
// else if(dineroCofla >= 7 && dineroCofla < 10){
//     alert("Te alcanza para 1/2 de helado o 2/4");
//     alert("y te sobran " + (dineroCofla - 7) + "$");
// }
// else if(dineroCofla > 10){
//     alert("tienes demasiado dinero, andá a comprar a una heladeria artesanal...Aca solo atendemos a pobres");
// }



// if(dineroRoberto >= 1 && dineroRoberto < 3 ){
//     alert("Te alcanza para un cucurucho de 2 bochas");
//     alert("y te sobran " + (dineroRoberto - 1) + "$");
// }
// else if(dineroRoberto < 1){
//     alert("No tienes suficiente dinero");
// }
// else if(dineroRoberto >= 3 && dineroRoberto < 5){
//     alert("Te alcanza para un cucurucho de 3 bochas");
//     alert("y te sobran " + (dineroRoberto - 3) + "$");
// }
// else if(dineroRoberto >= 5 && dineroRoberto < 7){
//     alert("Te alcanza para 1/4 de helado");
//     alert("y te sobran " + (dineroRoberto - 5) + "$");
// }
// else if(dineroRoberto >= 7 && dineroRoberto < 10){
//     alert("Te alcanza para 1/2 de helado o 2/4");
//     alert("y te sobran " + (dineroRoberto - 7) + "$");
// }
// else if(dineroRoberto > 10){
//     alert("tienes demasiado dinero, andá a comprar a una heladeria artesanal...Aca solo atendemos a pobres");
// }



// if(dineroPedro >= 1 && dineroPedro < 3 ){
//     alert("Te alcanza para un cucurucho de 2 bochas");
//     alert("y te sobran " + (dineroPedro - 1) + "$");
// }
// else if(dineroPedro < 1){
//     alert("No tienes suficiente dinero");
// }
// else if(dineroPedro >= 3 && dineroPedro < 5){
//     alert("Te alcanza para un cucurucho de 3 bochas");
//     alert("y te sobran " + (dineroPedro - 1) + "$");
// }
// else if(dineroPedro >= 5 && dineroPedro < 7){
//     alert("Te alcanza para 1/4 de helado");
//     alert("y te sobran " + (dineroPedro - 5) + "$");
// }
// else if(dineroPedro >= 7 && dineroPedro < 10){
//     alert("Te alcanza para 1/2 de helado o 2/4");
//     alert("y te sobran " + (dineroPedro - 7) + "$");
// }
// else if(dineroPedro > 10){
//     alert("tienes demasiado dinero, andá a comprar a una heladeria artesanal...Aca solo atendemos a pobres");
// }

// Refactorizado, lo mismo//Mismo ejercicio

// const definirCompra = (n)=>{
//     let din = prompt(`Dinero de ${n}`);
//     if (din >= 1 && din < 3) return (`${n}: te alcanza un cucurucho de 2 bochas`);
//     if (din >= 3 && din < 5) return (`${n}: te alcanza un cucurucho de 3 bochas`);
//     if (din >= 5 && din < 7) return (`${n}: te alcanza un 1/4 de helado`);
//     if (din >= 7 && din < 10) return (`${n}: Te alcanza para 1/2 de helado o 2/4`);
//     if (din < 1 ) return (`${n}: No tienes suficiente dinero`);
//     if (din >= 10 ) return (`${n}: Tienes demasiado dinero, andá a comprar a una heladeria artesanal...Aca solo atendemos a pobres`);
// }

// console.log(definirCompra("Cofla"))
// console.log(definirCompra("Roberto"))
// console.log(definirCompra("Pedro"))

// --------------------------------------------------------------------------//

//Arrays//
let plantel = ["1 Grinovero","2 Ponce","3 Flores", "4 Diaz","5 Rossi","6 Jappert","7 Cecherini","8 Alassia","9 Rostagno","10 Luna","11 Costamagna"];

let plantel1 = {
    arquero: "Grinovero",
    defensores: "Jappert,Ponce,Flores,Diaz",
    volantes:"Alassia,Rossi,Cecherini",
    delanteros:"Rostagno,Costamagna,Luna"
    };

console.log(plantel)
console.log(plantel1)



