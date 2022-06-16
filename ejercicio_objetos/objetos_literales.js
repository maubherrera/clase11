/* 01.- Del siguiente objeto: */
        var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
        };
/* 1. Muestra en pantalla el valor de la propiedad name mediante dot notation
2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs" */

console.log(student.name);
console.log(student["age"]);
console.log(Object.keys(student));


/* 02.- Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
Objeto de muestra: */
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

console.log(Object.keys(student));

 /* 03.- Verifica si la propiedad name se encuentra dentro del siguiente objeto: */
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
console.log(student.hasOwnProperty("name"));

    /* 04.-Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto.
Imprima también el objeto antes o después de eliminar la propiedad. Objeto para usar: */
   var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
console.log('Before editing',student);
delete student.rollno;
console.log('After editing',student);

    /* 05.- Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto: */
   var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
/* La nueva edad debe ser 35. */
console.log('Before editing', student);
console.log(student.age = '35')
console.log('After editing', student);

/* 06.- Escriba un programa para añadir una nueva propiedad al siguiente objeto: */
 var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
   /*  La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog. */
console.log('Before editing',student);
console.log(student.pet = 'cat');
console.log('After editing',student);


   /* 07.- Crea un código para llenar un objecto vacio: */
  const objeto = {}
/* Con las siguiente propiedades:
    color
    tamaño
    peso
    cantidad */



console.log('Before',objeto);
console.log(objeto.color = 'red', objeto.tamaño = 'grande', objeto.peso = '1000 kg', objeto.cantidad = "10 piezas",);
console.log('After editing', objeto)




/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */


/*Scoping ejercicios*/

/* 01 What’s the result of executing this code and why. */
function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();

/* RESPUESTA */ /*creo que puede mostrar primero la "a" como indefinida ya que no se declaro, y en el valor de foo debe mostrar el 2 pues existe el return especificando que debe de retornarlo */


/* 02 What is result? */
var a = 1; 

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  
  a = 5;
  
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);

/*RESUESTA. no tendría que ejecutarse ya que los valores de las funciones no exiten, no puede retornar la "a* ya que se encuenta fuera del bloque y los return rompen la ejecucion/

/* 03 What is the result of the following code? Explain your answer. */
var a = 1
function foo() {
  var a = 2;

  function bar() {
    console.log( a );   /* retorna el valor de 2 ya que está tomándolo de la variable definida global en la parte superior*/
  }

  return bar;
}
var baz = foo();
baz();  /*baz NO ES UNA FUNCION por lo cual no se puede llamar*/



/* 04 What will you see in the console for the following example? */
var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b();

/* Respuesta creo que no retorna nada puesto que no está definido y con ello se debería de romper la ejecución de la función */



/* saber si contiene una palabra */


var palabras = ["Hola mundo", "como te va", "listo pa reprobar"];
    if(palabras.includes("Hola mundo")) {
        console.log("Hola mundo si existe");
    } else{
        console.log("no existe");
    }


/* funcion 2 sumar los valores del arreglo [1,2,3,4,10,11] */

const array = [1,2,3,4,10,11];
let sum = 0;

for(let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);


/* funcion 3 saber si es un palindromo*/

function palindromo (palabra){
    const palabrainvertida = palabra.split("").reverse().join("");
    return palabrainvertida === palabra ? "Es palindromo" : "No es palindromo";

}
console.log(palindromo("ana"));
console.log(palindromo("palindromo"));
console.log(palindromo("anitalavalatina"))
/* no tengo ni idea de como fue que lo pude hacer */


/* conversor de temperaturas de Celcius a Fahrenheit */

let celsius = 10;

let fahrenheit = (celsius * 1.8) + 32;

console.log(`${celsius} °C es igual a ${fahrenheit} °fahrenheit.`);

