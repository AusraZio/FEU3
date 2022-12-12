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
//   1) Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją console() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).


const milkPrice = 2;

if(Number.isInteger(milkPrice)){
  console.log('Centų nereikia')
}else {
  console.log('Centų reikės')
}

// task 2 
// 2) Pakoreguok pirmą pratimą, kad console taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).


if (Number.isInteger(milkPrice)) {
  console.log('Centų nereikia')
} else {
  console.log('Centų reikės')
}
console.log(milkPrice.toFixed(2))

// task 3 
// 3) Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trimis skaičias po kablelio, antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).

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
//  1) Sukurk du input'us - vieną, kur vartotojas įves savo vardą; 
//kitą - skaičių. 
//Pirma, patikrink ar skaičius sveikas (jei ne - console). Jei sveikas, po apačia sukurk h1 elementą, kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.

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

  // 2) Sukurk input, kur vartotojas įves savo vardą. Įvedus - console'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.
  
  {
      document.getElementById('vardas').addEventListener(('keyup'), (e) => {
   e.preventDefault ();
    const vardas = document.getElementById('vardas').value.trim();
    console.log('Vardo raidžių yra: ' + vardas.length);
  })
  }


  // 3) Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.
  
  document.querySelector('#task3').addEventListener(('submit'), (e) => {
    e.preventDefault();
    let pilnasvardas = document.getElementById('pilnasvardas').value.trim().split(' ');
    let vardas = document.createElement('h1');
    vardas.textContent = pilnasvardas[0];
  
    let pavarde = document.createElement('h1');
    pavarde.textContent = pilnasvardas[1];
  
    document.body.append(vardas, pavarde);
  });
  
//  4) Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis. Jeigu žodžių daugiau negu du, tuomet antrąjį, trečiąjį ir visus likusius išvesti į antrąjį h1 laukelį.
  
document.querySelector('#task3').addEventListener(('submit'), (e) => {
  e.preventDefault();
  let pilnasvardas = document.getElementById('pilnasvardas').value.trim().split(' ');
  let vardas = document.createElement('h1');
  vardas.textContent = pilnasvardas[0];

  let pavarde = document.createElement('h1');
  pavarde.textContent = pilnasvardas[1].concat(' ', pilnasvardas[2]);

  document.body.append(vardas, pavarde);
});

  



