/* 
5. Istrazi kako se koristi reduce metoda. Koristeci reduce metodu napisi dvije funkcije:
a) Prva funkcija racuna sumu niza brojeva

Primjer:
Input: [1,2,3,4]
Output: 10

b) Druga funkcija zbraja sve brojeve vece od 4, a oduzima sve manje

Primjer:
Input: [2,4,10,20]
Output: 24
*/


function reduceArray(arr) {
  const sumArray = arr.reduce((total, curent) => total + curent);
  return sumArray;
}

function sArr(arr) {
  const filtArr = arr.filter((item) => item > 4);
  const sumArr = filtArr.reduce((total, curent) => total + curent);

  const filtArray = arr.filter((item) => item <= 4);
  const takeArr = filtArray.reduce((total, curent) => total + curent);

  return sumArr - takeArr;
}

const prim1 = [1, 2, 3, 4];
const prim2 = [2, 4, 10, 20];

console.log(reduceArray(prim1));
console.log(sArr(prim2));
