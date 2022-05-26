// let count = 50;

// while(count > 0) {
//     console.log(count);
//     count = count -1;
// }



//------------------------bucles parecidos, uno aumentando, otro decreciendo



// let count = 0;  //podes empezar del 1 tambien

// while(count < 50) {
//     console.log(count);
//     count = count +1;
//     // o count++;
// }





//---------------------------------



// let names = ["ryan", "joe" ,"john"];

// for(let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// names.length devuelve 3, que son las posiciones de ryan,joe,john

//bucle reproduciendo al reves o normal.


let names = ["ryan", "joe" ,"john"];

for(let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

