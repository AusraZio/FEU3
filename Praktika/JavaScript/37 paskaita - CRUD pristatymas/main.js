/*
  Po CRUD pristatymų
  Tęsiame kartojimą
  Masyvų iteracinių metodų kartojimas
*/

/*
  JS array filter_reduce.txt
  JS findIndex, find, some, every, includes.txt
*/

/*Filter
  syntax:
    filter((element, index, array) => { ... });
  pvz:
    items.filter( item => item > 10);
  Ką daro:
    Pereina per kiekvieną masyvo elementą ir jį prafiltruoja (taip kaip nurodyta iškviečiamojoje funkcijoje) ir sugrąžina tik tuos, kurie atitiko filtrą.
  Link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  Videos:
    https://youtu.be/8kyLmsMYBBI
    https://youtu.be/Q85O152q6UI
    https://youtu.be/4_iT6EGkQfk
    https://youtu.be/qmnH5MT_luk - ilgi bet, tikrai informatyvūs su paprastais paaiškinimais ir pavyzdžiais video pas šitą žmogelį.
*/
/*
Reduce
  syntax:
    reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue);
  pvz:
    items.reduce((total, current) => {total + current}, 0);
  Ką daro:
    Sudeda visus masyvo elementus rekursijos būdu. Galima nustatyti pradinę reikšmę(nuo kokio skaičiaus skaičiuos).
  Link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  Videos:
    https://youtu.be/tVCYa_bnITg
    https://youtu.be/g1C40tDP0Bk
    https://youtu.be/PAwd4gjb7aI
    https://youtu.be/wM6WkVNMDuI

*/


//      Užduotys:
	/* Kur parašyta "naudojant" - privalu panaudoti tą metodą, bet galima naudoti ir kitus jei to neužtenka */
//1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}]
const items = [
  {id: 0, name: 'Burgeris', inStock: true, primeCost: 0.3, cost: 1},
  {id: 1, name: 'Pica', inStock: true, primeCost: 0.5, cost: 2},
  {id: 2, name: 'Kava', inStock: true, primeCost: 0.2, cost: 1},
  {id: 3, name: 'Arbata', inStock: false, primeCost: 0.15, cost: 0.5},
  {id: 4, name: 'Sultys', inStock: true, primeCost: 0.1, cost: 0.5},
  {id: 5, name: 'Sviestas', inStock: true, primeCost: 0.1, cost: 0.5},
  {id: 6, name: 'Pienas', inStock: true, primeCost: 0.15, cost: 0.5},
  {id: 7, name: 'Suris', inStock: true, primeCost: 0.2, cost: 1},
  {id: 8, name: 'Duona', inStock: true, primeCost: 0.1, cost: 0.5},
  {id: 9, name: 'Kiaušiniai', inStock: true, primeCost: 0.1, cost: 0.5}
];

//2) Naudojant 1 užduoties masyvą:
  //2.1) Naudojant filter - išfiltruoti tuos masyvo elementus, kurie yra inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje.
  const itemsInStock = items.filter(item => item.inStock === true);

console.log(itemsInStock);

  //2.2) Naudojant map ir 2.1 masyvą - sukurti naują masyvą, kuriame būtų suskaičiuotas ir išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje.
  const profits = items.map(item => item.cost - item.primeCost);

console.log(profits);

  //2.3) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje. (galima sukurti kelis užsakymus)
  const orders = [
    {name: 'Burgeris', quantity: 2},
    {name: 'Kava', quantity: 1},
    {name: 'Pienas', quantity: 3}
  ];
  
  console.log(orders);

  //2.4) Naudojant reduce - suskaičiuoti kiek pelno suteiks 2.3 masyvo užsakymas ir tai atvaizduoti konsolėje. (arba užsakymai, jei 2.3 dalyje sukūrėte keletą užsakymų)
  const totalProfit = orders.reduce((acc, order) => {
    // Ieškome prekės su šiuo vardu
    const item = items.find(item => item.name === order.name);
    // Jei rastas, pridedame prie bendro pelno
    if (item) {
      return acc + (item.cost - item.primeCost) * order.quantity;
    }
    // Kitu atveju grąžiname tą pačią reikšmę
    return acc;
  }, 0);
  
  console.log(totalProfit);

  //2.5) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje.
  const orderSummary = orders.map(order => {
    // Ieškome prekės su šiuo vardu
    const item = items.find(item => item.name === order.name);
    // Suskaičiuojame kainą
    const totalCost = item ? item.cost * order.quantity : 0;
    // Grąžiname objektą su užsakymu ir kaina
    return {
      order: `${order.name} x ${order.quantity}`,
      cost: totalCost
    };
  });
  
  console.log(orderSummary);

//3) Sukurti funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale. (A - kokio ilgio masyvo norite, B - mažiausias galimas masyvo skaičius, C - didžiausias galimas masyvo skaičius). (naudoti Math.random())
function createArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.random() * (max - min) + min);
  }
  return array;
}

// Sukuriam masyvą su 5 elementais, kurie yra atsitiktiniai skaičiai nuo 1 iki 10
const array = createArray(5, 1, 10);

console.log(array);

//4) Sukurti funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą atskirdama kiekvieną žodį. (tarpai ir skiriamieji ženklai neturi būti įtraukti).
function splitIntoWords(string) {
  return string.split(' ');
}

// Sukuriam masyvą su žodžiais iš string'o
const words = splitIntoWords('Šiandien yra šilta ir saulėta');

//5) Naudojant 3'ios užduoties masyvą išfiltruoti lyginius skaičius.
function createArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.random() * (max - min) + min);
  }
  return array;
}

// Sukuriam masyvą su 5 elementais, kurie yra atsitiktiniai skaičiai nuo 1 iki 10
const array5 = createArray(5, 1, 10);

// Išfiltruojame lyginius skaičius iš masyvo
const evenNumbers = array.filter(number => number % 2 === 0);

console.log(evenNumbers);
//6) Naudojant 3'ios užduoties masyvą išfiltruoti nelyginius skaičius.
function createArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.random() * (max - min) + min);
  }
  return array;
}

// Sukuriam masyvą su 5 elementais, kurie yra atsitiktiniai skaičiai nuo 1 iki 10
const array6 = createArray(5, 1, 10);

// Išfiltruojame nelyginius skaičius iš masyvo
const oddNumbers = array.filter(number => number % 2 !== 0);

console.log(oddNumbers);

//7) Naudojant 3'ios užduoties masyvą išfiltruoti sveikuosius skaičius.
function createArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.random() * (max - min) + min);
  }
  return array;
}

// Sukuriam masyvą su 5 elementais, kurie yra atsitiktiniai skaičiai nuo 1 iki 10
const array7 = createArray(5, 1, 10);

// Išfiltruojame sveikus skaičius iš masyvo
const integerNumbers = array.filter(number => Number.isInteger(number));

console.log(integerNumbers);
//8) Sukurti funkciją, kuri 3'ios užduoties masyvą išfiltruotų A ir B intervale (nuo skaičiaus A iki skaičiaus B imtinai).
const array8 = [3, 5, 7, 9, 11];

// Išfiltruojame skaičius, kurie yra didesni nei 5
const numbersGreaterThan5 = array.filter(number => number > 5);

console.log(numbersGreaterThan5);

//9) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda didžiąja raide.
function splitIntoWords(string) {
  return string.split(' ');
}

// Sukuriam masyvą su žodžiais iš string'o
const words9 = splitIntoWords('Šiandien yra šilta ir saulėta');

// Filtruojame žodžius, kurie prasideda didžiąja raide
const capitalizedWords = words.filter(word => {
  return word[0] === word[0].toUpperCase();
});

console.log(capitalizedWords); // ['Šiandien', 'Šilta']

//10) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda mažąja raide.
function splitIntoWords(string) {
  return string.split(' ');
}

// Sukuriam masyvą su žodžiais iš string'o
const words10 = splitIntoWords('Šiandien yra šilta ir saulėta');

// Filtruojame žodžius, kurie prasideda mažąja raide
const lowercaseWords = words.filter(word => {
  return /^[a-z]/.test(word);
});

console.log(lowercaseWords); // ['ir', 'saulėta']

//11) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide prasidedančius žodžius.
function splitIntoWords(string) {
  return string.split(' ');
}

// Sukuriam masyvą su žodžiais iš string'o
const words11 = splitIntoWords('Šiandien yra šilta ir saulėta');

function filterWordsByFirstLetter(words, letter) {
  return words.filter(word => {
    return word[0] === letter;
  });
}

console.log(filterWordsByFirstLetter(words, 'Š')); // ['Šiandien', 'Šilta']
console.log(filterWordsByFirstLetter(words, 's')); // ['saulėta']

//12) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide pasibaigiančius žodžius.
function splitIntoWords(string) {
  return string.split(' ');
}

// Sukuriam masyvą su žodžiais iš string'o
const words12 = splitIntoWords('Šiandien yra šilta ir saulėta');

function filterWordsByLastLetter(words, letter) {
  const regex = new RegExp(`${letter}$`, 'i');
  return words.filter(word => {
    return regex.test(word);
  });
}

console.log(filterWordsByLastLetter(words, 'a')); // ['Šilta', 'saulėta']
console.log(filterWordsByLastLetter(words, 't')); // ['Šiandien', 'šilta']

//13) Naudojant reduce metodą suskaičiuoti 5'tos užduoties masyvo bendrą sumą.
function createArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.random() * (max - min) + min);
  }
  return array;
}

// Sukuriam masyvą su 5 elementais, kurie yra atsitiktiniai skaičiai nuo 1 iki 10
const array13 = createArray(5, 1, 10);

// Išfiltruojame lyginius skaičius iš masyvo
const evenNumbers1 = array5.filter(number => number % 2 === 0);

let sum = 0;
for (const number of evenNumbers) {
  sum += number;
}

console.log(sum);

//14) Naudojant reduce metodą suskaičiuoti 6'tos užduoties masyvo bendrą sandaugą.
function createArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.random() * (max - min) + min);
  }
  return array;
}

// Sukuriam masyvą su 5 elementais, kurie yra atsitiktiniai skaičiai nuo 1 iki 10
const array14 = createArray(5, 1, 10);

// Išfiltruojame nelyginius skaičius iš masyvo
const oddNumbers1 = array6.filter(number => number % 2 !== 0);

// Suskaičiuojame nelyginių skaičių sandaugą
const product = oddNumbers.reduce((total, number) => total * number, 1);

console.log(product);





/*FindIndex
  Syntax:
    findIndex((element, index, array) => { ... } )
  Pvz:
    const isLargeNumber = (element) => element > 13;
  Ką daro:
    Suranda ir grąžina indeksą to elemento esančio masyve, kuris pirmasis tenkina pateiktą salygą.
  Link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
*/
/*
Find
  Syntax:
    find((element, index, array) => { ... } )
  Pvz:
    const found = array1.find(element => element > 10);
  Ką daro:
    Suranda ir grąžina tą masyvo elementą, kuris pirmasis tenkina pateiktą salygą.
  Link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  Video:
    https://youtu.be/sBVaoFg2ww4
*/
/*
Some
  Syntax:
    some((element, index, array) => { ... } )
  Pvz:
    const even = (element) => element % 2 === 0;
  Ką daro:
    Tikrina ar bent vienas elementas masyve tenkina pateiktą salygą.
  Link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  Video:
    https://youtu.be/RrvhtJYYKcw
*/
/*
Every
  Syntax:
    every((element, index, array) => { ... } )
  Pvz:
    const isBelowThreshold = (currentValue) => currentValue < 40;
  Ką daro:
    Tikrina ar visi elementas masyve tenkina pateiktą salygą.
  Link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  Video:
    https://youtu.be/PJM3BaWu5Jw
*/
/*
Includes
  Syntax:
    includes(searchElement, fromIndex)
  Pvz:
    pets.includes('cat');
  Ką daro:
    Patikrina ar masyve yra bent vienas nurodytas elementas ir grąžina true arba false.
  Link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
*/

//1) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra didenis už A (A - funkcijos parametras skaičius).
function findFirstGreaterThanA(array, A) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > A) {
      return i;
    }
  }
  return -1;
}

//2) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A (A - funkcijos parametras skaičius).
function findFirstLessThanA(array, A) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < A) {
      return i;
    }
  }
  return -1;
}

//3) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda mažąja raide.
function findFirstLowercase(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0].toLowerCase() === array[i][0]) {
      return i;
    }
  }
  return -1;
}

//4) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja raide.
function findFirstUppercase(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0].toUpperCase() === array[i][0]) {
      return i;
    }
  }
  return -1;
}

//5+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
function findFirstBetweenAAndB(array, A, B) {
  for (let i = 0; i < array.length; i++) {
    if (A < array[i] && array[i] < B) {
      return i;
    }
  }
  return -1;
}

//6++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
function findFirstWithLengthBetweenAAndB(array, A, B, capitalized) {
  for (let i = 0; i < array.length; i++) {
    if (A < array[i].length && array[i].length < B && ((array[i][0].toUpperCase() === array[i][0] && capitalized) || (array[i][0].toLowerCase() === array[i][0] && !capitalized))) {
      return i;
    }
  }
  return -1;
}

//7) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra didenis už A (A - funkcijos parametras skaičius).
function findFirstGreaterThanA(array, A) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > A) {
      return array[i];
    }
  }
  return null;
}

//8) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A (A - funkcijos parametras skaičius).
function findFirstLessThanA(array, A) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < A) {
      return array[i];
    }
  }
  return null;
}

//9) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda mažąja raide.
function findFirstLowercase(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][0].toLowerCase() === array[i][0]) {
      return array[i];
    }
  }
  return null;
}

//10) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja raide.
function findFirstUppercase(arr) {
  for (const element of arr) {
    if (element[0].toUpperCase() === element[0]) {
      return element;
    }
  }
  return null;
}

//11+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
function findFirstBetween(arr, A, B) {
  for (const element of arr) {
    if (A > element > B) {
      return element;
    }
  }
  return null;
}

//12++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
function findFirstString(array, case1, A, B) {
  for (const s of array) {
    if (s.length > A && s.length < B && s[0].toUpperCase() === (case1 === "d")) {
      return s;
    }
  }
  return null;
}

//13) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra didenis už A (A - funkcijos parametras skaičius).
function anyLargerThan(array, A) {
  for (const x of array) {
    if (x > A) {
      return true;
    }
  }
  return false;
}

//14) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A (A - funkcijos parametras skaičius).
function anySmallerThan(array, A) {
  for (const x of array) {
    if (x < A) {
      return true;
    }
  }
  return false;
}

//15) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda mažąja raide.
function anyLowercase(array) {
  for (const s of array) {
    if (s[0] === s[0].toLowerCase()) {
      return true;
    }
  }
  return false;
}

//16) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja raide.
function anyUppercase(array) {
  for (const s of array) {
    if (s[0] === s[0].toUpperCase()) {
      return true;
    }
  }
  return false;
}

//17+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
function anyBetween(array, A, B) {
  for (const x of array) {
    if (x > A && x < B) {
      return true;
    }
  }
  return false;
}

//18++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
function anyMatchingString(array, case2, A, B) {
  for (const s of array) {
    if (s.length > A && s.length < B && s[0].toUpperCase() === (case2 === "d")) {
      return true;
    }
  }
  return false;
}

//19) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra didenis už A (A - funkcijos parametras skaičius).
function allLargerThan(array, A) {
  for (const x of array) {
    if (x <= A) {
      return false;
    }
  }
  return true;
}

//20) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A (A - funkcijos parametras skaičius).
function allSmallerThan(array, A) {
  for (const x of array) {
    if (x >= A) {
      return false;
    }
  }
  return true;
}

//21) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda mažąja raide.
function allLowercase(array) {
  for (const s of array) {
    if (s[0] !== s[0].toLowerCase()) {
      return false;
    }
  }
  return true;
}

//22) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja raide.
function allUppercase(array) {
  for (const s of array) {
    if (s[0] !== s[0].toUpperCase()) {
      return false;
    }
  }
  return true;
}

//23+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
function allBetween(array, A, B) {
  for (const x of array) {
    if (x <= A || x >= B) {
      return false;
    }
  }
  return true;
}

//24++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).   
function allMatchingString(array, case3, A, B) {
  for (const s of array) {
    if (s.length <= A || s.length >= B || s[0].toUpperCase() !== (case3 === "d")) {
      return false;
    }
  }
  return true;
}

//25) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė.
function contains(array, value) {
  return array.includes(value);
}

//26) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė, nuo pasirinkto indekso.
function containsFromIndex(array, value, index) {
  return array.slice(index).includes(value);
}