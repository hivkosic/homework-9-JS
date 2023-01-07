/* 
1. Koristeci dvije ugnjezdene for petlje napisi funkciju koja kao ulazni parametar prima niz brojeva,
te kao rezultat vraca sortirani niz brojeva od manjeg prema većem. 


Primjer:
Input: [4,2,6,4,2,1]
Output: [1,2,2,4,4,6]

Dodatno: Pokusaj analizirati koliki bi bio ukupni broj iteracija za niz proizvoljne duzine.
*/


//proba - bez funkcije 

/*let arr = [4, 2, 6, 4, 2, 1];
let change = [];

for (let i = 0; i < 5; i++) {
  for (let j = i + 1; j < 6; j++) {
    if (arr[i] > arr[j]) {
      change = arr[i];
      arr[i] = arr[j];
      arr[j] = change;
    }
  }
}

console.log(arr);
console.log("broj iteracija:", numbIter);

//Broj iteracija = (arr.length-1)*(arr.length - 1) ????? Jel to?
*/



function sorted(arr) {
  let change = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] > arr[j]) {
        change = arr[i];
        arr[i] = arr[j];
        arr[j] = change;
      }
    }
  }
  return arr;
}

let numb = [4, 2, 6, 4, 2, 1];
console.log(sorted(numb));

