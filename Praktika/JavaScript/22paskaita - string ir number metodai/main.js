///             Metodai

///             Math/Number
/*
Kreipimasis i number metodus prasideda zodziu "Math" arba number kintamuoju uz jo rasome taska "." ir uz tasko rasome metodo pavadinima ir skliaustelius su galimais parametrais. 
Pvz: Math.random(); (45.9841234).toFixed(3)
Math - atlieka skaiciavimus, pateikia duomenis, pakeitimus.(daugiau variacijos)
number - atlieka pakeitimus, konvertavimus.
*/     
console.groupCollapsed("Number/Math/number");       
let number = 50.143451;
console.log(number.toFixed(4));
console.log(Math.floor(number));
console.log(Math.random() * number);
console.log(number.toString());
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Math.pow(5,2));
console.log(Math.sqrt(25));
console.log((Math.random() * number).toFixed(2));
console.log(Number(number.toFixed(4)));
console.log(number.toFixed(4)*1);
console.log(".........");
console.groupEnd();

//              String
/*
  String metodai yra kazkokios funkcijos, kurios atlieka kazkokius veiksmus su duotosiomis zodinemis reiksmemis. Tam tikriems metodams, parametrai yra reikalingi, kitiems - ne.
*/

let zodis = 'Labas . 654 asd';
console.log(zodis.split(''));// atskiria
console.log(zodis[0]);
console.log(zodis.trim())//trina tarpelius
console.log(zodis.includes(''));//speja ar yra raide ar zodis tekste true/false
console.log(zodis.slice('5,10'));//padeda taska tarp tu skaiciu
console.log(zodis.replaceAll(".", ","));//sukeicia is tasku i kablelius ir atvirksciai, galima su zodziaias
console.log(zodis.charAt(0));
console.log(zodis.length);//nusako zodzio ilgi
console.log(zodis.charAt(zodis.length-1));
console.log(zodis.concat(',', 'labas', zodis));//prideda zodi papildomai
console.log(zodis.toUpperCase());//didina raides

//              RegExp
/*
pattern - simboliu seka
Regular expression - reguliariosios israiskos - yra nurodytos simboliu sekos, kurias turi atitikti vartotojo vedama informacija

\d - digit (skaicius nuo 0 iki 9)
[0-9] - digit (skaiciai nuo 0 iki 9)
[a-z] - char (raides nuo a iki z)mazosios raides
[A-Z] - char (raides nuo A iki Z)didziosios raides
{sk} - kiek sykiu kartoti pries tai nusodyta info
\s - whiteSpace (tarpas)
^ - sekos pradzia
$ - sekos pabaiga
*/

/*let phoneRegex = /^(+[0-9]{3})\s [0-9]{3}\s[0-9]{5})/;//telefono kodo rasymas*/





////////   Namu darbai
//Number:
 //task1
// Number:
//   1) Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoj?? console() ar jam reik??s cent??, ar nereik??s (t.y. ar skai??ius sveikas).


const milkPrice = 2;

if(Number.isInteger(milkPrice)){
  console.log('Cent?? nereikia')
}else {
  console.log('Cent?? reik??s')
}

// task 2 
// 2) Pakoreguok pirm?? pratim??, kad console taip pat ir i??mest?? kain?? - su dviem skai??ias po kablelio (t.y. 3.00 Eur).


if (Number.isInteger(milkPrice)) {
  console.log('Cent?? nereikia')
} else {
  console.log('Cent?? reik??s')
}
console.log(milkPrice.toFixed(2))

// task 3 
// 3) Sukurk program?? degalinei - bus du input laukeliai (kuriame su HTML): viename ??vedame kain?? su trimis skai??ias po kablelio, antrame - degal?? kiek??, su vienu skai??iu po kablelio (HTML naudojame step="0.1" atribut?? pasakyti kiek skai??i?? po kablelio vartotojas gali paduoti). Pavyzd??iui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apa??ioje turi i??mesti kain?? h1 laukelyje (sukuriame su JS), su dviem skai??iais po kablelio (pvz. 7.13 Eur).

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let kaina = Number(document.getElementById('kaina').value);
    let kiekis = Number(document.getElementById('kiekis').value);
  
    let total = kaina * kiekis;
  
    const isviso = document.createElement('h1');
    isviso.textContent = total.toFixed(2);
    document.body.append(isviso);
  });

//   String:
//  1) Sukurk du input'us - vien??, kur vartotojas ??ves savo vard??; 
//kit?? - skai??i??. 
//Pirma, patikrink ar skai??ius sveikas (jei ne - console). Jei sveikas, po apa??ia sukurk h1 element??, kur vardas bus atkartotas tiek kart??, kiek skai??ius nurodo.

document.querySelector('#task2').addEventListener (('submit'), (e) => {
    e.preventDefault();
    const vardas = document.getElementById('vardas').value;
    const skaicius = Number(document.getElementById('skaicius').value);
    if (Number.isInteger(skaicius)) {
      const h1 = document.createElement('h1');
      h1.textContent = vardas.repeat(skaicius);
      document.body.append(h1);
    } else {
      console.log('Number is not an integer'); 
    }
  })

  // 2) Sukurk input, kur vartotojas ??ves savo vard??. ??vedus - console'ink kokio ilgio yra vardas. Ta??iau u??tikrink, kad priekyje ir gale neb??t?? ??skai??iuoti tarpeliai.
  
  {
      document.getElementById('vardas').addEventListener(('keyup'), (e) => {
   e.preventDefault ();
    const vardas = document.getElementById('vardas').value.trim();
    console.log('Vardo raid??i?? yra: ' + vardas.length);
  })
  }


  // 3) Sukurk input, kur vartotojas ??ves savo piln?? vard?? (t.y. vard?? ir pavard??). Padaryk, kad JS prid??t?? du h1 tag'us, viename - vardas, kitame - pavard??.
  
  document.querySelector('#task3').addEventListener(('submit'), (e) => {
    e.preventDefault();
    let pilnasvardas = document.getElementById('pilnasvardas').value.trim().split(' ');
    let vardas = document.createElement('h1');
    vardas.textContent = pilnasvardas[0];
  
    let pavarde = document.createElement('h1');
    pavarde.textContent = pilnasvardas[1];
  
    document.body.append(vardas, pavarde);
  });
  
//  4) Pakoreguok tre??i?? pratim??, kad ??skai??iuot??, jei pavard?? ilgesn?? nei vienas ??odis. Jeigu ??od??i?? daugiau negu du, tuomet antr??j??, tre??i??j?? ir visus likusius i??vesti ?? antr??j?? h1 laukel??.
  
document.querySelector('#task3').addEventListener(('submit'), (e) => {
  e.preventDefault();
  let pilnasvardas = document.getElementById('pilnasvardas').value.trim().split(' ');
  let vardas = document.createElement('h1');
  vardas.textContent = pilnasvardas[0];

  let pavarde = document.createElement('h1');
  pavarde.textContent = pilnasvardas[1].concat(' ', pilnasvardas[2]);

  document.body.append(vardas, pavarde);
});

  



