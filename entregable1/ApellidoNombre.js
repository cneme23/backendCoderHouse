class Usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    
    }
//funcion clasica
getFullName (){
   return `${this.nombre} ${this.apellido}` 
}
//funcion flecha
getFullName = () =>  `${this.nombre} ${this.apellido}` 

//funcion clasica 
addMascota (nombre){
return this.mascotas.push(nombre)
}
//Funcion flecha
addMascota = (nombre) => this.mascotas.push(nombre);

//funcion clasica
countMascotas(){
return this.mascotas.length
}

//funcion flecha
countMascotas = () => this.mascotas.length;

//Funcion clasica
addBook(nombreLibro,autorLibro){
return this.libros.push({nombre:nombreLibro , autor:autorLibro})
}

//Funcion flecha
addBook = (nombreLibro,autorLibro) => this.libros.push({nombre:nombreLibro,autor:autorLibro});


//funcion clasica

getBookNames(){
    this.libros.map(function (libro){
     return libro.nombre
    } )
}

//funcion flecha

getBookNames = () => this.libros.map(libro=>libro.nombre)
}

//Aca instancio el nuevo objeto con los valores aleatorios

const usuario = new Usuario ("Carlos","Neme",[
    {nombre:"100 años de soledad",
     autor:"Gabriel Garcia Marquez"
},
    {nombre:"Resistencia",
    autor: "Ernesto Sabato"
}

],["Perro","Gato", "loro"],
);

//Aca ejecuto invoco todos los metodos de la clase

console.log(usuario.getFullName());
console.log(usuario.addMascota("Hamster"))
console.log(usuario.countMascotas());
console.log(usuario.addBook("La casa de los espiritus","Isabel Allende"))
console.log(usuario.getBookNames());
console.log(usuario);