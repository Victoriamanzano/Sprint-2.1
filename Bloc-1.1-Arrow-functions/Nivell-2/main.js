// <<<<Exercici 4>>>>>

// Funció de fletxa dins d'un loop: 

// Crea una funció anomenada printNumbers que accepti un array de números 
// i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.


const printNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
      // Utilizando una función de flecha para imprimir cada número
      const printNumber = () => {
        console.log(numbers[i]);
      };
  
      // Llamando a la función de flecha
      printNumber();
    }
  };
  
  // Ejemplo de uso de la función
  const numbersArray = [1, 2, 3, 4, 5];
  printNumbers(numbersArray);