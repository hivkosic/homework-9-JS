/* 
3. Napisi funkciju koja ce primiti niz sljedecih tokena proizvoljnog redoslijeda:
hello_world, winter_assignment, first_week, second_week, success_result, fail_result

a) Funkcija ce svaki token zamijeniti sa sljedecim recenicama i kao rezultat ih spojiti u string:
hello_world - Pozdrav svima, mi smo studenti!
winter_assignment - Za praznike smo dobili domaci.
first_week - Prvi tjedan smo odmarali.
second_week - Drugi tjedan smo radili.
success_result - Svi koji su uspjesno rjesili su odmarali i dalje.
fail_result - Oni koji nisu uspjesno rjesili radili su vise. 

Ako niz sadrzi token koji nije prepoznat, funkcija ce ga zamjeniti sa: 'ERROR: UNDEFINED TOKEN'

b) File ce kao ulazni parametar (process.argv) primati jezik. Ukoliko je jezik en funkcija ce tokene
zamjeniti sa engleskim recenicama. Ukoliko je jezik hr ili bilo koji drugi, funkcija ce tokene zamjeniti 
sa prethodno navedenim hrvatskim recenicama.
*/


/* 1. način

function translate (key){
    if (locale==="en") {
        return english[key];
    }
    
    if (locale==="hr") {
        return croatian[key];
    }

    return croatian [key];
}

const croatian = {
    "hello_world": "Pozdrav svima, mi smo studenti!",
    "winter_assignment": "Za praznike smo dobili domaci.",
    "first_week" : "Prvi tjedan smo odmarali.",
    "second_week" : "Drugi tjedan smo radili.",
    "success_result" : "Svi koji su uspjesno rijesili su odmarali i dalje.",
    "fail_result": "Oni koji nisu uspjesno rjesili radili su vise."    
};

const english = {
    "hello_world": "hello everyone, we are students!",
    "winter_assignment": "we get a homework for vacation",
    "first_week" : "we rested for the first week",
    "second_week" : "the second week we worked",
    "success_result" : "all who successfully solved rested",
    "fail_result": "those who didn't, worked harder."    
};


const locale = process.argv[2] || "hr";
console.log("pozdrav:", translate("hello_world"));
console.log("zimski zadatak:", translate("winter_assignment"));
console.log("prvi tjedan:", translate("first_week"));
console.log("drugi tjedan:", translate("second_week"));
console.log("dobar rezultat:", translate("success_result"));
console.log("loš rezultat:", translate("fail_result"));

*/

// 2. način

function translate (key){
    const locale = process.argv[2] || "hr";

const TRANSLATION = {
    en: require ("./i18n/en.json"),
    hr: require ("./i18n/hr.json"),
}
const translation = TRANSLATION[locale] || TRANSLATION.hr;

    return translation[key];
}



console.log("pozdrav:", translate("hello_world"));
console.log("zimski zadatak:", translate("winter_assignment"));
console.log("prvi tjedan:", translate("first_week"));
console.log("drugi tjedan:", translate("second_week"));
console.log("dobar rezultat:", translate("success_result"));
console.log("loš rezultat:", translate("fail_result"));