/*      JS Pagrindai
 1) Kintamieji
 String 
 Number
 Boolean
 Array
 Object

 2) Operatoriai
 Matematiniai (+ trumpiniai)
 Palyginimo
 Loginiai

 3) Salygos
 if (if else; if elseIf else...)
 switch
 ternary (salyga?   tiesa:melas)  (salyga&&tiesa)

 4)Ciklai
 for  (for in; for of)
 while (do while)
 iteraciniai masyvu metodai (forEach, map, filter, reduce)

 5)Funkcijos
 paprastos funkcijos deklaravimas (senass budas)
 anonimines 
 arrow / lambda

 6) Metodai
 Number/Math
 String
 Array
 Object

  7) Destruktūrizavimas
*/

/*
  0) CRUD pasibaigti.(kaip ir pabaigta)
  1) Konspektuotis (jeigu konspektą turit - persiskaityti/pasikartoti)(padaryta)
  2) Daryti užduotis:
    js array,string,numbers.txt
    JS ciklai ir funkcijos2.txt
    JS array,string methods practice.txt
    JS kartojimas ir HigherOrderFunctions.txt
*/

/*      Konspektai

1) Kintamieji
 
String (angl. "eilutė") yra duomenų tipas, kuris naudojamas saugoti tekstinius duomenis programoje. String tipo kintamieji gali saugoti įvairaus ilgio simbolius, raidės, skaičius ir specialius simbolius, pavyzdžiui, kabutės, kableliai ir pan.

Pavyzdžiui, galite naudoti string tipo kintamąjį, kad saugotumėte vartotojo įvestą tekstą arba įtraukti tekstinius pranešimus programoje.

Norint naudoti string tipo kintamąjį, jį reikia deklaruoti ir inicializuoti. Daugelis programavimo kalbų leidžia naudoti kabutes arba kabliataškius, kad apibrėžtumėte string tipo kintamąjį. Pavyzdžiui, šios sakiniai naudoja string tipo kintamąjį "vardas" kabutėse apibrėžtoje reikšmėje:

string vardas = "Tomas";

Taip pat galite naudoti string tipo kintamąjį, kad sujungtumėte keletą string tipo kintamųjų arba teksto ir skaičių. Pavyzdžiui:

string sakinys = "Mano vardas yra " + vardas + " ir aš esu " + 25 + " metų.";

Taip pat galite naudoti string tipo kintamąjį, kad atliktumėte įvairias teksto manipuliacijas, pavyzdžiui, pakeistumėte raides į didžiąsias ar mažąsias, pakeistumėte eilučių tvarką arba ieškotumėte tam tikro simbolio ar žodžio stringe.

Number (angl. "skaičius") yra duomenų tipas, kuris naudojamas saugoti skaičius programoje. Number tipo kintamieji gali saugoti sveikus skaičius, trupmeninius skaičius arba specialius skaičius, pavyzdžiui, neapibrėžtą arba neįmanomą skaičių.

Pavyzdžiui, galite naudoti Number tipo kintamąjį, kad saugotumėte vartotojo įvestą skaičių arba atliktumėte skaičiavimus programoje.

Norint naudoti Number tipo kintamąjį, jį reikia deklaruoti ir inicializuoti. Daugelis programavimo kalbų leidžia naudoti skaičių be kabučių arba kabliataškių, kad apibrėžtumėte Number tipo kintamąjį. Pavyzdžiui, šis sakinys naudoja Number tipo kintamąjį "amžius" apibrėžtoje reikšmėje:

Number amžius = 25;

Taip pat galite naudoti Number tipo kintamąjį, kad atliktumėte skaičiavimus. Pavyzdžiui:

Number suma = 2 + 2;
Number skirtumas = 5 - 2;
Number sandauga = 3 * 4;
Number dalmuo = 8 / 2;

Taip pat galite naudoti specialius Number tipo kintamuosius, pavyzdžiui, "Infinity" (neapibrėžtas skaičius), "NaN" (neįmanomas skaičius) ir "undefined" (neapibrėžtas). Pavyzdžiui:

Number neapibrėžtas = Infinity;
Number neįmanomas = NaN;
Number neapibrėžtas = undefined;

Boolean (angl. "duboolis") yra duomenų tipas, kuris naudojamas saugoti teigiamą arba neigiamą reikšmę programoje. Boolean tipo kintamieji gali turėti tik vieną iš dviejų reikšmių: "true" (teigiamas) arba "false" (neigiamas).

Pavyzdžiui, galite naudoti Boolean tipo kintamąjį, kad nustatytumėte, ar vartotojas patvirtino sąlygas arba ar rezultatas atitinka tikėtinus duomenis.

Norint naudoti Boolean tipo kintamąjį, jį reikia deklaruoti ir inicializuoti. Daugelis programavimo kalbų leidžia naudoti žodžius "true" arba "false" be kabučių arba kabliataškių, kad apibrėžtumėte Boolean tipo kintamąjį. Pavyzdžiui, šis sakinys naudoja Boolean tipo kintamąjį "patvirtinta" apibrėžtoje reikšmėje:

Boolean patvirtinta = true;

Arba:

Boolean patvirtinta = false;

Taip pat galite naudoti Boolean tipo kintamąjį, kad atliktumėte logines operacijas, pavyzdžiui, "ir" ("and"), "arba" ("or") ir "ne" ("not"). Pavyzdžiui:

Boolean rezultatas = (2 > 1) and (4 < 5);
Boolean rezultatas = (2 > 1) or (4 < 5);
Boolean rezultatas = not (2 > 1);

 Array (angl. "masyvas") yra duomenų struktūra, kuri naudojama saugoti daug elementų viename kintamajame. Masyvai yra naudingi, kai reikia saugoti daug panašių duomenų, pavyzdžiui, sąrašą vardų ar skaičių.

Masyvai gali būti sudaryti iš skirtingų duomenų tipų elementų, pavyzdžiui, skaičių, stringų ir net kitų masyvų. Masyvai taip pat gali būti sudaryti iš įvairaus ilgio elementų.

Norint naudoti masyvą, jį reikia deklaruoti ir inicializuoti. Daugelis programavimo kalbų leidžia naudoti kabutes arba kabliataškius, kad apibrėžtumėte masyvą ir elementus. Pavyzdžiui, šis sakinys naudoja masyvą "vardai", kuris yra sudarytas iš trijų string tipo elementų:

string[] vardai = ["Tomas", "Paulius", "Marija"];

Taip pat galite naudoti masyvus, kad atliktumėte įvairias veiksmas su jų elementais, pavyzdžiui, pridėtumėte naujus elementus, keistumėte esamus elementus arba pašalintumėte elementus. Pavyzdžiui:

vardai[3] = "Jonas"; // Pridedame naują elementą prie masyvo galo
vardai[0] = "Kęstutis"; // Pakeičiame pirmą elementą masyve
vardai.splice(1, 1); // Pašaliname antrą elementą masyve


 Object (angl. "objektas") yra duomenų struktūra, kuri naudojama saugoti daug elementų viename kintamajame. Objektai yra naudingi, kai reikia saugoti daug skirtingų duomenų, pavyzdžiui, vartotojo duomenis arba įrenginio nustatymus.

Objektai gali būti sudaryti iš skirtingų duomenų tipų savybių (angl. "properties"), kurių kiekviena turi savo reikšmę. Savybės gali būti string, number, boolean, array ar net kiti objektai. Objektai taip pat gali turėti metodus (angl. "methods"), kurie yra funkcijos, kurias galima paleisti objekte.

Norint naudoti objektą, jį reikia deklaruoti ir inicializuoti. Daugelis programavimo kalbų leidžia naudoti kabutes arba kabliataškius, kad apibrėžtumėte objektą ir savybes. Pavyzdžiui, šis sakinys naudoja objektą "vartotojas", kuris turi tris savybes - "vardas", "amžius" ir "lytis":

var vartotojas = {
  vardas: "Tomas",
  amžius: 25,
  lytis: "vyras"
};

Taip pat galite naudoti objektus, kad atliktumėte įvairias veiksmas su jų savybėmis ar metodais. Pavyzdžiui:

console.log(vartotojas.vardas); // Spausdiname vartotojo vardą
vartotojas.amžius = 26; // Pakeičiame vartotojo amžių
vartotojas.pridėtiSavybę = "adresas"; // Pridedame naują savybę prie objekto
vartotojas.gautiVardą = function() { // Pridedame naują metodą prie objekto
  return this.vardas;
}
console.log(vartotojas.gautiVardą()); // Spausdiname vartotojo vardą naudodami metodą

2) Operatoriai
 Operatoriai yra simboliai arba žodžiai, kurie naudojami atlikti veiksmus su duomenimis programavimo kalboje. Operatoriai gali būti naudojami skaičiavimams, sąlygoms arba duomenų manipuliavimui.

Pavyzdžiui, matematiniai operatoriai, tokie kaip "+" (sudėtis), "-" (atimtis), "*" (daugyba) ir "/" (dalmuo), naudojami skaičiavimams atlikti. Pavyzdžiui:

2 + 2 // Grąžina: 4
5 - 3 // Grąžina: 2
6 * 7 // Grąžina: 42
8 / 4 // Grąžina: 2

Loginiai operatoriai, tokie kaip "&&" (ir), "||" (arba) ir "!" (ne), naudojami sąlygoms patikrinti. Pavyzdžiui:

(2 > 1) && (4 < 5) // Grąžina: true
(2 > 1) || (4 < 5) // Grąžina: true
!(2 > 1) // Grąžina: false

Taip pat yra operatoriai, tokie kaip "=" (priskyrimas) ir "+=" (priskyrimas su sudėtimi), kurie naudojami duomenims priskirti arba manipuliuoti. Pavyzdžiui:

int a = 2; // Priskiriame reikšmę "2" kintamajam "a"
a += 4; // Priskiriame reikšmę "6" kintamajam "a" (2 + 4)

 3) Salygos
 if (if else; if elseIf else...)
 switch
 ternary (salyga?   tiesa:melas)  (salyga&&tiesa)

 Sąlygos (angl. "conditions") yra komandos arba blokai kodas, kuris yra vykdomas tik tuomet, kai tam tikra sąlyga yra patenkinama. Sąlygos naudojamos programavimo kalbose, kad būtų galima atlikti skirtingus veiksmus skirtingoms situacijoms.

Pavyzdžiui, galite naudoti sąlygą "if" (jei), kad patikrintumėte, ar tam tikra reikšmė yra teisinga, ir atliktumėte tam tikrus veiksmus tik tuomet, kai sąlyga yra patenkinama. Pavyzdžiui:

if (2 > 1) {
  console.log("Sąlyga yra patenkinama");
}

Taip pat galite naudoti sąlygą "if-else" (jei-kitu atveju), kad patikrintumėte, ar tam tikra reikšmė yra teisinga, ir atliktumėte tam tikrus veiksmus tik tuomet, kai sąlyga yra patenkinama, arba kitus veiksmus, kai sąlyga nėra patenkinama. Pavyzdžiui:

if (2 > 3) {
  console.log("Sąlyga yra patenkinama");
} else {
  console.log("Sąlyga nėra patenkinama");
}

Taip pat galite naudoti sąlygą "switch" (perjungti), kad patikrintumėte kelis skirtingus reikšmių variantus ir atliktumėte atitinkamus veiksmus. Pavyzdžiui:

switch (skaičius) {
  case 1:
    console.log("Skaičius yra 1");
    break;
  case 2:
    console.log("Skaičius yra 2");
    break;
  default:
    console.log("Skaičius nėra nei 1, nei 2");
}

Ternary (angl. "ternary") yra operatorius, kuris naudojamas sąlygoms patikrinti ir atlikti skirtingus veiksmus atitinkamai. Ternary operatorius yra panašus į sąlygą "if-else", tačiau jis yra trumpesnis ir dažniau naudojamas, kai reikia atlikti mažus veiksmus.

Ternary operatorius sudarytas iš trys dalių: sąlyga, kurią patikriname, pirmas atsakymas, kurį atliekame, jei sąlyga yra patenkinama, ir antras atsakymas, kurį atliekame, jei sąlyga nėra patenkinama. Ternary operatorius yra rašomas šitaip:

sąlyga ? pirmas atsakymas : antras atsakymas

Pavyzdžiui, galite naudoti ternary operatorių, kad patikrintumėte, ar skaičius yra didesnis už 5, ir atliktumėte skirtingus veiksmus atitinkamai:

skaičius > 5 ? console.log("Skaičius yra didesnis už 5") : console.log("Skaičius yra mažesnis arba lygus 5");

Ternary operatorius taip pat gali būti naudojamas kaip alternatyva "if-else" sąlygoms, kai reikia priskirti reikšmę kintamajam. Pavyzdžiui:

int rezultatas = skaičius > 5 ? 1 : 0;

 4)Ciklai
 for  (for in; for of)
 while (do while)
 iteraciniai masyvu metodai (forEach, map, filter, reduce)

 Ciklai (angl. "loops") yra komandos arba blokai kodas, kuris vykdomas tam tikrą kartų skaičių arba kol tam tikra sąlyga yra patenkinama. Ciklai naudojami programavimo kalbose, kad būtų galima atlikti tam tikrus veiksmus kelis kartus be to, kad reikėtų rašyti tokį patį kodą kelis kartus.

Pavyzdžiui, galite naudoti ciklą "for" (kol), kad atliktumėte tam tikrus veiksmus kelis kartus. Pavyzdžiui:

for (int i = 0; i < 5; i++) {
  console.log("Šis tekstas bus spausdinamas 5 kartus");
}

Taip pat galite naudoti ciklą "while" (kol), kad atliktumėte tam tikrus veiksmus kol tam tikra sąlyga yra patenkinama. Pavyzdžiui:

int skaičius = 0;
while (skaičius < 5) {
  console.log("Šis tekstas bus spausdinamas kol skaičius yra mažesnis už 5");
  skaičius++;
}

Taip pat galite naudoti ciklą "do-while" (dar kol), kuris yra panašus į ciklą "while", tačiau veiksmai vykdomi bent vieną kartą, net jei sąlyga nėra patenkinama. Pavyzdžiui:

int skaičius = 0;
do {
  console.log("Šis tekstas bus spausdinamas bent vieną kartą, net jei skaičius yra didesnis už 5");
  skaičius++;
} while (skaičius < 5);

Iteraciniai masyvų metodai yra funkcijos, kurios naudojamos masyvams peržiūrėti ir atlikti tam tikrus veiksmus su jų elementais. Daugelis programavimo kalbų turi įtrauktus iteracinius masyvų metodus, tokius kaip "forEach" arba "map", kurie yra patogūs ir efektyvūs masyvų peržiūrai ir manipuliavimui.

Pavyzdžiui, galite naudoti metodą "forEach" (kiekvienam), kad atliktumėte tam tikrus veiksmus su kiekvienu masyvo elementu. Pavyzdžiui:

var masyvas = [1, 2, 3, 4, 5];

masyvas.forEach(function(elementas) {
  console.log(elementas);
});

Taip pat galite naudoti metodą "map" (susieti), kad sukurtumėte naują masyvą, kuriame būtų atlikti tam tikri veiksmai su kiekvienu masyvo elementu. Pavyzdžiui:

var masyvas = [1, 2, 3, 4, 5];

var naujasMasyvas = masyvas.map(function(elementas) {
  return elementas * 2;
});

console.log(naujasMasyvas); // Grąžina: [2, 4, 6, 8, 10]

 5)Funkcijos
 paprastos funkcijos deklaravimas (senass budas)
 anonimines 
 arrow / lambda

 Čia yra paprastas pavyzdys apie funkciją JavaScripte, kuri sudeda du skaičius ir grąžina rezultatą:

 function add(a, b) {
  return a + b;
}

console.log(add(3, 4));  // Output: 7

Čia yra dar vienas pavyzdys apie funkciją, kuri gauna įvestį teksto pavidalu ir grąžina kopiją su visais raidėmis didžiosiomis raidėmis:

function toUppercase(str) {
  return str.toUpperCase();
}

console.log(toUppercase("hello"));  // Output: "HELLO"

Funkcijos taip pat gali būti apibrėžiamos kaip anoniminės funkcijos, kurios yra funkcijos be pavadinimo. Čia yra pavyzdys apie anoniminę funkciją, kuri gauna skaičių masyvą ir grąžina visų elementų sumą masyve:

var sum = function(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

console.log(sum([1, 2, 3, 4, 5]));  // Output: 15

Funkcijos taip pat gali būti laikomos kaip reikšmės kintamuosiuose arba objektuose. Čia yra pavyzdys apie funkciją, laikomą kintamajame:

var greet = function(name) {
  return "Hello, " + name + "!";
}

console.log(greet("John"));  // Output: "Hello, John!"

O čia yra pavyzdys apie funkciją, laikomą objekto savybe:

var math = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

console.log(math.add(3, 4));  // Output: 7
console.log(math.subtract(4, 3));  // Output: 1


Anoniminės funkcijos yra funkcijos, kurios neturi pavadinimo. Jos gali būti naudojamos kaip kintamieji, objekto savybės arba argumentai, kai kviečiamos kitos funkcijos.

Anoniminės funkcijos gali būti aprašytos naudojant šią sintaksę:

function(param1, param2, ...) {
   // code to be executed
}

Arba šia sintakse:

var funcName = function(param1, param2, ...) {
   // code to be executed
}

Pavyzdžiui, šis kodas aprašo anoniminę funkciją, kuri sudeda du skaičius ir grąžina rezultatą:

var add = function(a, b) {
  return a + b;
}

console.log(add(3, 4));  // Output: 7

Anoniminės funkcijos gali būti naudojamos kaip kintamieji arba objekto savybės, panašiai kaip kitos funkcijos. Pavyzdžiui, šis kodas naudoja anoniminę funkciją kaip kintamąjį:

var greet = function(name) {
  return "Hello, " + name + "!";
}

console.log(greet("John"));  // Output: "Hello, John!"

O šis kodas naudoja anoniminę funkciją kaip objekto savybę:


var math = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

console.log(math.add(3, 4));  // Output: 7
console.log(math.subtract(4, 3));  // Output: 1

Anoniminės funkcijos taip pat gali būti naudojamos kaip argumentai, kai kviečiamos kitos funkcijos. Pavyzdžiui, šis kodas naudoja anoniminę funkciją kaip argumentą funkcijoje "setTimeout":

setTimeout(function() {
  console.log("Hello, world!");
}, 1000);  // Output: "Hello, world!" after 1 second

 6) Metodai
 Number/Math
 String
 Array
 Object

 JavaScript turi įvairius metodus, kurie yra specialios funkcijos, priskirtos konkrečių tipų objektams (pavyzdžiui, skaičiams, tekstams, masyvams arba objektams). Metodai leidžia atlikti tam tikrus veiksmus arba gauti informaciją apie objektus.

Čia yra keletas pavyzdžių naudojant metodus:

Number/Math:

"Number.isNaN()" - patikrina, ar skaičius yra "NaN" (not a number)
"Math.round()" - suapvalina skaičių iki artimiausio sveiko skaičiaus
"Math.max()" - grąžina didžiausią skaičių iš duoto skaičių sąrašo
String:

"String.charAt()" - grąžina nurodytos pozicijos simbolį tekste
"String.substring()" - grąžina teksto fragmentą tarp nurodytų pozicijų
"String.toLowerCase()" - grąžina tekstą mažosiomis raidėmis
Array:

"Array.push()" - prideda elementą į masyvo gale
"Array.pop()" - pašalina paskutinį elementą iš masyvo ir grąžina jį
"Array.sort()" - surūšiuoja masyvo elementus
Object:

"Object.keys()" - grąžina masyvą su objekto raktų vardais
"Object.values()" - grąžina masyvą su objekto raktų reikšmėmis
"Object.assign()" - kopijuoja visus savybes iš vieno ar kelių objektų į kitą objektą
Metodus galite naudoti taip:

object.method(param1, param2, ...);

Pavyzdžiui, šis kodas patikrina, ar skaičius yra "NaN" ir grąžina rezultatą:

console.log(Number.isNaN(NaN));  // Output: true
console.log(Number.isNaN(5));  // Output: false

Arba šis kodas grąžina "Hello, world!" tekstą mažosiomis raidėmis:

console.log("Hello, world!".toLowerCase());  // Output: "hello, world!"

Arba šis kodas surūšiuoja

Čia yra pavyzdys, kaip naudoti "sort()" metodą, kad surūšiuotumėte masyvą su skaičiais didėjimo tvarka:

var numbers = [5, 2, 7, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);  // Output: [1, 2, 3, 5, 7]

Čia yra pavyzdys, kaip naudoti "sort()" metodą, kad surūšiuotumėte masyvą su tekstais abėcėlės tvarka:

var words = ["apple", "banana", "cherry", "date"];
words.sort();
console.log(words);  // Output: ["apple", "banana", "cherry", "date"]

Ir čia yra pavyzdys, kaip naudoti "sort()" metodą, kad surūšiuotumėte masyvą su objektais pagal tam tikrą savybę:

var products = [  { name: "Product 1", price: 200 },  { name: "Product 2", price: 100 },  { name: "Product 3", price: 300 }];
products.sort(function(a, b) {
  return a.price - b.price;
});
console.log(products);  // Output: [{ name: "Product 2", price: 100 }, { name: "Product 1", price: 200 }, { name: "Product 3", price: 300 }]

  7) Destruktūrizavimas

  Destructuring (arba destruktūrizavimas) yra JavaScript sintaksė, leidžianti atskirti keletą reikšmių iš kintamųjų, objektų ar masyvų į atskirus kintamuosius. Tai padeda sumažinti kodą ir padidinti jo skaitymo suprantamumą.

Pavyzdžiui, jei turite objektą su keliais laukais, galite atskirti reikšmes į atskirus kintamuosius taip:

const person = { name: "John", age: 30, job: "teacher" };
const { name, age, job } = person;
console.log(name);  // Output: "John"
console.log(age);  // Output: 30
console.log(job);  // Output: "teacher"

Arba galite nurodyti kitus kintamųjų vardus:

const person = { name: "John", age: 30, job: "teacher" };
const { name: personName, age: personAge, job: personJob } = person;
console.log(personName);  // Output: "John"
console.log(personAge);  // Output: 30
console.log(personJob);  // Output: "teacher"

Taip pat galite destruktūrizavimą naudoti su masyvais:

const colors = ["red", "green", "blue"];
const [color1, color2, color3] = colors;
console.log(color1);  // Output: "red"
console.log(color2);  // Output
*/


//1) Pasirašyti / susikurti string kintamąjį.
let kintamasis = 'Labas vakaras';

//2) Pasirašyti / susikurti number kintmąjį.
const number = 5;  // This creates a variable called "number" with the value 5

//3) Pasirašyti / susikurti masyvą tik su string kintamaisiais.
const masyvas = ["labas", "vakaras", "balos"];

//4) Pasirašyti / susikurti masyvą tik su number kintamaisiais.
const masyvas4 = [1, 2, 3];

//5) Pasirašyti / susikurti masyvą ir su string ir su number kintamaisiais.
let masyvas5 = [1, 2, 3, 'Labas'];

//6) Išvesti pirmąją 1'os užduoties kintamojo raidę.
let kintamasis6 = 'Labas';
console.log(kintamasis[0]); // Išveda: 'L'

//7) Išvesti paskutinę 1'os užduoties kintamojo raidę.
let kintamasis7 = 'Labas';
console.log(kintamasis[kintamasis.length - 1]); // Išveda: 's'

//8) Išvesti viduriniąją 1'os užduoties kintamojo raidę.
let kintamasis8 = 'Labas';
console.log(kintamasis[Math.floor(kintamasis.length / 2)]); // Išveda: 'b'


//9) Pasirašyti funkciją, kuri iš jai pateikto string kintamojo išvestų jai nurodytą raidę (kelintąją). Pvz.:(uzd9("labas", 3) => "b").
function getCharacter(string, position) {
    if (string && position >= 0 && position < string.length) {
      return string[position];
    }
  }
  console.log(getCharacter('Labas', 3)); // Išveda: 'a'

//10) Patikrinti ar 2'os užduoties kintamasis yra lyginis skaičius.
if (kintamasis % 2 === 0) {
    console.log('Lyginis skaičius');
  } else {
    console.log('Nelyginis skaičius');
  }

//11) Patikrinti ar 2'os užduoties kintamasis yra nelyginis skaičius.
let kintamasis11 = 4;
if (kintamasis % 2 !== 0) {
  console.log('Nelyginis skaičius');
} else {
  console.log('Lyginis skaičius');
}
// Išveda: 'Lyginis skaičius'

let kintamasis12 = 5;
if (kintamasis % 2 !== 0) {
  console.log('Nelyginis skaičius');
} else {
  console.log('Lyginis skaičius');
}
// Išveda: 'Nelyginis skaičius'

//12) Patikrinti ar 2'os užduoties kintamasis yra sveikasis skaičius.
let kintamasis13 = 7;

if (typeof kintamasis === "number" && kintamasis > 0) {
    console.log("Kintamasis yra sveikasis skaičius");
} else {
    console.log("Kintamasis nėra sveikasis skaičius");
}

//13) Parašyti funkciją, kuri pateiktų informaciją ar jai paduotas number kintamasis yra: lyginis/nelyginis skaičius. Pvz.: (uzd13(5) => nelyginis);
function patikrintiSkaiciu(skaicius) {
    if (skaicius % 2 === 0) {
      return "lyginis";
    } else {
      return "nelyginis";
    }
  }
  
  // Patikriname skaičių 5
  console.log(patikrintiSkaiciu(5));
  
  // Patikriname skaičių 10
  console.log(patikrintiSkaiciu(10));

//14) Iš 3'čios užduoties masyvo išvesti tik ilgesnius nei 5 simbolių žodžius.
const masyvas14 = ['laba', 'diena', 'kaip', 'sekasi'];

const filteredWords = masyvas.filter(zodis => zodis.length > 5);

for (const zodis of filteredWords) {
  console.log(zodis);
}
//15) Iš 3'čios užduoties masyvo išvesti tik trumpesnius nei 8 simbolių žodžius.
const masyvas15 = ['laba', 'diena', 'kaip', 'sekasi'];

const filteredWords1 = masyvas.filter(zodis => zodis.length < 8);

for (const zodis of filteredWords) {
  console.log(zodis);
}
//16+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio pirmąsias raides.
function pirmosRaides(masyvas) {
    for (const zodis of masyvas) {
      console.log(zodis[0]);
    }
  }
  
  // Išvesime pirmąsias masyvo elementų raides
  pirmosRaides(['laba', 'diena', 'kaip', 'sekasi']);

//17+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio paskutiniąsias raides.
function paskutinesRaides(masyvas) {
    for (const zodis of masyvas) {
      console.log(zodis[zodis.length - 1]);
    }
  }
  
  // Išvesime paskutines masyvo elementų raides
  paskutinesRaides(['laba', 'diena', 'kaip', 'sekasi']);

//18++) Parašyti funkciją, kuri iš jai pateikto masyvo išvestų tik tuos žodžius, kurie yra ilgesni negu A, bet trumpesni negu B. Pvz.:(funkcija uzd18(masyvas, a, b) => uzd18(["Labas", "ate", "Katašunis"], 4, 8) => "Labas")
function filtruotiZodzius(masyvas, a, b) {
    const filtruotasMasyvas = [];
    for (const zodis of masyvas) {
      if (zodis.length > a && zodis.length < b) {
        filtruotasMasyvas.push(zodis);
      }
    }
    return filtruotasMasyvas;
  }
  
  // Išfiltruosime žodžius
  console.log(filtruotiZodzius(["Labas", "ate", "Katašunis"], 4, 8));

//19) Sudėti visus 4'tos užduoties masyvo kintamuosius ir sumą išvesti į konsolę.
const masyvas19 = [1, 2, 3, 4, 5];
let suma = 0;

for (const skaicius of masyvas) {
  suma += skaicius;
}

console.log(suma);

//20) Sudėti kas antrą 4'tos užduoties masyvo kintamąjį ir sumą išvesti į konsolę.
const masyvas20 = [1, 2, 3, 4, 5];
let suma1 = 0;

for (let i = 0; i < masyvas.length; i += 2) {
  suma += masyvas[i];
}

console.log(suma);

//21+) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį ir išvestų sumą į konsolę.
function sumuotiKasN(masyvas, n) {
    let suma = 0;
    for (let i = 0; i < masyvas.length; i += n) {
      suma += masyvas[i];
    }
    return suma;
  }
  
  // Sudėsime kas antrą masyvo kintamąjį
  console.log(sumuotiKasN([1, 2, 3, 4, 5], 2));

//22++) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį tik tada, jeigu tas kintamasis yra lyginis arba nelyginis (nurodyti funkcijai) ir išvestų sumą į konsolę. Pvz.:(funk([1,2,3,4,5,6,7,8], 3, false) => 3)
function sumuotiKasN(masyvas, n, lyginis) {
    let suma = 0;
    for (let i = 0; i < masyvas.length; i += n) {
      if (lyginis && masyvas[i] % 2 === 0 || !lyginis && masyvas[i] % 2 === 1) {
        suma += masyvas[i];
      }
    }
    return suma;
  }
  
  // Sudėsime kas trečią nelyginį masyvo kintamąjį
  console.log(sumuotiKasN([1, 2, 3, 4, 5, 6, 7, 8], 3, false));

//23) Iš 5'tos užduoties masyvo atrinkite skaičius į vieną masyvą, o string'us į kitą.
const masyvas23 = [1, "Labas", 2, "Rytas", 3, "Vakaras"];
const skaiciai = [];
const stringai = [];

for (const elementas of masyvas) {
  if (typeof elementas === "number") {
    skaiciai.push(elementas);
  } else if (typeof elementas === "string") {
    stringai.push(elementas);
  }
}

console.log(skaiciai);
console.log(stringai);



//1) Parašyti ciklą, kuris išspausdintų kiekvieną masyvo elementą.
const masyvas24 = [1, 2, 3, 4, 5];

for (const elementas of masyvas) {
  console.log(elementas);
}

//2) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.
const masyvas25 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < masyvas.length; i += 3) {
  console.log(masyvas[i]);
}

//3) Parašyti funkciją, kuri išspausdintų kas kažkelintą elementą iš jai pateikto masyvo.
function ispausdintiKasN(masyvas, n) {
    for (let i = 0; i < masyvas.length; i += n) {
      console.log(masyvas[i]);
    }
  }
  
  // Išspausdinsime kas antrą masyvo elementą
  ispausdintiKasN([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);

//4) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.
const masyvas26 = [50, 51, 52, 53, 54, 55, 56, 57, 58];

for (const elementas of masyvas) {
  if (elementas > 54) {
    console.log(elementas);
  }
}

//5) Parašyti funkciją, kuri iš pateikto masyvo išspausdintų tik elementus, kurie prasideda nurodyta raide.
function ispausdintiPrasidedanciusRaide(masyvas, raide) {
    for (const elementas of masyvas) {
      if (elementas[0] === raide) {
        console.log(elementas);
      }
    }
  }
  
  // Išspausdinsime tik žodžius, kurie prasideda raide "L"
  ispausdintiPrasidedanciusRaide(["Labas", "Rytas", "Vakaras", "Lapas"], "L");

//6) Parašyti ciklą, kuris surikiuotų masyvą didėjimo tvarka. (tik su string ir tik su numbers (2ciklus)).
// Rikiuosime skaičių masyvą didėjimo tvarka
let masyvas27 = [3, 1, 4, 2, 5];
masyvas.sort((a, b) => a - b);
console.log(masyvas);  // [1, 2, 3, 4, 5]

// Rikiuosime žodžių masyvą abėcėlės tvarka
masyvas27 = ["Labas", "Rytas", "Vakaras", "Lapas"];
masyvas.sort();
console.log(masyvas);  // ['Labas', 'Lapas', 'Rytas', 'Vakaras']

//7) Parašyti funkciją, kuri iš masyvo atrinktų tik lyginius skaičius, juos surikiuotų mažėjimo tvarka ir išspausdintų konsolėje.
function rikiuotiLyginius(masyvas) {
    const lyginiai = [];
    for (const skaicius of masyvas) {
      if (skaicius % 2 === 0) {
        lyginiai.push(skaicius);
      }
    }
    lyginiai.sort((a, b) => b - a);
    console.log(lyginiai);
  }
  
  // Išspausdinsime surikiuotus lyginius skaičius
  rikiuotiLyginius([3, 1, 4, 2, 5, 6, 7, 8, 9]);




//1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.
function arrayToString(array) {
  let result = "";
  for (let element of array) {
    result += element;
  }
  return result;
}

//2) Parašykite funkciją, kuriai padavus kažkokį number kintamąjį (ilgą 10+ skaitmenų), jinai jį išvestų į konsolę su "-" simboliu tarp dviejų lyginių skaičių. (pvz: paduodi 0645234, grąžina 0-6-45234)
function printWithHyphen(num) {
  let result = "";
  for (let i = 0; i < num.length; i++) {
    let digit = num[i];
    if (i % 2 == 0) {
      result += digit + "-";
    } else {
      result += digit;
    }
  }
  console.log(result);
}

//3) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

//4) Parašykite funkciją, kuri iš jai paduoto masyvo išrinktų nurodytas reikšmes ir grąžintų likusias (išvestų į konsolę). (paduodama masyvas=[1,4,5,6,4,8,4,5], funkcija: func(masyvas, 4,6,8), grąžina: [1,5,5]).
function filterArray(array, ...valuesToFilter) {
  let result = [];
  for (let element of array) {
    if (!valuesToFilter.includes(element)) {
      result.push(element);
    }
  }
  console.log(result);
}

//5) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius.
function findMinMax(array) {
  let min = array[0];
  let max = array[0];
  for (let element of array) {
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  }
  console.log(`Min: ${min}, Max: ${max}`);
}

//6) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę.
function findDuplicates(array1, array2) {
  let result = [];
  for (let element of array1) {
    if (array2.includes(element) && !result.includes(element)) {
      result.push(element);
    }
  }
  console.log(result);
}

//7) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])
function createNewArray(infoArray, indexArray) {
  let result = [];
  for (let index of indexArray) {
    result.push(infoArray[index]);
  }
  return result;
}

//8) Parašykite funkciją, kuri iš jai paduoto masyvo atrinktų ir į konsolę išspausdintų tik unikalius duomenis.
function printUnique(array) {
  let result = [];
  for (let element of array) {
    if (!result.includes(element)) {
      result.push(element);
    }
  }
  console.log(result);
}

//9) Parašykite funkciją, kuri iš jai paduotų masyvų (2 arba daugiau) atrenka ir išspausdina tik tuos duomenis, kurie kartojasi visuose masyvuose.
function findCommon(...arrays) {
  let commonElements = arrays[0];
  for (let i = 1; i < arrays.length; i++) {
    let currentArray = arrays[i];
    commonElements = commonElements.filter(element => currentArray.includes(element));
  }
  console.log(commonElements);
}

//10) Parašykte funkciją, kuri iš jai paduoto skaičių masyvo atrinktų n'tąjį didžiausią skaičių. (iš funkcija([12,54,1,65,78,91,45],3) grąžintų 65).

function findNthLargest(array, n) {
  let sortedArray = array.sort((a, b) => b - a);
  return sortedArray[n - 1];
}



//1.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A.
function filterGreaterThanA(array, A) {
  let result = [];
  for (let element of array) {
    if (element > A) {
      result.push(element);
    }
  }
  return result;
}

//1.2) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B.

function filterBetweenAAndB(array, A, B) {
  let result = [];
  for (let element of array) {
    if (element > A && element < B) {
      result.push(element);
    }
  }
  return result;
}

//1.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B ir yra lyginiai arba nelyginiai (true/false).
function filterBetweenAAndBAndOddEven(array, A, B, isOdd) {
  let result = [];
  for (let element of array) {
    if (element > A && element < B && (element % 2 === 0) === !isOdd) {
      result.push(element);
    }
  }
  return result;
}

//1.4) Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 1.1, 1.2 ir 1.3 užduotis.
function filterBetweenAAndBAndOddEven(array, A, B, isOdd) {
  return array.filter(element => element > A && element < B && element % 2 === (isOdd ? 1 : 0));
}

//2.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A.
function filterLongerThanA(array, A) {
  let result = [];
  for (let element of array) {
    if (element.length > A) {
      result.push(element);
    }
  }
  return result;
}

//2.2) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A, trumpesni negu B.
function filterBetweenALengthAndBLength(array, A, B) {
  let result = [];
  for (let element of array) {
    if (element.length > A && element.length < B) {
      result.push(element);
    }
  }
  return result;
}

//2.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto string masyvo grąžintų tik tuos žodžius, kurie yra ilgesni negu A, trumpesni negu B ir prasideda didžiąja arba mažąja raidėmis (true/false).
function filterBetweenALengthAndBLengthAndStartsWithUppercase(array, A, B, startsWithUppercase) {
  let result = [];
  for (let element of array) {
    if (element.length > A && element.length < B && element[0] === element[0].toUpperCase() === startsWithUppercase) {
      result.push(element);
    }
  }
  return result;
}

//2.4) Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 2.1, 2.2 ir 2.3 užduotis.
const filterBetweenALengthAndBLengthAndStartsWithUppercase2 = (array, A, B, startsWithUppercase) => array.filter(element => element.length > A && element.length < B && element[0] === element[0].toUpperCase() === startsWithUppercase);


//3) Parašykite funkciją, kuri iš mišraus masyvo atrinktų tik number arba tik string kintamuosiuos (true/false).
function filterNumberOrString(array, isNumber) {
  let result = [];
  for (let element of array) {
    if (typeof element === "number" === isNumber || typeof element === "string" !== isNumber) {
      result.push(element);
    }
  }
  return result;
}

//3.1.1) Jeigu atrinkinėja skaičius, tai juos surikiuoti didėjimo arba mažėjimo tvarka (true/false) ir grąžintų sutvarkytą masyvą.
function filterAndSortNumber(array, isAscending) {
  let result = array.filter(element => typeof element === "number");
  result.sort((a, b) => (isAscending ? a - b : b - a));
  return result;
}

//3.1.2) Prie 3.1.1 pridėti ir dydžio tikrinimą (ne mažesni negu A ir ne didesni negu B skaičiai (A<skaičius<B)).
function filterAndSortNumberWithinRange(array, isAscending, min, max) {
  let result = array.filter(element => typeof element === "number" && element >= min && element <= max);
  result.sort((a, b) => (isAscending ? a - b : b - a));
  return result;
}

//3.2.1) Jeigu atrinkinėja žodžius, tai juos surikiuoti pagal abėcėlę A->Z arba Z->A (true/false) ir grąžintų sutvarkytą masyvą.
function filterAndSortString(array, isAscending) {
  let result = array.filter(element => typeof element === "string");
  result.sort((a, b) => (isAscending ? a.localeCompare(b) : b.localeCompare(a)));
  return result;
}

//3.2.2) Prie 3.2.1 pridėti ir ilgio tikrinimą (ne trumpesni negu A ir ne ilgesni negu B žodžiai (A<=žodis.length<=B)).
function filterAndSortStringWithinLength(array, isAscending, min, max) {
  let result = array.filter(element => typeof element === "string" && element.length >= min && element.length <= max);
  result.sort((a, b) => (isAscending ? a.localeCompare(b) : b.localeCompare(a)));
  return result;
}

//3 užduoties galutinės versijos funkcijos ir jos kvietimo pvz.: 
	//funkcija vardas(masyvas, numberArString, didejimoArMazejimo, minimum, maximum);
	//let rikiuotas = vardas(masyvas3, true, false, 3, 6) -> kintamajam "rikiuotas" grąžina masyvą, kuris susideda iš masyvas3 buvusių elementų, kurie yra: true - number, false - mažėjimo tvarka, 3 - didesni negu 3, 6 - mažesni negu 6.

  function filterAndSortArray(array, isNumber, isAscending, min, max) {
    let result = array.filter(element => {
      if (isNumber) {
        return typeof element === "number" && element >= min && element <= max;
      } else {
        return typeof element === "string" && element.length >= min && element.length <= max;
      }
    });
    result.sort((a, b) => (isAscending ? (isNumber ? a - b : a.localeCompare(b)) : (isNumber ? b - a : b.localeCompare(a))));
    return result;
  }
