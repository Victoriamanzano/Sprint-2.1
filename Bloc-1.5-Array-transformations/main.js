/*        ·NIVELL-1·   

         -Exercici-1
*/

/*  Map: 

Teniu un array de números [1, 2, 3, 4]. 
Crea una nova array que contingui el quadrat de cada número.
*/

const numeros = [1, 2, 3, 4];

const quadrats = numeros.map(numero => numero ** 2);

console.log(quadrats);



/*       -Exercici.2  
*/

/* Filter: 

Teniu una array de números [1, 2, 3, 4]. 

Crea una nova array que només contingui els números parells. */


const numeros2 = [1, 2, 3, 4];

const numerosParells = numeros2.filter(numero => numero % 2 === 0);

console.log(numerosParells);




/*       -Exercici.3  
*/
/* Find: 

Teniu una array de números [1, 10 , 8, 11]. 
Utilitza la funció find per a trobar el primer número que és major a 10. 
*/

const numerosf = [1, 10, 8, 11];

const numeroMajorA10 = numerosf.find(numero => numero > 10);

console.log(numeroMajorA10);





/*       -Exercici.4  
*/
/* Reduce: 
Teniu una array de números [13, 7, 8, 21]. 
Fes servir la funció reduce per a calcular la suma total dels números.
*/

const numerosArray = [13, 7, 8, 21];

const sumaTotal = numerosArray.reduce((acumulador, numeroo) => acumulador + numeroo, 0);

console.log(sumaTotal);




/*        ·NIVELL-2·   

         -Exercici-5
*/
/* Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", 
crea una funció en una sola línia que faci el següent:

- Filtra els nombres majors o iguals a 10.
- Multiplica cada nombre filtrat per 2.
- Calcula la suma dels nombres filtrats i multiplicats per 2.
- La funció ha de retornar el resultat de la suma.
*/

const sumaFiltrada = (array) => array.filter(num => num >= 10).map(num => num * 2).reduce((acc, num) => acc + num, 0);

const arrayXmpl = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const resultat = sumaFiltrada(arrayXmpl);

console.log(resultat);




/*        ·NIVELL-3·   

         -Exercici-6
*/

/* Every / Some: 
Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament.
*/

const arrayExemple = [11, 12, 13, 14];

const elementsMajorA10 = arrayXmpl.every(num => 10);

const aElementsMajorsA10 = arrayXmpl.some(num => num > 10);

console.log('Tots els elements són mahors que 10:', elementsMajorA10);
console.log('Alguns dels elements són majors que 10:', aElementsMajorsA10);
