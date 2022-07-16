//Funcion que retorna todos los numeros pares menores al numero pasado como parámetro(x)
// function NumerosPares(x){
//     let array = [];
//     for (let i = x; i > 0; i--) {
//         if (i%2==0){
//             array.push(i);
//         }
//     }
        
//     return array;
// }
// console.log(NumerosPares(50)) ;


//Hacer una funcion que retorne todos los numeros impares menores al numero pasado como parametro(x)
// function NumerosImpares(x){
//     let array = [];
//     for (let i = x; i > 0; i--) {
//         if (i%2==1){
//             array.push(i);
//         }
//     }    
//     return array;
// }
// console.log(NumerosImpares(50)) ;



//Hacer una funcion que retorne todos los numeros multiplos de 3 menores al numero pasado como parametro(x)
function NumerosMultiplosDe3(x){
    let array = [];
    for (let i = x; i > 0; i--) {
        if(i%3==0){
            array.push(i);
        }
    }    
    return array;
}
console.log(NumerosMultiplosDe3(50)) ;

