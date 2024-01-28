/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) {
  return l1 * l2;
};

console.log(area(5, 12));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (num1, num2) {
  let sum = num1 + num2;

  if (num1 === num2) {
    sum = sum * 3;
  }

  return sum;
};

console.log(crazySum(2, 5));
console.log(crazySum(2, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (num3, num4 = 19) {
  let result = Math.abs(num3 - num4);

  if (num3 > 19) {
    result = Math.abs(num3 - num4) * 3;
  }

  return result;
};

console.log(crazyDiff(2));
console.log(crazyDiff(21));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(40));
console.log(boundary(600));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
  let stringifiedValue = str.split(" ");
  console.log(stringifiedValue);

  if (stringifiedValue[0] === "EPICODE") {
    return str;
  } else {
    return "EPICODE" + " " + str;
  }
};

console.log(epify("questa è una prova!"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (posNum) {
  if (posNum % 3 === 0 || posNum % 7 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(check3and7(20));
console.log(check3and7(21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* ONE LINER: return str2.split("").reverse().join(""); */

const reverseString = function (str2) {
  let stringifiedValue = str2.split("");
  console.log(stringifiedValue);
  let reverseValue = stringifiedValue.reverse();
  let joinedValue = reverseValue.join("");
  return joinedValue;
};

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str) {
  const words = str.split(" ");
  let newString = "";
  for (let i = 0; i < words.lenght; i++) {
    let firstChar = words[i].charAt(0).toUppercase();
    let lastLetters = words[i].slice(1);
    let upperWord = firstChar + lastLetters;
    console.log(upperWord);
    newString += upperWord + " ";
  }

  return newString;
}

upperFirst("Stringa formata da diverse parole");

/* ESERCIZIO 9

 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (newstring2) {
  let stringifiedValue = newstring2.split("");
  console.log(stringifiedValue);
  let slicedString = stringifiedValue.slice(1, -1);

  return slicedString;
};

console.log(cutString("Ecco la nuova stringa"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  let arr = new Array(n);
  for (i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 11);
  }
  return arr;
}

console.log(giveMeRandom(10));
