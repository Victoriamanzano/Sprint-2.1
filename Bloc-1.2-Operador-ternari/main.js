/*        ·NIVELL-1·   

         -Exercici-1
*/
// Operador ternari bàsic: 

// Escriu una funció potConduir que accepti l'edat com a paràmetre 
// i utilitzi l'operador ternari per determinar si l'usuari pot conduir.
// Si l'edat és 18 o més, ha de retornar 'Pots conduir'. 
// Si no, ha de retornar 'No pots conduir'.


const potConduir = (edat) => {
    return edat >= 18 ? 'Pots conduir!' : 'NO POTS CONDUIR!!!';
};
const edatUsuarie = 17;
console.log(potConduir(edatUsuarie));



/*       -Exercici.2  
*/
// Ús amb operadors de comparació:

// Escriu una expressió que utilitzi l'operador ternari per determinar
// quin dels dos nombres donats (num1 i num2) és més gran.
// Si num1 és més gran, retorna 'num1 és més gran'.
// Si no, retorna 'num2 és més gran'.


const num1 = 10;
const num2 = 8;

const mesGran = num1 >  num2 ? 'num1 és més gran! 😌' : 'num2 és més gran! 😌';

console.log(mesGran);



/*        ·NIVELL-2·   

         -Exercici.3  
*/

// Ús enllaçat d'operadors ternaris: 

// Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

// Operador ternari amb funcions: 

// Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.


const trobarMaxim = (a, b, c) => {
    const maxim = a > b ? (a > c ? a : c) : (b > c ? b : c);
    return maxim;
};

const resultat = trobarMaxim(10, 5, 8);
console.log(resultat);



/*        ·NIVELL-3·   

         -Exercici-4
*/

// Operador ternari dins un bucle:

// Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array.
// Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

const parOImpar = (numeros) => {
    for (let i = 0; i < numeros.length; i++) {
        const resultat = numeros[i] % 2 === 0 ? 'Parell!' : 'Imparell!';
        console.log(`${numeros[i]} és ${resultat}`);
    }
};

const arrayNumeros = [2, 5, 8, 11, 14, 17, 21,];
parOImpar(arrayNumeros);