//                       Kintamieji
/*
Objektas - Object {raktas:reiksme, raktas1:reiksme1...}
Masyvas  - Array  [reiksme, reiksme, reiksme ,,,,]

Tiek objektas, tiek masyvas yra konteineriniai kintamieji. Tai reiskia, kad ju viduje galima talpinti keleta reiksmiu(gali buti skirtingu kintamuju tipi)
*/
//                      Objektai                   
{
    console.groupCollapsed('Objektai')
let vardas = "Ausra";
let pavarde ="Ziogaite";
let amzius = 26;
let vedes = false;
console.log(vardas);
console.log(pavarde);
console.log(amzius);
console.log(vedes);


let vardas1 = "Petras";
let pavarde1 = "Petrauskas";
let amzius1 = 55;
let vedes1 = true
console.log(vardas1);
console.log(pavarde1);
console.log(amzius1);
console.log(vedes1);

let zmogus = {
 vardas: "Ausra",
 pavarde: "Ziogaite",
 amzius: 26,
 vedes: false,
 gyvenamojiVieta:{
    miestas: "Vilnius",
    salis: "Lietuva",
    zemynas: "Europa",
    planeta: "Zeme"
 }
};
console.log(zmogus.vardas);
console.log(zmogus.pavarde);
console.log(zmogus.amzius);
console.log(zmogus.vedes);
console.log(zmogus.gyvenamojiVieta.miestas);


let zmogus1 = {
    vardas:"Petras",
    pavarde: "Petrauskas",
    amzius: 55,
    vedes: true
}
console.log(zmogus1);
zmogus1.vardas = "Jonas";
zmogus1.ugis = 190;
console.log(zmogus1.vardas);
console.groupEnd
}

//              Masyvai
{
    console.groupCollapsed('Masyvai')
let menesis1 = "Sausis";
let menesis2 = "Vasaris";
let menesis3 = "Kovas";
let menesis4 = "Balandis";
let menesis5 = "Geguze";
//......
 /*let menesiai = {
    "Sausis",
    "Vasaris",
    "Kovas"
    taip nenaudoti
    */
 let menesiai = ["Sausis", "Vasaris", "Kovas", "Balandis", "Geguze", "Birzelis", "Liepa", "Rugpjutis", "Rugsejis", "Spalis", "Lapkritis", "Gruodis"]
 console.log(menesiai[10]);
 let masyvas = [654, 12, 555.555,[1,2,3,4, "5", false], false, true, "zodziai", "haha"];
 console.log(masyvas);
 masyvas[1] = 'pakeistas';
 masyvas.push("push?"); //pish - prie masyvo galo prideda nauja reiksme
 masyvas.unshift("unshift?"); //unshift - prie masyvo pradzios prideda nauja reiksme
 console.log(masyvas);
 var masyvoMetoduBandymai = masyvas.pop(); // pop - isima duomeni is masyvo galo
 masyvoMetoduBandymai = masyvas.shift(); // shift - isisma pirma masyvo elementa
 masyvoMetoduBandymai = masyvas.length; //  length - masyvo ilgis (number)
 console.log(masyvas);
 console.log(masyvas[0]);
 console.log(masyvas[masyvas.length -1]);
 console.log(masyvas);
 console.groupEnd
}
//              Masyvai ir Objektai
{
    console.groupCollapsed('Masyvai ir Objektai')
  let mixed1 = {
    vardas: "Ausra",
    amzius: 26,
    vedusi: false,
    gyvenamojiVieta: {
        miestas: "Vilnius",
        salis: "Lietuva",
        zemynas: "Europa"
    },
    pomegiai: ["Sportas", "??aidimai", "Technologijos", "Gitara"]
    //                0       1         2               3            
  }
  console.log(mixed1.vardas + " turi " + mixed1.pomegiai.length + " pom??gius.");
  console.log("Vienas i?? " + mixed1.vardas + " pom??gi?? yra " + mixed1.pomegiai[Math.floor(Math.random()*mixed1.pomegiai.length)] + ".");

  let mixed2 = [
    {
      vardas: "Ausra",
      amzius: 26
    },
    {
      vardas: "Petras",
      amzius: 50
    },
    {
      vardas: "Kazimieras",
      amzius: 5
    }
  ];
  console.log(mixed2);
  console.groupEnd
}

//              UZDUOTYS
//                1

let string1 = "Ausra";
let string2 = "Petras";
let string3 = "Jonas";
let string4 = "Kipras";
let string5 = "Juozas";

let number1 = 26;
let number2 = 50.2;
let number3 = 28;
let number4 = 16;
let number5 = -96;

let bool1 = true;
let bool2 = false;
let bool3 = true;

//              2.1
//           Masyvas
  
 let pauksciai = ["Gegute", "Balandis", "Zvirblis", "Gandras", "Zyle", "Varna"]
 console.log(pauksciai[2]);

//           2.2 Objektas
 
let zmogus2 = {
    vardas: "Ausra",
    pavarde: "Ziogaite",
    amzius: 26,
    vedusi: false,
    gyvenamojiVieta:{
       miestas: "Vilnius",
       salis: "Lietuva",
    }
}
//  2.3) Masyvas bent 4 ilgio, kurio viduje b??t?? kitas masyvas bent 4 ilgio.

let belekas = ["Knygos", "Zurnalai", "Paveikslai",["Pauksciai", "Ropliai", "Zinduoliai","Varliagyviai"],"Filmai"];

// 2.4) Masyvas bent 4 ilgio, kurio viduje b??t?? objektas bent 4 ilgio.

let mixed3 = ["Labas", "Viso gero", "Iki", "Adios",
    {
      vardas: "Ausra",
      amzius: 26
    },
    {
      vardas: "Petras",
      amzius: 50
    },
    {
      vardas: "Kazimieras",
      amzius: 5
    },
    {
        vardas: "Jonas",
        amzius: 99
    }
  ];
  console.log(mixed3);

  // 2.5) Objektas bent 4 ilgio, kurio viduje b??t?? masyvas bent 4 ilgio.
  let mixed4 = {
    vardas: "Ausra",
    amzius: 26,
    vedusi: false,
    gyvenamojiVieta: {
        miestas: "Vilnius",
    },
    pomegiai: ["Sportas", "??aidimai", "Technologijos", "Knygos"] 
}
  //  2.6) Objektas bent 4 ilgio, kurio viduje b??t?? objektas bent 4 ilgio.
  let zmogus3 = {
    vardas: "Ausra",
    pavarde: "Ziogaite",
    amzius: 26,
    vedusi: false,
    gyvenamojiVieta:{
       miestas: "Vilnius",
       salis: "Lietuva",
       rajonas: "Lazdynai",
       gatve: "Lazdynu"
    }
}
//3) ?? konsol?? i??vesti:
//3.1) Bent po 2 reik??mes i?? 2.1 ir 2.2 konteineri??.

let zmogus4 = {
   vardas: "Ausra",
   pavarde: "Ziogaite",
   amzius: 26,
   vedusi: false,
   gyvenamojiVieta:{
      miestas: "Vilnius",
      salis: "Lietuva",
   },
   pomegiai: ["Sportas", "??aidimai", "Technologijos", "Knygos"] 
}
console.log(zmogus4.vardas + " turi " + zmogus4.pomegiai.length + "pomegius ");
console.log("Vienas is " + zmogus4.vardas + " pomegiu yra " + zmogus4.pomegiai[Math.floor(Math.random()*zmogus4.pomegiai.length)] + ".");

let zmogus5 = {
    vardas: "Ausra",
    pavarde: "Ziogaite",
    amzius: 26,
    vedusi: false,
    gyvenamojiVieta:{
       miestas: "Vilnius",
       salis: "Lietuva",
    },
    gyvunai: ["Kate", "Sou", "Zuvytes", "Papuga"] 
 }
 console.log(zmogus5.vardas + " turi " + zmogus5.gyvunai.length + "gyvunai ");
 console.log("Vienas is " + zmogus5.vardas + " gyvunu yra " + zmogus5.gyvunai[Math.floor(Math.random()*zmogus5.gyvunai.length)] + ".");
 

//3.2) Bent po 3 reik??mes i?? 2.3-2.6 konteineri?? su bent 1 reik??me esan??ia konteinerio konteineryje.


let zmogus6 = {
    vardas: "Ausra",
    pavarde: "Ziogaite",
    amzius: 26,
    vedusi: false,
    gyvenamojiVieta:{
       miestas: "Vilnius",
       salis: "Lietuva",
    },
    pomegiai: ["Sportas", "??aidimai", "Technologijos", "Knygos"] 
 }
 console.log(zmogus6.vardas + " turi " + zmogus6.pomegiai.length + "pomegius ");
 console.log("Vienas is " + zmogus6.vardas + " pomegiu yra " + zmogus6.pomegiai[Math.floor(Math.random()*zmogus6.pomegiai.length)] + ".");
 
  let mixed5 = [
    {
      vardas: "Ausra",
      amzius: 26
    },
    {
      vardas: "Paulina",
      amzius: 50
    },
    {
      vardas: "Rasa",
      amzius: 53
    }
  ];
  console.log(mixed5);

  let zmogus7 = {
    vardas: "Ausra",
    pavarde: "Ziogaite",
    amzius: 26,
    vedusi: false,
    gyvenamojiVieta:{
       miestas: "Vilnius",
       salis: "Lietuva",
    },
    kanalai: ["LNK", "TV3", "LRT", "TV6"] 
 }
 console.log(zmogus7.vardas + " turi " + zmogus7.kanalai.length + "kanalai ");
 console.log("Vienas is " + zmogus7.vardas + " kanalu yra " + zmogus7.kanalai[Math.floor(Math.random()*zmogus7.kanalai.length)] + ".");

 let mixed6 = [
    {
      vardas: "Jonelis",
      amzius: 70
    },
    {
      vardas: "Petrelis",
      amzius: 99
    },
    {
      vardas: "JAnyte",
      amzius: 123
    }
  ];
  console.log(mixed6);

  let zmogus8= {
    vardas: "Ausra",
    pavarde: "Ziogaite",
    amzius: 26,
    vedusi: false,
    gyvenamojiVieta:{
       miestas: "Vilnius",
       salis: "Lietuva",
    },
    knygos: ["Saules pievos", "Labas rytas", "Teleskopa", "Vakaro pasakos"] 
 }
 console.log(zmogus8.vardas + " turi " + zmogus8.knygos.length + " knygas ");
 console.log("Vienas is " + zmogus8.vardas + " knygu yra " + zmogus8.knygos[Math.floor(Math.random()*zmogus8.knygos.length)] + ".");
 
  let mixed9 = [
    {
      vardas: "Pijus",
      amzius: 5
    },
    {
      vardas: "Paulina",
      amzius: 50
    },
    {
      vardas: "Rasa",
      amzius: 40
    }
  ];
  console.log(mixed9);

   // Palyginti ir ?? konsol?? i??vesti kokias nors:
  //4.1) 2.1 konteinerio reik??mes.
  //4.2) 2.2 konteinerio reik??mes.
  //4.3) 2.3-2.6 konteineri?? reik??mes su j?? viduje esan??i?? konteineri?? reik??m??mis.
  //4.4) 2.3-2.6 konteineri?? reik??mes su kit?? konteineri?? reik??m??mis (3kartus skirtingas reik??mes).


  //                        Salygos
  /*
  If Else
  Switch
  Ternary (max trumpintas if else)
     salyga ? jeiguTiesa : jeifuMelas - if else
  OR / AND - galimas if salygu trumpinimas
  */    
  //                Ternary
  {
    console.groupCollapsed('Ternary')
  if(10 > 5){
    console.log("tiesa");
  } else {
    console.log("melas")
  }
  10 > 5 ? console.log("tiesa") : console.log("melas");

  //let number = prompt("Iveskite skaicius");
  let number = 10
  if(number > 20){
    console.log("20 -> infinity");
  } else if(number <=0){
    console.log("-infinity -> 0");
  } else {
    console.log("0 -> 20");
  }

  number > 20 ? console.log("20 -> infinity") :
  number <= 0 ? console.log("-infinity -> 0") : console.log("0 -> 20");
  console.groupEnd
 }


 ///                    5 uzduotis

 /*Para??yti if'??, kuris tikrint?? kokia tavo lytis (tikrinimas turi vykti i?? object kintamojo (object kintamasis turi tur??ti bent 4 kintamuosiuos savo viduje)).
  Naudoti:
    1) let/const - kurti kintamuosius (objekt??/us)
    optional) prompt - vartotojas priskirt?? objektui reik??mes
    2) alert/console.log - gr????int?? atsakymus.
    3) if/elseIf/else - kas be ko... (arrrrrrrrrba ternary)*/

    let apieMane = {
        manoVardas: "Ausra",
        manoPavarde: "Ziogaite",
        manoAmzius: "26",
        manoLytis: prompt("Kokia tavo lytis - moteris ar vyras?")
    };
    if (apieMane.manoLytis == "moteris"){
        console.log("Tu esi moteris");
    } else if (apieMane.manoLytis == "vyras"){
        console.log("Tu esi vyras");
    }


//              Ciklai
/*
  for
  while

  do while
  for in
  for of
  Ciklai - yra kartojami nurodyti veiksmai, tol kol yra tenkinama pateikta s??lyga.
*/

//              for
/*
  for(iteratorius, salyga(suIteratoriumi), iteratoriausKitimas){
    // veiksmai
  }
  for naudojamas tuomet, kada gali apskai??iuoti/??inai kiek syki?? kartosis ciklas.
*/
{
    console.groupCollapsed("For");
    // console.log(1);
    // console.log(2);
    // console.log(3);
    // console.log(4);
    // console.log(5);
    // console.log(6);
    // console.log(7);
    // console.log(8);
    // console.log(9);
    // console.log(10);
    for(let i = 1; i <= 10; i++){
      console.log(i);
    }
    
    let masyvas = [9,5,4,6,1,2,1,2,3,4,5,6,7,8,9];
    console.log(masyvas);
    for(let i = 0; i < masyvas.length; i++){
      console.log(masyvas[i]);
    }
    console.log(masyvas);
    console.groupEnd();
  }
  
  //              while
  /*
    while(salyga){
      // veiksmai
    }
    while ciklas naudojamas tuomet, kai negali apskai??iuoti/??inoti kiek kart?? reik??s vykdyti cikl??.
  */
  { 
    console.group("While");
    let masyvas = [9,5,4,6,1,2,1,2,3,4,5,6,7,8,9];
    console.log(masyvas);
    while(masyvas.length){
      console.log(masyvas.shift());
    }
    console.log(masyvas);
  
    let i = 1;
    while(i <= 10){
      console.log(i);
      i++;
    }
  
    console.groupEnd();
  }

  // 6 uzduotis Para??yti cikl??, kuris sukurt?? 50 random skai??i?? (nuo 0 iki 100) masyv??.
let skaiciuMasyvas = [];
for(let i = 0; i < 50; i++){
  skaiciuMasyvas.push(Math.floor(Math.random()*101));
}
console.log(skaiciuMasyvas);

//7) Para??yti cikl??, kuris i??spausdint?? kas tre??i?? masyvo element??.
for(let i = 0; i < skaiciuMasyvas.length; i+=3){
  console.log(skaiciuMasyvas[i]);
}

//8) Para??yti cikl??, kuris i??spausdint?? kas antr?? masyvo element?? nuo galo.
for(let i = skaiciuMasyvas.length - 1; i >= 0; i-=2){
  console.log(skaiciuMasyvas[i]);
}
//9) Para??yti cikl??, kuris i?? masyvo i??spausdint?? tik elementus, kuri?? reik??m?? didesn?? negu 54.
//10) Para??yti cikl??, kuris i?? masyvo i??spausdint?? tik lyginius/nelyginius skai??ius. (2ciklai)