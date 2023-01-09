/* 
4. Istrazi kako se koriste array metode split, join i replace. Koristeci navedene metode, 
te map i filter metode napisi funkciju koja prima string koji se sastoji od vise recenica odvojenih tockom. 
Funkcija radi sljedece: 
a) Svaki razmak izmedu recenica mijenja sa praznim stringom (Npr. 'Hello world' ce biti 'Helloworld)
b) Kreira niz svih recenica koje su u tom nizu (koristi '.' kao oznaku kraja recenice)
c) Sve prazne recenice izbacuje
d) Svaku recenicu mijenja sa sljedecom recenicom: <index>. sentence length is <length>
e) Taj niz recenica spaja u string s '. ' kao razmakom koji vraca kao rezultat funkcije

Primjer:
Input: 'Hello world. Forth task is easy. Give me more.'
Output: '1. sentence length is 10. 2. sentence length is 15. 3. sentence length is 10. '
 */


function sentence(arr) {
  const replArr = arr.replaceAll(" ", "");
  const splArr = replArr.split(".");
  const filtArr = splArr.filter(item => item.length>0);
  const mapArr = filtArr.map((item, index) => `${index + 1}. sentence length is ${item.length}`);
  const joinArr = mapArr.join(". ");
  return joinArr;
  }
  
const str = "Hello world. Forth task is easy. Give me more.";
console.log(sentence(str));
