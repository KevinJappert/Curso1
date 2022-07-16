// function contrasenaValida(contraseña){
    
// if(contraseña == "2Fj(jjbFsuj") {
//     return true
// }

// if(contraseña == "eoZiugBf&g9") {
//     return true
// }

// if(contraseña == "hola") {
//     return false
// }

// if(contraseña == "") {
//     return false
// }


// }

// console.log(contrasenaValida("2Fj(jjbFsuj")) // true
// console.log(contrasenaValida("eoZiugBf&g9")) // true
// console.log(contrasenaValida("hola")) // false
// console.log(contrasenaValida("")) // false


//______________________________________________________________________//


// function calcularImpuestos(edad, ingresos){
// if(edad>=18 && ingresos>=1000){
//     return ingresos * 0.4   //40% de 10000 o 1000 =  ""40/100 seria el 40% ""justamente de 10000 y 1000
//                                                     //.......    ""20/100 seria el 20% ""
// }else return 0

// }

// console.log(calcularImpuestos(18, 1000)) // 400
// console.log(calcularImpuestos(40, 10000)) // 4000
// console.log(calcularImpuestos(17, 5000)) // 0
// console.log(calcularImpuestos(30, 500)) // 0



//_________________________________________________________________________//

//  


//____________________________________________________________________//




function fizzBuzz(valor, mult){
    var resp = valor % mult;
    if (resp==0)
        return true;
    else
        return false;
    
}

function multiple (){
    var min= 0;
    for (var i=100 ; i>min ; i--){
        var mult3 = fizzBuzz(i,3);
        var mult5 = fizzBuzz(i,5);
        if(mult3 && mult5){
            console.log(i , "fizzBuzz")
        }else {
            if(mult3){
                console.log(i, "Fizz")
            }else {
                if(mult5){
                    console.log(i, "Buzz")
                }else{
                    console.log("Nada")
                }
            }
        }
    }
}






// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8

