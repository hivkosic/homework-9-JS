/* 
2. Napisi funkciju koja ce primiti proizvoljan string kao ulaz. Funkcija ce potom provjeriti jesu li
u tom stringu sve zagrade ispravno napisane. Ukoliko je svaka zagrada zatvorena rezultat funkcije 
ce biti true, ukoliko zagrade nisu ispravno zatvorene rezultat ce biti false.

Primjer 1: 
Input: '(a+b) * (c - d)'
Output: true

Primjer 2: 
Input: '(a+b * (c - d)'
Output: false

Primjer 3: 
Input: '(c * (a+b)) * (x - (y * (c - d)))'
Output: true
*/



/*proba - bez funkcije 

let br1=0;
let br2 =0;
const str = "(c * (a+b)) * (x - (y * (c - d)))"

for (let i = 0; i<str.length; i++) {
    if (str[i] === "(") {
      br1 = br1 +1; 
    }
 else if (str[i] === ")") {
      br2 = br2 +1;
       };
    }


    if (br1+br2<1) {
      console.log("ovaj niz stringova ne sadrži zagrade");
    } else if (br1===br2) 
{console.log ("true")} 
    else {console.log("false");
  }
*/




//br1 broji otvorene zagrade, a br2 zatvorene

function brackets(str) {
  let br1 = 0;
  let br2 = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      br1 += 1;
    } else if (str[i] === ")") {
      br2 += 1;
      }   
  }
  
  if (br1+br2===0) {return "nema zagrada u stringu"};
  return ((br1+br2>0)&&(br1===br2))? "true" : "false";
}


const prim1 = "(a+b) * (c - d)";
const prim2 = "(a+b * (c - d)";
const prim3 = "(c * (a+b)) * (x - (y * (c - d)))";
const prim4 = "";


console.log(brackets(prim1));
console.log(brackets(prim2));
console.log(brackets(prim4));
console.log(brackets(prim3));

