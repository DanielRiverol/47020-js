/* function Libro(titulo, autor, precio, stock = 0) {
  this.titulo = titulo;
  this.autor = autor;
  this.precio = parseFloat(precio);
  this.stock = stock;
  //Metodo personalizado
  this.vender = function (cant) {
    return this.precio * cant;
  };
} */

//class
class Libro {
  constructor(titulo, autor, precio, stock) {
    this.titulo = titulo;
    this.autor = autor;
    this.precio = parseFloat(precio);
    this.stock = stock;
  }
  vender(cant) {
    return this.precio * cant;
  }
}
const libro1 = new Libro(
  "Harry Poteer y la piedra filosofal",
  " J.K Rowling",
  1230,
  3
);

// console.log(libro1);
// console.log(libro1.titulo);
// console.log(libro1.autor);

const libro2 = new Libro("IT", "Stephen King", 12000, undefined);
// console.log(libro2);
// console.log(libro2.titulo);
/* console.log(
  "El total de la venta del libro " +
    libro1.titulo +
    " por dos unindades es : $" +
    libro1.vender(2)
);
console.log(
  "El total de la venta del libro " +
    libro2.titulo +
    " por dos unindades es : $" +
    libro2.vender(2)
); */
/* libro1.editorial="Estrada"
console.log("edicion" in libro1 );
for (const key in libro1) {
 console.log(key +":" + libro1[key]);
}
for (const key in libro2) {
 console.log(key +":" + libro2[key]);
} */

//array
const numeros = [1, 4, 8, 9, 0, 3, 3.6,0];
const cajonCubiertos = ["cucharas", "tenedores", "cuchillos", "espatula"];
const arrayMixtos = ["Bautista","Pareja", 3, true, "Emmanuel", { nombre: "Juan" }];
/* console.log(numeros);
console.log(numeros.length);
console.log(cajonCubiertos);
console.log(cajonCubiertos.length);

console.log(arrayMixtos);
console.log(arrayMixtos[1]);
console.log(cajonCubiertos[1]);
console.log(cajonCubiertos[0]); */

//push al final
numeros.push(8,-1,4,55,988)
//unshift al principio
numeros.unshift(-33,1,4,-1)

console.log(numeros);
//pop elimina del final
numeros.pop()

//shift elimina delm principio
numeros.shift()

numeros.splice(3,2)

console.log(numeros);
for (let i = 0; i < numeros.length; i++) {
//console.log(numeros[i]);
}
//unir dos arrays concat
const nuevoArray= cajonCubiertos.concat(arrayMixtos)
console.log(nuevoArray);

//slice
/* const otroArray= nuevoArray.slice(2,4)
console.log(otroArray);

console.log(otroArray.indexOf("cuchillos"));
console.log(otroArray.indexOf("espatula"));
console.log(otroArray.indexOf("tenedor"));

console.log(otroArray.includes("cuchillos"));
console.log(otroArray.includes("tenedor")); */

const biblioteca=[]

console.log(biblioteca);

biblioteca.push(libro1)
biblioteca.push(libro2)

biblioteca.push(new Libro("lala", "hshs, 345, 1"))
console.log(biblioteca);
for (let i = 0; i < biblioteca.length; i++) {
  /* console.log(biblioteca[i].titulo); */
  const libro= biblioteca[i]
  console.log(libro);
  console.log(libro.titulo);
  //recorrer con un forin
  
}
