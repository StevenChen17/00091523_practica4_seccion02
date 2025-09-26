# 00091523_practica4_seccion02

Analicemos ¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto? 

R/ Javascript esta diseñado para ser un lenguaje flexible, esto da lugar algunas comportamientos que se deben considerar a la hora de trabajar.
Caso 1: Operador '+' con distintos tipos, esto se debe a que javascript intenta coaccionar los tipos automaticamente para realizar la operacion
si se suma un numero con otro numero, se obtiene otro numero, ejemplo: console.log(2+2) //4
si se suma un string con un numero este convierte el numero en un string, ejemplo: console.log( "3" + 3) //33
si se suma un valor booleano con un numero el resultado es un numero, ejemplo: console.log(true + 1) //2
si se suma un null con un numero, null se toma como cero, ejemplo: console.log(null + 2) //2
si se suma undefined con un numero, como undefined no tiene una conversion numerica valida, la suma devuelve NaN

Caso 2: Precedencia de operadores
javascript sigue la precedencia de operadores como en las matematicas, donde los parentesis tienen la mayor prioridad, y va de izquierda a derecha a excepcion de el operador de potencia '**' que va de derecha a izquierda

Caso 3: Comparacion con coercion
Como se menciono anteriormente, javascript coacciona los valores antes de realizar una operacion
en caso de querer comparar dos valores con tipos distintos hay dos operadores de comparacion
'==' que compara los dos valores despues de coaccionarlos
mientras que el operador '===' realiza una comparacion estricta,valor y tipo

Caso 4: Incrementos y asignaciones
en javascript las asignaciones tienen la menor prioridad de los operadores
entonces sucede algo curioso si asignas un incremento como el valor de otra varibla, ejemplo:
let a = 5 //a = 5
let b = a++ //b=5 y a=6

Analicemos ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?

R/ En la mayoria de compartamiento de flujos de control, javascript es similar a otros lenguajes y ambientes de desarollo. Aunque cabe destacar algunas caracterisitcas que tiene javascript, por ejemplo, el manejo de tipado flexible 