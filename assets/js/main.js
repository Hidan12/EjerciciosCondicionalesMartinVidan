//1
let numA = parseInt(prompt("ingrese un numero a: "))
let numB = parseInt(prompt("ingrese el numero b: "))

let primerNumMayor = false
if (numB < numA) {
    primerNumMayor = true
}
console.log(" el primer numero es mayor que el segundo ? ", primerNumMayor);

//2
numA = parseInt(prompt("ingrese un numero a: "))
numB = parseInt(prompt("ingrese el numero b: "))

if (numA == numB) {
    console.log("los dos numeros son iguales")
} else {
    console.log("los numeros ingresados son diferentes")
}

//3
numA = parseInt(prompt("ingrese un numero a: "))
numB = parseInt(prompt("ingrese el numero b: "))
if (numA > numB) {
    console.log("el numero " + numA + " es mayor que " + numB)
}
else if (numB > numA){
    console.log("el numero " + numB + " es mayor que " + numA)
}
else{
    console.log("los numeros son iguales");
}

//4
numA = parseInt(prompt("ingrese un numero a: "))
numB = parseInt(prompt("ingrese el numero b: "))
let numC = parseInt(prompt("ingrese un numero c: "))

if (numA < numB && numA < numC) {
    console.log("el numero menor es: ", numA)    
}
else if(numB < numA && numB < numC){
    console.log("el numero menor es: ", numB)
}
else if(numC < numA && numB > numC){
    console.log("el numero menor es: ", numC);
}
else{
    console.log("hay dos o mas numeros iguales");
}

//5
let personaA = {
    nombre: "juan",
    edad: 25,
    altura: 170
}

let personaB = {
    nombre: "carlos",
    edad: 26,
    altura: 175
}

if (personaA.edad > personaB.edad) {
    console.log(personaA.nombre + "es mayor que " + personaB.nombre)
} else {
    console.log(personaB.nombre + "es mayor que " + personaA.nombre)
}

if (personaA.altura > personaB.altura) {
    console.log(personaA.nombre + "es mas alta que " + personaB.nombre)
} else {
    console.log(personaB.nombre + "es mas alta que " + personaA.nombre)
}



//6
let nombre = prompt("ingrese su nombre: ")
let edad = parseInt(prompt("ingrese su edad: "))
let altura = parseInt(prompt("ingrese su altura en cm: "))
let vision = parseInt(prompt("ingrese su numero de vicion (1 al 10): "))
if (edad > 18 && altura > 150 && vision >= 8) {
    console.log("esta capacitado par conducir");
}else{
    console.log("no esta capacitado para conducir");
}

//7
nombre = prompt("ingrese su nombre: ")
let tipoPase = prompt("ingrese su tipo de pase (vip o normal) ")
let tieneEntrada = prompt("tiene entrada? (si, no, s, n, true, false)")
if (nombre == "martin" || tipoPase == "vip") {
    console.log("bienvenido");
}else if(tieneEntrada == "s" || tieneEntrada == "si" || tieneEntrada == "true"){
    let pregunta = prompt("desea usarla? (si o no)")
    if (pregunta == "si" || pregunta == "SI") {
        console.log("bienvenido")
    }
}else{
    let pregunta = prompt("desea comprar la entrada? (si o no)")
    if(pregunta == "si" || pregunta == "SI"){
        let dinero = parseInt(prompt("cuanto dinero tiene disponible(poner numeros entero)"))
        if (dinero >= 1000) {
            console.log("felicitacion entrada comprada con exito, benvenido")
        }else{
            console.log("venta rechazada");
        }
    }else{
        console.log("lamentamos que no desee comprar la entrada, hasta luego");
    }
}


//8
let numeroIncognita = 3
let respuesta = parseInt(prompt("ingrese un numero del 1 al 10 para participar"))


if (respuesta != numeroIncognita) {
    if (respuesta > numeroIncognita) {
        respuesta = parseInt(prompt("casi pero no... el numero es menor al que puso, ingrese otro numero (1 al 10)"))  
    }else{
        respuesta = parseInt(prompt("casi pero no... el numero es mayor al que puso, ingrese otro numero (1 al 10)"))
    }    
}else{
    console.log("felicidades el numero elegido era el numero incognito");
}
if (respuesta != numeroIncognita) {
    if (respuesta > numeroIncognita) {
        respuesta = parseInt(prompt("casi pero no... el numero es menor al que puso, ingrese otro numero (1 al 10)"))  
    }else{
        respuesta = parseInt(prompt("casi pero no... el numero es mayor al que puso, ingrese otro numero (1 al 10)"))
    }    
}else{
    console.log("felicidades el numero elegido era el numero incognito");
}
if (respuesta != numeroIncognita) {
    console.log("numero equivocado, usted perdio");
}else{
    console.log("felicidades el numero elegido era el numero incognito")
}

//9
edad = parseInt(prompt("ingrese la edad a verificar: "))

if (edad >= 0 && edad <= 12) {
    console.log("la edad ingresada es de un infante")
}else if(edad >= 13 && edad <= 18 ){
    console.log("la edad ingresada es de un adolecente");
}else if(edad >= 19 && edad <= 45){
    console.log("la edad ingresada es de un mayor joven");
}else if(edad >= 45 && edad <= 100 ){
    console.log("la edad ingresada es de un anciano");
}else if(edad > 100){
    console.log("esta seguro que la edad es mayor a 100? ");
}else{
    console.log("la edad ingresada no es valida.");
}

//10

let jug1 = prompt("ingrese la opcion que desea entre piedra, papel o tijera del jugador 1")
let jug2 = prompt("ingrese la opcion que desea entre piedra, papel o tijera del jugador 2")

if (jug1 == "piedra" && jug2 == "tijera") {
    console.log("gana jugador 1");
}else if(jug1 == "papel" && jug2 == "piedra"){
    console.log("gana jugador 1");
}else if(jug1 == "tijera" && jug2 == "papel"){
    console.log("gana jugador 1");
}else if(jug2 == "piedra" && jug1 == "tijera"){
    console.log("gana jugador 2");
}else if(jug2 == "papel" && jug1 == "piedra"){
    console.log("gana jugador 2");
}else if(jug2 == "tijera" && jug1 == "papel"){
    console.log("gana jugador 2");
}else if(jug1 == jug2){
    console.log("empate");
}else{
    console.log("uno de los jugadores ha hecho trampa")
}

//11
let color = prompt("escriba un color ")
switch (color) {
    case "blanco":
        console.log("falta de color")
        break;
    case "negro":
        console.log("falta de color")
        break;
    case "verde":
        console.log("color de la naturaleza")
        break;
    case "azul":
        console.log("el color del agua")
        break;
    case "amarillo":
        console.log("el color del sol")
        break;
    case "rojo":
        console.log("el color del fuego");
        break
    case "marron":
        console.log("el color de la tierra");
        break
    default:
        console.log("Excelente elección, no lo teníamos pensado");
        break;
}

//12
let valor1 = parseInt(prompt("ingrese un valor"))
let valor2 = parseInt(prompt("ingrese otro valor"))
let operacion = prompt("ingresse que operacion desea realizar")

let resultado;

switch (operacion) {
    case "suma":       
        console.log("la suma de " + valor1 + " + " + valor2 +  "es igual a" + (valor1 + valor2));
        break;
    case "resta": 
        console.log("la resta de " + valor1 + " - " + valor2 +  "es igual a" + (valor1 - valor2));
        break
    case "multiplicacion":
        console.log("la multiplicacion de " + valor1 + " * " + valor2 +  "es igual a" + (valor1 * valor2));
        break;
    case "division":
        if (valor2 != 0) {
            console.log("la division de " + valor1 + " / " + valor2 +  "es igual a" + (valor1 / valor2));
        }else{
            console.log("ERROR: División por cero");
        }
        break;
    default:
        console.log("error al elegir la operacion");
        break;
}

//13
let nombreCompleto = prompt("ingrese su nombre completo: ")
let numeroDocumento = prompt("ingrse su numero de dni: ")
let fechaNacimiento = prompt("ingrse su fecha de nacimiento")
let domicilio = prompt("ingrse el domicilio que fijura en su dni")

console.log("su nombre es: " + nombreCompleto + " su numero de dni es: " + numeroDocumento + " su fecha de nacimiento es " + fechaNacimiento + " y su domicilio es en " + domicilio);
let datoCorrecto = prompt("los datos mostrados son correctos? (si o no)")

if (datoCorrecto == "si") {
    let dni = {
        nombre: nombreCompleto,
        numeroDni: numeroDocumento,
        fechaNacimiento: fechaNacimiento,
        domicilio: domicilio
    }
    console.table(dni)
    console.log("registro exitoso");
}else{
    console.log("vuelva a intentarlo en 1 mes");
}