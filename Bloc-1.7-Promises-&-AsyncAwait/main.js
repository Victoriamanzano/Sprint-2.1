/*        ·NIVELL-1·   

         -Exercici-1
*/

/* Creació d'una Promesa: 

Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.
*/

const promesaSalutacio = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món! ');
    }, 2000);
});

promesaSalutacio.then((resultat) => {
    console.log(resultat);
});


/*       -Exercici.2 
*/
/* Utilització d'una Promesa: 

Utilitza la promesa creada en l'exercici anterior. 
Crea un .then que imprimeixi el resultat a la consola.
*/

promesaSalutacio

    .then((resultat) => {
        console.log(resultat);

    })

    .catch((error) => {
        console.log(error);
    });



/*       -Exercici.3  
*/
/* Promesa amb reject: 

Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', 
i que la rebutgi si l'input és qualsevol altra cosa.
*/

const promesaMixta = (input) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (input === 'Hola') {
                resolve('Salutacio rebuda amb èxit!');

            } else {
                reject('Error: L\'input no és "Hola"');
            }
        }, 2000);
    });
};

promesaMixta('Hola')
    .then((resultat) => {
        console.log(resultat);
    })
    .catch((error) => {
        console.error(error);
    });



/*       -Exercici.4  
*/
/* Ús de async/await: 
Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, 
i que després imprimeixi aquest resultat a la consola.
*/

const promesaSalutacio2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hola, món!');
        }, 2000);
    });
};

const funcioAsincro = async () => {
    try {
        const resultat = await promesaSalutacio2();
        console.log(resultat);
    } catch (error) {
        console.error(error);

    }
};

funcioAsincro();


/*        ·NIVELL-2·   

         -Exercici-5
*/
/* Gestió d'errors amb async/await: 

Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.
*/

const promesaSalutacio3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hola, món! ');
        }, 2000);
    });
};

const funcioAsinc = async () => {
    try {
        const resultat = await promesaSalutacio3();
        console.log(resultat);
    } catch (error) {
        console.error(error);
    }
};

funcioAsinc();


/*        ·NIVELL-3·   

         -Exercici-6
*/
/* Promise.all: 

Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. 
Utilitza Promise.all per a esperar que amb dues promeses es resolguin, i imprimeix els resultats a la consola.
*/


const promesaRetardada = (temps) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(`Promesa resolta després de ${temps} segons`);

        }, temps * 1000);
    });
};

const promesa1 = promesaRetardada(2);
const promesa2 = promesaRetardada(3);

Promise.all([promesa1], [promesa2])

    .then((resultats) => {
        console.log(resultats);
    })

    .catch((error) => {
        console.error(error);
    });

