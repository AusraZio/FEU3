//          Ciklai
/*
    do while - bent viena syki butu paleistas ciklas
    for in  - suka cikla per objekta
    for of   - suka cikla per masyva


    array iteration methods
*/
// do while
{
let i = 1
//while(i<10){
 //   console.log('veiksmai');
   // i++;
//}
do{
    console.log('veiksmai');
    i++;
}while(i<10);
}

//  for in
{
    console.groupCollapsed("forIn");
    var objektas = {a:1, b:2, c:3, d:4, e:5};
    for(let raktas in objektas){
      console.log(raktas + " : " + objektas[raktas]);
      console.log(raktas, ":", objektas[raktas]);
    }
    console.log("zodis");
    console.log("1");
    console.log("true");
    console.log(1);
    console.log(true);
    console.groupEnd();
  }
// for of
{
    let masyvas = [5,8,9,4,1,false,false,true,'hallo',46,1,5,4];
    //for(let i = 0; i < masyvas.length; i++){
     //   console.log(masyvas[i]);
    //}
   for(let element of masyvas){
    typeof(element) === "number" ? console.log(element): null;
    //if(typeof(element) === "number"){
    //    console.log(element);
    //}
   } 
}

//forEach
{
let masyvas = [5,8,9,4,1,false,false,true,'hallo',46,1,5,4];
masyvas.forEach(element => typeof(element) === "number" ? console.log(element): null);
}

//     Funkcijos
/*
  Funkcija - veiksmu seka, kuri yra vykdoma tik tuomet , kai i ja yra kreipiamasi.
  Parametrai/Argumentai - duomenys, perduodami funkcijai jos iskvietimo metu, su kuriais funkcijos viduje bus atliekami kazkokie veiksmai.
  return - funkcija gali kazka grazinti. Funcijos veiksmai vyksta iki tol kol pasiekiamas return'as.
*/
function helloWorld(vardas){
    console.log("Hello" + vardas);
}

//setTimeout(helloWorld, 5000); iskrenta zodziai po 5s

function sudetis(nr1, nr2){
    console.log("why not");
    if(typeof(nr1)==="number" && typeof(nr2)==="number"){
        let atsakymas = nr1 + nr2;
        return atsakymas;
    } else{
        return "Error 404";
    }
}

// 1) Sukurti funkcijas, kurios atliktų paprastus matematinius veiksmus su duotaisiais parametrais (du parametrai). (4 funkcijos) (optional 7 funkcijos)
function sudetis(nr1, nr2){
    console.log("why not");
    if(typeof(nr1)==="number" && typeof(nr2)==="number"){
        let atsakymas = nr1 + nr2;
        return atsakymas;
    }else{
        return "Error 404";
    }
}
function atimtis(nr1, nr2){
    console.log("why not");
    if(typeof(nr1)==="number" && typeof(nr2)==="number"){
        let atsakymas = nr1 - nr2;
        return atsakymas;
    }else{
        return "Error 404";
    }
}
function dalyba(nr1, nr2){
    console.log("why not");
    if(typeof(nr1)==="number" && typeof(nr2)==="number"){
        let atsakymas = nr1 / nr2;
        return atsakymas;
    }else{
        return "Error 404";
    }
}
function daugyba(nr1, nr2){
    console.log("why not");
    if(typeof(nr1)==="number" && typeof(nr2)==="number"){
        let atsakymas = nr1 * nr2;
        return atsakymas;
    }else{
        return "Error 404";
    }
}

//
function kiekStringuMasyve(array){
    let kiek = 0
    for(let i = 0; i < array.length; i++){
      if(typeof(array[i]) === "string"){
        kiek++;
      } 
    }
    return kiek;
}

//2 sukurti funkcija, kuri i konsole isvestu visus jai duotojo masyvo elementus nuo pirmo iki paskutinio.
function firstToLast(array){
    for(let element of array){
      console.log(element);
    }
  }

//3 sukurti funkcija, kuri i konsole isvestu visus jai duotus masyvo elementus nuo paskutinio iki pirmojo.
function lastToFirst(array){
  for(let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
  // array.reverse();
  // for(let element of array){
  //   console.log(element);
  // }
}

//  Masyvu metoday
/*
pop           - isima is masyvo galo, modifikuoja  
shift()       - isima is masyvo pradzios, modifikuoja  
push()        - prideda prie masyvo galo, modifikuoja  
unshift()     - prideda prie masyvo pradzios, modifikuoja  

reverse()    - apsuka masyva, modifikuoja masyva
slice(nr1,nr2)   - paima nuo nr1 (imtinai) iki nr2 (neimtinai) masyvo elementus, NEmodifikuoja masyvo      
splice(nr1, nr2, nr3, nr4, nr5... ) -  nuo nr1 trina nr2 kieki elementu ir toje vietoje iterpia nr3, nr4, nr5... elementus, modifikuoja
arr1.concat(arr2, arr3, arr4...) - prie array1 masyvo prijungia arr2, arr3, arr4... masyvus , NEmodifikuoja
sort()        - isrikiuoja masyva abeceles tvarka
  skaiciu problema sprendziame su sia funkcija(a,b){return a-b} ikelta i sort sklaiustelius
  zodziu problema sprendziama su function(a,b){return a.localeCompare(b)}) ikelta i sort skliaustelius
*/

let masyvas = [1,2,3,4,5,6,7,8,9];
let gabaliukas = masyvas.slice(3,6);
let iskirptas = masyvas[3];
masyvas.splice(3, 2, 0, 0, 0, 0, 0, 0)
let sujungtas = masyvas.concat(['labas', 'ąs', 'esu', 'naujas', 'masyvas', 'ūsa', 'žiūrovas'], [false, 0, "undefined", "null", 90, 1110, 654]);
//sujungtas.sort(function(a,b){return a-b});
let zodziuMasyvas = ['labas', 'ąs', 'esu', 'naujas', 'masyvas', 'ūsa', 'žiūrovas'];
//sujungtas.sort(function(a,b){return a.localeCompare(b)});




//4) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su string kintamaisiais))) abeceliškai ir ją išvestų į konsolę.

let zodziuMasyvas1 = ['zasis', "kelmas", 'medis','azuolas'];
zodziuMasyvas1.sort();

//5) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su number kintamaisiais))) nuo didžiausio iki mažiausio ir ją išvestų į konsolę.

let skaiciai = [100, 999, 50, 1, 0, 63, 1548, 2, 78, 99];
function rikiuojame(arr1){
return arr1.sort(function(a,b){return a-b});
}

//6) Sukurti funkciją, kuri į konsolę išvestų visus skaičius nuo pirmo duotojo parametro (imtinai) iki antrojo (imtinai). (paduodu 5,9 => grąžina 5,6,7,8,9)

function nuoIki(nr1, nr2){
    let arrayToReturn = [];
    for(let i = nr1; i <= nr2; i++){
        arrayToReturn.push(i);
    }
    return arrayToReturn;
}

//7) Sukurti funkciją, kuri į konsolę išvestų skaičius kas pirmąjį duotajį parametrą nuo antrojo duotojo parametro (imtinai) iki trečiojo duotojo parametro (imtinai). (paduodu 2,5,9 => grąžina 5,7,9)

function nuoIkiZingsnis(step, nr1, nr2){
  let arrayToReturn = [];
  for(let i =nr1; i <= nr2; i+=step){
    arrayToReturn.push(i);
  }
  return arrayToReturn;
}

//8) Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Petrauskas" => 16).

function nameNumber(vardas,pavarde) {
    let numberOfLetters = ((vardas+pavarde).length);
    return numberOfLetters;
    }

//9) Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę.

let abecele = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    function masyvas9(number){
      for(const i=0; i < abecele.length; i+=2){
       if(typeof(masyvas9[number]) === 'number');
        return abecele[number];
      }
    }

//10) Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.


function math(n1, n2, operator){
    switch(n1, n2, operator){
      case 'sum':
      let sum = n1 + n2
      console.log(sum + ' sum');
      break;
      case 'div':
      let div = n1 / n2
      console.log(div + ' divide');
      break;
      case 'min':
      let min = n1 - n2
      console.log(min + ' minus');
      break;
      case 'kart':
      let kart = n1 * n2
      console.log(kart + ' kart');
      break;
    }
  }

//11) Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

var skaicius = [];
function randomNumber(skaicius){
  for(let i = 0; i <= 10; i++){
  return Math.floor(Math.random()*11);
}
console.log(skaicius);
}




//extra0) Sukurti funkciją, kuri pirmojo parametro (masyvo) elementus sudėtų į kito parametro (masyvo irgi) vidų toje vietoje, kokio ilgio yra antrasis parametras (tuo momentu) tol kol antrasis parametras liks tuščias. (a=[1,2,3,4,5,6,7]b=[a,b,c]; a=[1,2,3,a,4,5,6,7]b=[b,c]; a=[1,2,b,3,a,4,5,6,7]b=[c]; a=[1,c,2,b,3,a,4,5,6,7]b=[])

let pirminisMasyvas=[1, 2, 3, 4, 5, 6, 7]
let antrinisMasyvas=['a', 'b', 'c']
do{
pirminisMasyvas.splice(antrinisMasyvas.length, 0, antrinisMasyvas.pop())
console.log(pirminisMasyvas);
} while (antrinisMasyvas.length > 0);

//extra1) Sukurti funkciją, kuri atlieka Fizz Buzz testą nuo-iki duotųjų parametrų.
//extra2) Sukurti funkciją, kuri randa visus pirminius skaičius iki nurodyto parametro.
