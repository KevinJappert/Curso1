class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;

    }
    verInfo(){
        console.log(this.info);
    }
}
let perro = new animal("perro","5","marron");
let gato = new animal("gato","2","negro");
let pajaro = new animal("pajaro","1","verde");
let hormiga = new animal("hormiga","0,5","roja")

perro.verInfo();
gato.verInfo();
pajaro.verInfo();
hormiga.verInfo();