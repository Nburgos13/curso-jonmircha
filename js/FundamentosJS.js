//Cadena de texto - string

let nombre = "Daniel";
let saludo = new string("Hola Mundo"); //Muy formal, no la utilizan

nombre.toUpperCase(); //Mayuscula
apellido.toLowerCase(); //Minuscula

//.trim lo que hace es quitar los espacios en blanco

//cadena de texto en arreglo
//saludo.split(" "); // cada que encuentra un espacio en blanco los separa y lo transforma en arreglos

// concatenacion
let nombre2 = "Nicolas";
let apellido2 = "Burgos";

let saludo2 = "Hola mi nombre es " + nombre2 + " " + apellido2 + ".";
console.log(saludo2);

//Interpolacion de variables
//Template strings
let saludo3 = `Hola mi nombre es ${nombre2} ${apellido2}.`; //interpolar una variable

console.log(saludo3);

//Numeros

let a = 2;
let b = new Number(3);
let c = 7.19;
let d = "5.6";

console.log(a, b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(typeof c, typeof d);
console.log(a + b);
console.log(c + parseInt(d));
console.log(c + parseFloat(d));
console.log(c + Number.parseInt(d));
console.log(c + Number.parseFloat(d));

//Booleanos

let verdadero = true;
let falso = false;

console.log(verdadero, falso);
console.log(typeof verdadero, typeof falso);
console.log(Boolean(0));
console.log(Boolean(-7));
console.log(Boolean(""));
console.log(Boolean(" ")); //Con espacio

//Undefined, Null, NaN

//undefined indica que no se ha inicializado una variable y que el valor esta ausente
let indefinida;
console.log(indefinida);

//null es un valor especial que indica ausencia de un valor
let nulo = null;
console.log(nulo);

//NaN - Not a Number
let noEsUnNumero = "hola" * 3.7;

console.log(noEsUnNumero);

//funciones: bloque de lineas de codigo autocontenido

//Funcion declarada

function estoEsUnaFuncion() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
}

//invocacion de funcion

estoEsUnaFuncion();

/*Una funcion es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una funcion puede aceptar parámetros y devolver un valor. Las funciones en JavaScript son objetos, un tipo esencial de objetos: Se dice que las funciones son ciudadanos de primera clase por que pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno*/

function unaFuncionQueDevuelveValor() {
  console.log("uno");
  return 19; //cuando aparece la palabra reservada return, o sea la primera palabra return, se olvida el resto del codigo, es decir no lo sigue ejecutando.
  console.log("dos");
  console.log("tres");
  return "La funcion ha retornado una cadena de texto";
}

let valorDefuncion = unaFuncionQueDevuelveValor();

console.log(valorDefuncion);

//con valores

function saludar(nombre, edad) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

saludar("Nicolas", 30);
saludar(); //undefined

//valores con defecto

function saludar(nombre = "Desconocido", edad = "0 años") {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

//Funciones declaradas vs funciones expresadas

funcionDeclarada(); //js se encarga de ordenar var - funciones, por ende no importa el lugar donde son declaradas

function funcionDeclarada() {
  console.log(
    "Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada"
  );
}

funcionDeclarada();

funcionExpresada(); //no puedes acceder a la funcion expresada por que no la inicializaste

//funcion anononima
const funcionExpresada = function () {
  console.log(
    "Esto es una funcion expresada, es decir, una funcion que se le ha asignado a una variable, si invocamos esta funcion antes de su definicion js nos dirá... "
  );
};

funcionExpresada(); //esta es valida

//Arreglos

const arreglo = [];
console.log(arreglo);

const arreglosConDatos = [1, true, "Hola", ["A", "B", "C"]];
console.log(arreglosConDatos);
console.log(arreglosConDatos.length); //longitud, todos los arreglos comienzan en "0",es decir los elementos comienzan en 0 y asi sucesivamente

console.log(arreglosConDatos[2]); //aparece en la consola el elementos "Hola"

console.log(arreglosConDatos[3][0]); //aparece en la consola el elementos "A"

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro");
console.log(colores); //coloca elemenentos al ultimo

colores.pop();
console.log(colores); //saca el ultimo elemento

//Objetos

const objetosCreados = {}; // un objeto es una coleccion de llaves(propiedades) y valores, a comparacion del arreglo este comienza con {} llaves

/*dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama métodos*/
const nicolas = {
  nombre: "Nicolas",
  apellido: "Burgos",
  edad: 32,
  pasatiempos: ["correr", "Hacer ejercicios", "Dar Clases"],
  soltero: true,
  contacto: {
    email: "burgosdanielnicolas@gmail.com",
    movil: "51353164",
  },
};

console.log(nicolas.edad); //imprimir los valores

//Tipos de Operadores

/*Aritmeticos: + - * "/" % () */

let letraA = 5 + 5;
console.log(letraA);

let modulo = 5 % 2;
console.log(modulo); //Residuo de nuestra division

/*Relacionales: >, <, >=, <=, ==, ===, !=, !==  */

console.log(8 > 9);
console - log(9 > 8);
console.log(8 >= 9);

/*
= 1 igual es asignacion de variable
== 2 iguales es comparacion de valores
=== 3 iguales es comparacion de tipo de datos y valor "Es el recomendable"
*/

/* Incremento Decremento */

let i = 1;
i = i + 2;
console.log(i);

i += 3;
console.log(i);

//Operador unario

i++;
console.log(i);

i--;
++i; //aumenta en 1

//logicos
/*  
  ! - Not : Niega, es decir lo que es verdadero lo vuelve falso y viceversa.
  || - or : cuando tengo dos o mas condiciones, cuando una se cumpla, es decir, sea verdadera el or validara. 
  && - and : cuando tengo dos o mas condiciones todas tienen que cumplirse, es decir, ser verdaderas para que AND se ejecute. 
 */

//Estructuras de control - Condicionales

//Estructura de control: aquel mecanismo que permite control el flujo de programacion

//if - else: permite tomar una decision, y si se cumple la condicion permite ejecutar el codigo.

let edad = 17;

if (edad > 17) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

/*Dejame dormir : 00hs - 05hs
Buenos Dias: 06hs - 11hs
Buenas Tardes: 12hs - 18hs
Buenas Noches: 19hs - 23
*/

let hora = 5;

if (hora >= 0 && hora <= 5) {
  console.log("Dejame Dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("Buenos Dias");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas Tardes");
} else {
  console.log("Buenas Noches");
}

/* Operador Ternario (condicion) ? verdadero : falso */

console.log("Operador Ternario");
let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(eresMayor);

//switch-case: diferente valores para una misma variable
/*
Domingo - 0
Lunes - 1
Martes - 2
Miercoles - 3
Jueves - 4
Viernes - 5
Sabado - 6
 */
let dia = 3;

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  default:
    console.log("El dia no existe");
    break;
}
