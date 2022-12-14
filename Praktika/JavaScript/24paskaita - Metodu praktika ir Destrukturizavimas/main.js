//      Uzduotys be ir su iteraciniais metodais
let zodziuMasyvas = ['labas', 'viso', 'gero', 'iki', 'ilgiausiaszodispasaulyje'];
let skaiciuMasyvas = [5,52,458,45896,-54,521,-1,45632,-1,-8,0];
let misrusMasyvas = ['labas','gero',521,-1,false,true,false,'ilgiausiaszodispasaulyje',0,45896];

// 1) parasykite funkcija, kuri i konsole isspausdina pateikto masyvo duomenis(atskirose eilutes)
console.groupCollapsed('----------1--------');
let uzd_1_be = (masyvas) => {
    for(let i= 0; i < masyvas.length; i++){
        console.log(masyvas[i]);
    }
}
console.log(uzd_1_be(misrusMasyvas));
console.log('------------');
let uzd_1_su = (masyvas) => masyvas.forEach(element => console.log(element));
console.log(uzd_1_be(misrusMasyvas));
console.groupEnd();

//2) parasykite funkcija, kuri grazintu masyva, kuriame yra tik skaiciai didesni uz 10, is jai pateikto skaiciu masyvo.
console.groupCollapsed("---- 2 ----")
let uzd_2_be = (masyvas) => {
  let grazinamasMasyvas = [];
  for(let i = 0; i < masyvas.length; i++){
    if(masyvas[i] > 10){
      grazinamasMasyvas.push(masyvas[i]);
    }
    // masyvas[i] > 10 ? grazinamasMasyvas.push(masyvas[i]) : null;
    // masyvas[i] > 10 && grazinamasMasyvas.push(masyvas[i]);
  }
  return grazinamasMasyvas;
}
console.log(uzd_2_be(skaiciuMasyvas));
console.log('---------------');
let uzd_2_su = (masyvas) => masyvas.filter(element => element > 10);
console.log(uzd_2_su(skaiciuMasyvas));
console.groupEnd();

//3) parasykite funkcija, kuri patikrintu jai paduotame string masyve, bent vienas elementas yra ilgesnis nie 5 raidziu zodis ir grazintu true/false.
console.groupCollapsed('----------3--------');
let uzd_3_be = (masyvas) => {
    //let arTiesa = false;
    for(let i =0; i < masyvas.length; i++){
        if(masyvas[i].lenght > 50){
            //arTiesa = true;
            //break;
            return true;
        }
    }
    return false;
    //return arTiesa;
}
console.log(uzd_3_be(zodziuMasyvas));
console.log('------------');
let uzd_3_su = (masyvas) =>  masyvas.some(element => element.length > 50);
console.log(uzd_3_be(zodziuMasyvas));
console.groupEnd();

//4) parasykite funkcija kuri jai paduotame misriame masyve, rastu ir grazintu pirmaji kintamaji, kuris yra skaicius.
console.groupCollapsed('----------4--------');
let uzd_4_be = (masyvas) =>{
    for(let i = 0; i  < masyvas.length; i++){
        if(typeof (masyvas[i]) === 'number'){
            return masyvas[i];
        }
    }
}
console.log(uzd_4_be(misrusMasyvas));
console.log('------------');
let uzd_4_su = (masyvas) => masyvas.find(element => tupeof(element) === 'number');
console.log(uzd_4_be(misrusMasyvas));
console.groupEnd();


//1) Atlikti vakar dienos Neiteracini?? masyv?? metod?? u??duotis. (jeigu dar nebaigtos)
//Neiteracini?? masyv?? metod?? 
//u??duotys:
  //1) Para??ykite funkcij??, kuri i?? jai duotojo masyvo suformuot?? ir gr????int?? string'??.

  let task1neit = (array) =>{
    console.log(array.toString());
  }

  //2) Para??ykite funkcij??, kuri atlikt?? t?? pat??, k?? daro .reverse() metodas. (??inoma nenaudokite reverse)
  let answerArray =[]

  let task2neit1=(array) =>{
    for (let i = array.length - 1; i >= 0; i--){
       answerArray.push(array[i]);
    }return answerArray
}
  //3) Para??ykite funkcij??, kuri i?? jai paduoto masyvo randa ir i??spausdina did??iausi?? ir ma??iausi?? skai??ius. (galima su forEach arba paprastu for)
  let findMaxMin = (array) => {
    let largest = array[0];
    let smalest = array[0];
    for(let i = 0; i < array.length; i++) {
       if(array[i] > largest) {
          largest = array[i];
       }
       else if (array[i] < smalest) {
          smalest = array[i];
       }
    };
    return {
       smalest, largest
    }
   }
  //4) Para??ykite funkcij??, kuri i?? 2 jai paduot?? masyv?? gr????ina(i??veda ?? konsol??) pasikartojan??ias reik??mes. (jeigu yra dvi vienodos reik??m??s abejuose masyvuose, ta reik??m?? turi b??ti i??vesta ?? konsol??.
  let ArrayAnswer= [];
  function arrayMatch(arr1, arr2){
    for(var i=0 ; i<arr1.length ; ++i) {
      for(var j=0 ; j<arr2.length ; ++j) {
        if(arr1[i] == arr2[j]) {    // If element is in both the arrays
          ArrayAnswer.push(arr1[i]); // Push to arr array
        }
      }
    }
     
    return ArrayAnswer;  // Return the arr elements
  }
  //5) Para??ykite funkcij??, kuriai padavus du masyvus (pirmas: informacijos, antras: indeks??), suformuot?? nauj?? masyv?? i?? pirmojo, paimdamas tik tas reik??mes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])
  const arr3 = ['a', 'b', 'c', 'd', 'e', 'f'];
const arr4 = [0, 3, 4];
const newArr = formArray(arr3, arr4);
function formArray(arr3, arr4) {
  let newArr = [];
  for (const val of arr4) {
    newArr.push(arr3[val]);
  }
  return newArr;
}

console.log(newArr);


// antras budas
let raidziuMasyvas = ["a", "b", "c", "d", "e", "f"];

let skaicMasyvas = [0, 3, 4];



let uzd_5_task = (masyvas1, masyvas2) => {

  let naujasMasyvas = [];

  for (let i = 0; i < masyvas2.length; i++) {

    naujasMasyvas.push(masyvas1[masyvas2[i]]);

  }

  return naujasMasyvas;

}
  


//Iteracini?? masyv?? metod?? u??duotys:
  //1) Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvien?? element?? (automobilio reik??m??).

   const cars = ["BMW", "VW", "Audi"];
   let task1 = (cars) => cars.forEach(element => console.log(element));

  //2) Pakoreguok pirm?? pratim??, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

  const cars2 = ["0:BMW", "1:VW", "2:Audi"];
  cars.forEach((value, i) => console.log(i + ": " + value)); // atspausdina sarasa stulpeliu su eiles tvarka


  //3) Sukurk Array su savo draug?? vardais, raid??i?? kapitalizacij?? pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metod??, padaryk, kad susikurt?? naujas array (ir j?? atspausdink), kuriame vardai sura??yti teisinga kapitalizacija (pvz. "peTras" => "Petras").

  const names = ["peTras", "Ausra", "JOnas", "inGa"];
  const newNames = names.map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase());
  console.log(newNames)

  //4) Sukurk Array su savo draug?? am??iais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skai??ius, kurie didesni arba lyg??s 18.

  const ages = [18, 26, 30, 32, 99, 45, 60, 80, 5, 10, 16];
  console.log(ages.filter((x)=> x >= 18));

  //5) Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kok?? pirm?? miest??, kuris prasideda i?? "K" raid??s.

  const cities = ["Kaunas", "Klaipeda", "kedainiai", "VILNIUS", "Elektrenai", "Utena"];
  console.log(cities.find(v => v.charAt(0) === "K"));

  //6) Penktame pratime esant?? sprendim?? pakoreguot ir patikrink su some ar bent vienas miestas prasideda i?? ma??osios.

  console.log(cities.some(v => v.charAt(0) === v.charAt(0).toLowerCase()));

  //7) Pakoreguok ??e??t?? pratim??, kad tikrint?? ne ar bent vienas miestas prasideda i?? ma??osios, bet ar visi i?? did??iosios.

  console.log(cities.every(v => v.charAt(0) === v.charAt(0).toUpperCase()));



  //ForEach, Filter, Reduce ir Map:
  //1) Susikurti bent 10 ilgio masyv?? kaip nurodyta ir tolimesn??se u??duotyse naudoti ??it?? masyv??. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}]

  const meniu = [
    {id:0, name:"Burgeris", inStock:true, primeCost:2, cost:5},
    {id:1, name:"Burgeris_2", inStock:true, primeCost:2, cost:5},
    {id:2, name:"Burgeris_3", inStock:true, primeCost:2, cost:5},
    {id:3, name:"Burgeris_4", inStock:true, primeCost:2, cost:5},
    {id:4, name:"Burgeris_5", inStock:true, primeCost:2, cost:5},
    {id:5, name:"Pzza", inStock:true, primeCost:3, cost:7},
    {id:6, name:"Pizza_2", inStock:true, primeCost:0.3, cost:7},
    {id:7, name:"Pizza_3", inStock:true, primeCost:0.3, cost:7},
    {id:8, name:"Drink", inStock:true, primeCost:0.3, cost:2},
    {id:9, name:"Drink_2", inStock:true, primeCost:0.3, cost:2}
];
  //2) Naudojant forEach - i??vesti masyv?? ?? konsol??.
  //3) Naudojant forEach - i??vesti tik masyvo vardus ir kainas ?? konsol??.

  let extra3 = (meniu) => meniu.forEach(element=>console.log(element.name + ": " + element.cost));
  console.log(extra3(meniu));

  //4) I??filtruoti (for{if{}}) tuos masyvo elementus, kurie yra inStock (inStock yra true) ir i??saugoti prafiltruot?? masyv?? naujame kintamajame ir j?? atvaizduoti konsol??je (nereik iteruoti nieko (tiesiog ??d??ti pat?? masyv?? ?? konsol??)).
    //4.1) Naudojant map ir 4'tos u??duoties masyv?? - sukurti nauj?? masyv??, kuriame b??t?? name ir suskai??iuotas bei i??saugotas profit (cost-primeCost) ir j?? atvaizduoti konsol??je (nereik iteruoti nieko (tiesiog ??d??ti pat?? masyv?? ?? konsol??)).
    //4.2) Susikurti masyv??, kuriame b??t?? i??ra??yti masyvo (1'ojo) vardai ir j?? kiekiai (sukurti u??sakymo masyv??) ir j?? atvaizduoti konsol??je (nereik iteruoti nieko (tiesiog ??d??ti pat?? masyv?? ?? konsol??)). (galima sukurti kelis u??sakymus)
    //4.3) Suskai??iuoti kiek pelno suteiks 4.2 masyvo u??sakymas ir tai atvaizduoti konsol??je (nereik iteruoti nieko (tiesiog ??d??ti pat?? masyv?? ?? konsol??)). (arba u??sakymai, jei 4.2 dalyje suk??r??te kelet?? u??sakym??)
    //4.4) Naudojant map - padaryti nauj?? masyv??, kuriame b??t?? atvaizduotas u??sakymas (kiek koki?? dalyk?? buvo u??sakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai j?? suma) ir pa??iame gale bendra kaina) ir j?? atvaizduoti konsol??je (nereik iteruoti nieko (tiesiog ??d??ti pat?? masyv?? ?? konsol??)).


    // Destrukturizaviimas
    /*
    destrukturizavimas - kazkokio elemento isskirstymas dalimis.

        array dest... syntax
        let [a, b] = masyvas;(priskirimias paeiliui)
        let [a, , b] = masyvas;(elemento praleidimas)
        let [a, , b, ...c] = masyvas; (likusiu elementu priskyrimas)
        let [a = 'default value', , b, ...c] = masyvas; (galima priskirti numatytas reiksmes, kurios bus priskirtos tokiu atveju, kai destrukturizauojame elemente tos reiksmes bus undefined)

        object destr... syntax
        let {a, b} = objektas; (priskyrimas pagal raktinius zodzius)
        let {a, b : kazkas} = objektas; (priskyrimas pagal pervadinta raktini zodi)
        let {a, b : kazkasB, ...likeElementai} = objektas; (priskyrimas neparinktu elementu)
        let {a, b : kazkasB, c = "c default", ...likeElementai} = objektas (nerastu raktiniu zodziu default nustatymas)


    */
   // arr be destr...
   let masyvas = [undefined, 'labas', 54, true, 'zodis', 54, 78];// jei parasom undefinde tai apacioje kur defaul value paraso ji, arba galima parasyi zodi ir bus tas pats
   let a = masyvas[0];// yra labas
   let b = masyvas[1]; // yra 54
   console.log(a,b); // gaunam rezultatat consolei

   // arr su destr
   let [z = 'defaul value', x, ...visiLike] = masyvas; // padaro ta pati ka virsuje esam pasirase//... paima paskutinius duomenys
   console.log(z, x);

   // function
   let destrF = (arg1, arg2, ...args) => {
    console.log(arg1, arg2, args);
   }
   destrF(1,2,3,4,5,6,7,8,9);

   // obj be destr...
   let objektas = {
    vardas: "Ausra",
    amzius: 26,
    gyvenamojiVieta: {
        salis: "Lietuva",
        miestas: "Vilnius"

    },
    batai:"zieminiai"
    //pavarde: "Ziogaite" // gali priskirti pavarde apacioje kaip esam pasirase
   }
   //let vardas = objektas.vardas;
   //let amzius = objektas.amzius;
   //console.log(vardas, amzius);

   let { amzius, vardas: pilnasVardas, pavarde = 'Pavardene',  ...kitkas } = objektas;
   console.log(pilnasVardas, amzius, pavarde, kitkas);



   //Destrukt??rizavimas:
  //1) Naudodami destructuring priskirkite 2 kintamiesiems 2 reik??mes.

  let destrMasyvas = ['puodelis', 23, 'kremas', 'veidrodis', true, 56];

  let [pirmas, antras] = destrMasyvas;
  console.log(pirmas, antras)

  //2) Naudodami destructuring priskirkite 10 kintam??j?? 10 reik??mi??.

  let [vie, du, trys, ket, penk, sesi, sept, ast, dev, des] = destrMasyvas;
  console.log(vie, du, trys, ket, penk, sesi, sept, ast, dev, des);

  //3) Naudodami destructuring priskirkite 3 kintamiesiems 5 reik??mes.

  let destrMasyvas2 = [true, 56, 'nu', 'daug', 'lempa'];

  let [vien, du1, ...trys1] = destrMasyvas2;
  console.log(vien, du1, trys1);

  //4) Naudodami destructuring priskirkite 1 kintamajam visas reik??mes i??skyrus pirmas 3.

  let[ , , , ...labas] = destrMasyvas2;
  console.log(labas);

  //5) Naudodami destructuring priskirkite 3 kintamiesiems 3 reik??mes paimtas i?? objekto.

  let object = {
    vardas1: 'jadze',
    amzius1: 53,
    vieta1: 'kaimas'
  }

  let {vardas1, amzius1, vieta1} = object;
  console.log(vardas1, amzius1, vieta1);

  //6) Naudodami destructuring sukeiskite 2 kintam??j?? reik??mes.

  let first = "First";
  let second = "Second";
  [first, second] = [second, first];
  
  console.log("first:", first);
  console.log("second:", second);
