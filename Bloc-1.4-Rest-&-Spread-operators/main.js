/*        ·NIVELL-1·   

         -Exercici-1
*/
/* Operador Spread en Arrays: 

Crea dues arrays, array1 i array2. 
Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.
*/ 

const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];

const arrayCombinada= [...array1, ...array2];

console.log(arrayCombinada);




/*       -Exercici.2  
*/
/* Operador Rest en Funcions: 

Crea una funció 'suma' que utilitzi l'operador rest 
per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.
*/

const suma = (...numeros) => {
    return numeros.reduce((total, num) => total + num, 0);
};

const resultado = suma(1, 2, 5, 4, 5);
console.log(resultado);



/*        ·NIVELL-2·   

         -Exercici-3
*/
/* Copiant objectes amb Spread: 

Crea un objecte 'objecte1'. 
Després crea un segon objecte, 'objecte2', 
que sigui una còpia de 'objecte1' utilitzant l'operador spread. 
Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.
*/

const objecte1 = {
    propietat1: 'valor1',
    propietat2: 'valor2',
};

const objecte2 = {...objecte1};

objecte2.propietat1 = 'nouValor';

console.log('objecte1:', objecte1);
console.log('objecte2:', objecte2);


/*       -Exercici.4  
*/
/*Rest en Destructuring: 
Crea una array amb diversos elements. 
Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, 
i després assignar la resta dels elements a una tercera variable.
*/

const arrayElements = ['element1', 'element2', 'element3', 'element4', 'element5'];

const [primeraVariable, segundaVariable, ...restoDeElementos] = arrayElements;

console.log('Primera Variable:', primeraVariable);
console.log('Segunda Variable:', segundaVariable);
console.log('Resto de elementos:', restoDeElementos);


/*        ·NIVELL-3·   

         -Exercici-5
*/
/* Spread en Funcions: 

Crea una funció que accepti tres arguments. 
Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.
*/

const mostrarArgumentos = (arg1, arg2, arg3) => {
    console.log(`Argument 1: ${arg1}`);
    console.log(`Argument 2: ${arg2}`);
    console.log(`Argument 3: ${arg3}`);
};

const arrayElements2 = ['element1', 'element2', 'element3'];
mostrarArgumentos(...arrayElements2);




/*       -Exercici.6
*/
/* Fusionant Objectes amb Spread: 

Crea dos objectes amb propietats diferents. 
Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.
*/

const objecte01 = { prop1: 'valor1', prop2: 'valor2'};
const objecte02 = { prop3: 'valor3', prop4: 'valor4'};

const objecteFusionat = { ...objecte01, ...objecte02 };

console.log(objecteFusionat);