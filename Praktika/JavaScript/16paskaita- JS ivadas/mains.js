/* console.log("Labas rytas JS'e"); */

//  Kintamieji
/*
 string        - zodinis kintamasis rasomas kabutese ``/ "" / ''
 number        - skaitinis kintamasis
 boolean/bool  - loginis kintamasis (true/false)


 null          - tuscias
 undefined     - neaoibreztas
 NaN           - Not a Number


 array         - masyvas
 object        - objektas

 --------------------------------------------------------------

 var/let/const - kitamuju rybu nurodymai
 nameOrSmth    - kitamojo vardas
 value         - kintamojo reiksme

*/

let manoVardas0 = "Ausra";
let manoVardas1 = 'Ausra';
let manoVardas2 = `Ausra`;


let manoAmzius0 = 26;
let manoAmzius1 = 26.2;
let manoAmzius2 = 26+0.2;

let vedesIrTuriVaiku = false;
let neVedesIrNeturiVaiku = true;

/* uzduotis */

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


//--------------------------------------------------

// Operatoriai
/*

          Operatoriai

 +    - sudetis
 -    - atimtis 
 *    - daugyba
 /    - dalyba
 **   - kelimas laipsniu (saknies traukimas)
 %    - liekanos radimas

         Assignment

  =   - lygybe
  
  
          Shortcuts

 ++   - didejimas (kazkas = kazkas +1)
 --   - mazejimas (kazkas = kazkas -1) 
 +=   - didinimas (kazkas = kazkas + kazkiek)  
 -=   - atemimas (kazkas = kazkas - kazkiek)  
 *=   - dauginimas (kazkas = kazkas * kazkiek) 
 /=   - dalinimas (kazkas = kazkas / kazkiek)   
 %=   - liekanos radimas (kazkas = kazkas % kazkiek)
 **=  - laipsnio kelimas / saknies traukimas (kazkas = kazkas ** kazkiek)

          Comparison

 ==  - ar lygu duomenys
 === - ar lygu duomenys ir tipas
 >   - daugiau negu
 <   - maziau negu
 >=  - daugiau arba lygu negu
 <=  - maziau arba lygu negu


          Logical
          
 !  - ne(apvercia reiksme) (NOT)
 && - ir                  (AND) 
 || - arbaa                (OR)

          Type

 typeof     - tikrina tipa

*/

//--------------------------------------pirmos uzduoties tesinys-----------------
{
console.log('number1+number2', number1+number2);
console.log('number1-number2', number1-number2);
console.log('number1*number2', number1*number2);
console.log('number1/number2', number1/number2);
console.log('number1**number2', number1**number2);
console.log('number1%number2', number1%number2);
console.log('number1++', ++number1);
console.log('number2--', --number2);


console.log('string1+string2', string1+string2); // tik sitas viable
console.log('string1-string2', string1-string2);
console.log('string1*string2', string1*string2);
console.log('string1/string2', string1/string2);
console.log('string1**string2', string1**string2);
console.log('string1%nstring2', string1%string2);
console.log('string1++', ++string1);
console.log('string2--', --string2);

// naudojant matematinius operatorius su boolean tipo kintamaisiaias, boolean tipo kintamieji yra verciami i 0 ir 1. false->0; true->1
console.log('bool1+bool2', bool1+bool2);
console.log('bool1-bool2', bool1-bool2);
console.log('bool1*bool2', bool1*bool2);
console.log('bool1/bool2', bool1/bool2);
console.log('bool1**bool2', bool1**bool2);
console.log('bool1%bool2', bool1%bool2); //tik sitas negalimas (1 % 0)
console.log('bool1++', ++bool1);
console.log('bool2--', --bool2);


console.log('number1+string3', number1+string3); // tik sitas galimas
console.log('number1-string3', number1-string3);
console.log('number1*string3', number1*string3);
console.log('number1/string3', number1/string3);
console.log('number1**string3', number1**string3);
console.log('number1%string3', number1%string3);


console.log('string2+number2', string2+number2);  // tik sitas galimas
console.log('string2-number2', string2-number2);
console.log('string2*number2', string2*number2);
console.log('string2/number2', string2/number2);
console.log('string2**number2', string2**number2);
console.log('string2%number2', string2%number2);

console.log('number3+bool1',number3+bool1);
console.log('string4+bool1',string4+bool1);
}

//-----------------------------------------antra uzduotis-------------
{
    console.log('++number4',++number4);
    console.log('--number3',--number3);
    console.log('number3+=number1',number3+=number1);
    console.log('number4-=number3',number4-=number3);
    console.log('number4*=number1',number4*=number1)
    console.log('number2/=number3',number2/=number3)
    console.log('number1%=number3',number1%=number3)
    console.log('number4**=number5',number4**=number5)
    
}
//--------------------------------------------uzduotis4-------------
{
    
    console.log('number3==number1',number3==number1);
    console.log('number4===number3',number4===number3);
    console.log('number4<number1',number4<number1)
    console.log('number2>number3',number2>number3)
    console.log('number1>=number3',number1>=number3)
    console.log('number4<=number5',number4<=number5) 
}

//               Salygos
/*
        If Else

if   - pradine salyga

else if - papildoma salyga, kuri tikrinama tik jeigu auksciau esanti salyga grazino false
else if ...
else    - vykdoma jeigus visos auksciau salygos  grazinos false

        Nesting
 Salygos viduje, rasoma kita salyga.
 
 

*/
let amzius = 150;
if(amzius >=18){
    console.log('Esi pilnametis');
    if(amzius > 90 && amzius < 130){
      console.log('Esi pensininkas.');  
    } else if(amzius < 90){
    console.log('Esi darbingo amziauas pilietis.') 
    } else {
    console.log('Kaip tu dar gyvs?')
    }
}
else if(amzius < 7) {
    console.log('Esi iki mokyklinop amziaus');
} else {
    console.log('Esi mokyklinukas')
}

//-----------------------------5-6-7 uzduotis-----------------
{
let arTuriVairuotojoTeises = true;
let arTuriAutomobili = false;
let arEsiBlaivas = false;
if(arTuriVairuotojoTeises === true){
    console.log('Vairuotojo teises turi.');
    if(arTuriAutomobili === true && arEsiBlaivas === true){
      console.log('Gali sesti ir vaziuoti');
    } else if(arTuriAutomobili === false){
      console.log('Neturi auto - neturi ko vairuoti');
    } else {
      console.log('Nesi blaivas - nera ko vairuoti ');
    }
} else {
     console.log('Vairuotoj teisiu neturi');
}
}

//              AND ir OR 
/*
  Naudojant && tikrinama ar abejose pusese yra tiesa. Jeigu bent vienoje puseje yra melas - grazina mela. Jeigu kaireje puseje melas - desines net netikrina/nevykdo.
  Naudojant || tikrinama ar bent vienoje puseje yra tiesa. Jiegu bent vienoje puseje yra tiesa  - grazina tiesa. Jiegu kaireje puseje yra tiesa - desines pusees net netikrina/nevykdo.
*/

if(5== '5' && typeof('5') == typeof(5)){
    console.log('lygu');
} else{
    console.log('nelygu')
}
if(true || true){
  console.log('tiesa');
} else {
    console.log('melas');
}

//          Truthy ir Falsy
/*
trutht  - true  |not 0 number |'string'          |array/masyvas|objektas| funkcija
falsy   - false |0            |'' (empty string) |undefined    |null    | NaN  
*/

if("haha"){
    console.log("truthy");
} else {
    console.log("falsy");
}

//          Switch 
//let megstamiausiaSpalva = prompt("Įveskite mėgstamiausią spalvą.");
let megstamiausiaSpalva = "geltona";
switch(megstamiausiaSpalva ){
    case 'geltonas':
    case 'raudona':
      console.log("Tu megsti ryskia spalva.");
      break;
    case 'melyna':
    case 'ruda':
       console.log("Tu megsti tamsias spalvas.");
       break;        
}

let miestas = prompt("Iš kurio miesto esate?");;
switch(miestas){
    case "Kaunas":
      console.log("Kaunas yra Lietuvos sirdis, jei Vilnieciai nesupyks");
      break;
    case "Vilnius":
        console.log("Vilnius yra Lietuvos sostone, shshh Kaunieciai su savo laikinaja.");
      break;
    case "Klaipeda":
        console.log("Miestas su geriausiu uostu.");
      break; 
      default:
        //window.alert("Nera tokio miesto"); 
        console.log("Nėr tokio miesto!");  
}


//--------------------------NAMU DARBAI-----------------------


