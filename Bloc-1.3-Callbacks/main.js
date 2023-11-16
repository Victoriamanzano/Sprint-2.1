/*        ·NIVELL-1·   

         -Exercici-1
*/
/*Callback bàsic: 

Escriu una funció anomenada processar que accepti dos paràmetres: 
un nombre i una funció de callback. 

La funció processar ha d'invocar la funció de callback, 
passant el nombre com a paràmetre.
*/

const processar = (nombre , callback) => {
    callback(nombre);

};

const callbackExemple = (nom) => {
    console.log(`El nom processat és: ${nom}`);
};

processar("Victoria", callbackExemple);


/*       -Exercici.2  
*/
/* Callbacks amb operacions matemàtiques: 

Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. 
La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. 
Després, crida calculadora amb una funció que faci la suma dels dos nombres. 
*/

const calculadora = (num1, num2, callback) => {
    const resultat = callback(num1, num2);
    console.log(`El resultat es: ${resultat}`);
};

const suma = (a, b) => a + b;

calculadora(5, 3, suma);
 

/*        ·NIVELL-2·   

         -Exercici-3
*/

/* Ús de callbacks en funcions asíncrones: 

Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. 
La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.
*/

const esperarISaludar = (nom, callback) => {
    setTimeout(() => {
        callback(nom);
    }, 2000);
};

const callbackSaludar = (nom) => {
    console.log(`Hola, ${nom}!`);

};

esperarISaludar("Victoria", callbackSaludar);


/*       -Exercici.4  
*/
/* Callbacks amb arrays: 

Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. 
La funció processarElements ha d'invocar la funció de callback per cada element de l'array. 
*/

const processarElements = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
};

const callbackExemple2 = (element) => {
    console.log(`Exemple processat: ${element}`);
};

const arrayExemple = [1, 2, 3, 4, 5];
processarElements(arrayExemple, callbackExemple2);


/*        ·NIVELL-3·   

         -Exercici-5
*/
/* Escriu una funció processarCadena que accepti dos paràmetres: 

una cadena de caràcters i una funció de callback. 
La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada. 
*/


const processarCadena = (cadena, callback) => {
    const cadenaMajuscules = cadena.toUpperCase();
    callback(cadenaMajuscules);
};

const callbackExemple3 = (cadenaTransformada) => {
    console.log(`Cadena transformada: ${cadenaTransformada}`);
};
const cadenaExemple3 = "hola, mundo!";
processarCadena(cadenaExemple3, callbackExemple3);


