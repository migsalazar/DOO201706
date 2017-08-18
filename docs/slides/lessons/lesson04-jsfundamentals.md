# Diseño Orientado a Objetos
## Fundamentos de JavaScript

-==========-

## Fundamentos

- Tipos de datos
- Variables
- Flujo de control
- Arreglos
- Ciclos
- Objetos
- Funciones
- Eventos

-==========-

## Ejecución de Javascript

Para ejecutar un programa de javascript, es necesario el uso de cualquier navegador moderno

- Chrome
- IE
- Firefox
- Safari
- Opera

La edición de Javascript puede ser en cualquier editor de texto: Notepad, Notepad++, TextMate, etc.

-==========-

## ¿Qué puedo hacer con Javascript?

- Trabajo de elementos HTML
- Inyección de HTML
- Páginas responsivas
- Detección de navegadores
- Validación y trabajo de formularios
- Animaciones
- Construir aplicaciones a través de un framework (AngujarJS, ReactJS, Jquery, BackboneJS, etc.)

-==========-

## Tipos de datos

Aunque en javascript no es necesario la definición del tipo de dato al momento de declarar una variable, podemos diferenciar entre los siguientes:

- Cadenas
- Números
- Booleanos
- Arreglos
- Objetos
- Null
- Undefined

-==========-

## Declaración de variables

```js
var variableCadena = "cadena";
var variableNumero = 2;
var variableBoleana = true;
var variableArreglo = [];
var variableObjeto = { };
```

-==========-

## Restricciones al declarar variables

- Pueden utilizarse números, letras, guión bajo y signos de dollar.
- No pueden iniciar con un número. Por ejemplo, la variable `1variable` produce un error.
- Las variables son case-sensitive. Lo cual significa que la variable `ejemplo` es diferente a `Ejemplo`.
- Las palabras reservadas de javascript no pueden utilizarse como variable. Por ejemplo `var`, `for`, `switch`, etc. no pueden ser utilizadas.

-==========-

## Flujo de control

Javascript tiene mucha similitud con lenguajes como java, c, c++ y c# en lo que refiere a flujos de control.

- if-else
- switch
- for
- while
- do-while

-==========-

## Flujo de control / if-else

```js
var condition = true;

if(condition) {
	//Si condition es verdadera
	// se ejecuta este bloque
}
else {
	//Si condition es falsa
	// se ejecuta este bloque
}
```

-==========-

## Flujo de control / switch

```js
var expression = 1;

switch (expression) {

	case 1: {
		//Si el valor de expression es 1
		//se ejecuta este bloque de código
	} break;

	case 2: {
		//Si el valor de expression es 2
		//se ejecuta este bloque de código

	} break;

	//otros case aquí

	default: {
		//Si el valor de expression no coincide con algún caso
		//se ejecuta este bloque de código
	} break;
}
```

-==========-

## Flujo de control / for

```js
for(var i = 0; i < 10; i++) {

	 //Imprime en consola "Iteracion 1", "Iteración 2",..., "Iteración 9".
 	console.log("Iteración" + i);
}
```

-==========-

## Flujo de control / while

```js
var i = 0;
while(i < 10) {
	console.log("Iteración " + i); //Imprime en consola "Iteracion 1", "Iteración 2",..., "Iteración 9".
 	i++; //Aumenta en una unidad el valor de i
}
```

-==========-

## Flujo de control / do-while

```js
var i = 0;
do {
	console.log("Iteración " + i); //Imprime en consola "Iteracion 1", "Iteración 2",..., "Iteración 9".
 	i++; //Aumenta en una unidad el valor de i
} while (i < 10);
```

-==========-

## Arreglos

Un arreglo es una colección de elementos. En javascript, los elementos pueden ser de diferentes tipos:

```js
var colors = ['blue', 'yellow', 'red', 'white' ];
```

-==========-

## Iterar arreglos

Aunque se puede utilizar el `for` tradicional, es mas sencillo iterar de la siguiente manera:

```js
var numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number){

	//Notar que el arreglo numbers, no es la variable number que se imprime.
	console.log(number); //Imprime en consola la variable number
});
```

-==========-

## Acceder a elementos de un arreglo

```js
var fruits = ['apple', 'orange', 'pineapple'];

var fruit = fruits[0];

console.log(fruit); //Imprime "apple"
```

-==========-

## Objetos

Un objeto es una colección de propiedades y funciones.

- Una propiedad de un objeto es una asociación entre un nombre (key) y un valor. El valor de una propiedad puede ser cualquier tipo de dato e incluso.
- Las funciones generalmente son conocidas como métodos.

-==========-

## Objetos / Notación literal

```js

var person = {

	name: "Pepe",
	lastName: "El toro",
	getFullName: function() {
		return this.name + " " + this.lastName;
	}
};

//Acceder a las propiedades -  ejemplo:
console.log(person.name); //Imprime "Pepe"
console.log(person.getFullName()); //Imprime "Pepe El Toro"
```

-==========-

## Objetos / Constructor

```js
function Person(name, lastName) {
	this.name = name;
	this.lastName = lastName;

	this.getFullName = function() {
		return this.name + " " + this.lastName;
	};
};

var person = new Person("Pepe", "El Toro");

//Notar el uso de parentesis en getFullName dado que a pesar de que "es una propiedad"
//su comportamiento es el de una función.
console.log(person.name);
console.log(person.getFullName());
```
-==========-

## Objetos / Constructor vs Notación Literal

La principal diferencia entre usar un objeto a través de un constructor vs la notación literal, es que la notación literal se comporta como un `singleton`, mientras que el constructor nos amplia la funcionalidad de construir instancias únicas para cada objeto.
