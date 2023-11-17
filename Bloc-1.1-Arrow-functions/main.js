
/*        ·NIVELL-1·   


         -Exercici-1
*/

// Conversió de funcions: 

// Tens una funció add que accepta dos paràmetres i retorna la seva suma. 
// Converteix-la en una funció de fletxa. 

// Per exemple: function add(a, b) {return a + b;}.

let add = (a, b) => {
  let result = a + b;
  return result;
};

console.log(add(1, 2));


/*  -Exercici.2  */

// Funció de fletxa sense paràmetres: 

// Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres 
// i que retorni un número aleatori entre 0 i 100.

const randomNumber = () => {
  return Math.floor(Math.random() * 101);
};

const randomNum = randomNumber();
console.log(randomNum);


/*  -Exercici.3  */

//  Ús de 'this' en les funcions de fletxa:

//  Crea una classe person que tingui una propietat name
//  i una funció greet que utilitzi una funció de fletxa.
//  La funció ha d'imprimir una salutació que inclogui el nom de la persona.
//  Per exemple: console.log(Hola, ${this.name});.


class person {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hola, ${this.name}!`);
  };
}

const person1 = new person("Victoria");
person1.greet();


/*        ·NIVELL-2·    

         -Exercici.4  
*/

// Funció de fletxa dins d'un loop: 

// Crea una funció anomenada printNumbers que accepti un array de números 
// i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.


const printNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
      
      const printNumber = () => {
        console.log(numbers[i]);
      };
  
  
      printNumber();
    }
  };
  
 
  const numbersArray = [1, 2, 3, 4, 5];
  printNumbers(numbersArray);



/*       ·NIVELL-3·

        -Exercici.5
*/
//   Funció de fletxa amb 'setTimeout':

// Crea una funció de fletxa que imprimeixi 
//  un missatge a la consola després d'esperar 3 segons.

const esperaTresSegons = () => { 
    setTimeout(() => {

        console.log("Missatje després de 3 segons...");

    }, 3000);

};

esperaTresSegons();

