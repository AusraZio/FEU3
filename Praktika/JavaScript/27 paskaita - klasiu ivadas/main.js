//      KLASES  
/*
klase yra objektu kurimo sablonas.
klase turi buti aprasyta, prie kreipiantis i ja .
klasiu pavadinimai rasomi is didziuju raidziu.
klases konstruktoriuje "this" yra privalomas.
*/

/*syntax
 class KlasesPav{
     constructor(par1, par2){
        this.par1 = par1;
        this.par2 = par2;
     }
     methods...
  }

*/

// kuriame objektu masyva be  klasiu

let asmenysBeKlasiu = [
    {
        vardas: '"Ausra',
        amzius: 26,
        turiVaiku: false
    },{
        vardas: "Petras",
        amzius: 50,
        turiVaiku: true
    }
];

// kuriame objektu masyyva su klasemis
//tarp skliausteliu kokius irasom zodzius ar raides taipt turi buti ir veliau, a=vardas ir taip toliau arba vardas=vardas
class Asmuo{
    constructor(a, b, c){
        this.vardas = a.split(' ')[0];
        this.pavarde = a.split(' ')[1];
        this.amzius = b;
        this.turiVaiku = c;
    }
    pasiveikinaSu(vardas){
        return this.vardas + ' pasisveikina su ' + vardas;
    }
}

let asmenysSuKlasemis = [
    new Asmuo("Ausra Ziogaite", 26, false),
    new Asmuo("Petras Petrauskas", 50, true)
];

console.log(asmenysSuKlasemis);
console.log(asmenysSuKlasemis[0].pasiveikinaSu('Jonas'));



class Ledai{
    constructor(pavadinimas, skonis, kaina){
        this.skonis = skonis;
        this.pavadinimas = pavadinimas;
        this.kaina = kaina;
    }
    kainosKeitimas(keitimasProcentais){// neigiamas % - kaina mazinama
      return this.kaina + this.kaina * keitimasProcentais/100;
      //        0.60    +     0.60   *      -37          /100
    }
}

const leduMasyvas = [
    new Ledai("Dadu","karamelinis", 1.2  ),
    new Ledai("Tirpuko", "avietinis", 0.49 ),
    new Ledai("Nykstukas", "vanilinis", 1.5 )
];

console.log(leduMasyvas)

console.groupCollapsed('Ledu pavadinimai');//graziai sudeda i stulpelius pagal pavadinimus
leduMasyvas.forEach(ledas => console.log(ledas.pavadinimas));
console.groupEnd();

console.groupCollapsed('Ledu skoniai');
leduMasyvas.forEach(ledas => console.log(ledas.skonis));
console.groupEnd();

console.groupCollapsed('Ledu kainos ');
leduMasyvas.forEach(ledas => console.log(ledas.kaina.toFixed(2)));// padaro kaina po kablelio su keliais simboliais
console.groupEnd();

console.groupCollapsed('Ledu kainos su  37% nuolaida');
leduMasyvas.forEach(ledas => console.log(ledas.kainosKeitimas(-37).toFixed(2)));// padaro kaina su nuolada nuo procentu, metodas parasytas virsuje
console.groupEnd();






console.groupCollapsed(' 1')

//1) Sukurkite klasę vardu "Car" ir duokite jai "name" ir "year" parametrus. +
//1.1) Sukurkite papildomą parametrą "helloCar" ir priskirkite jam tekstą, pristatantį mašiną. (gali būti betkas, tarkim "Labas, čia mano mašina Volvo ir ji buvo pagaminta 1990 metais"). +
 //1.2) Skukurkite metodą "age", kuris apskaičiuotų ir grąžintų tekstą, pasakantį kiek mašinai metų. (dabartinę datą gauti galima su 'date = new Date()' ir paversti tik į metus su 'date.getFullYear()'). +
  
 class Car {
  constructor(name, year){
    this.name = name;
    this.year = year;
    this.helloCar = `Labas, cia mano  ' + ${this.name} masina ji buvo pagaminta ${this.year} metais.`;
  }
//metodas
  age() {
    let dabartineData = new Date();
    dabartineData = dabartineData.getFullYear();
    return dabartineData - this.year;
  }
}
let masinos = [
  new Car('VW', 2017),
  new Car('Toyota', 2006),
];
masinos.forEach(masina => console.log(masina.age()));

console.groupEnd();


//        TASK 2

console.groupCollapsed(' 2')
// 2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" parametrus. +
//   2.1) Sukurkite papildomą parametrą "color" ir priskirkite jam randomly parinktą spalvą. +
//   2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą. +
//   2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą. +

class Rectangle {
  constructor(width, height){
    this.width = width;
    this.height = height;
    this.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
  }
  area (){
    let staciakampioPlotas = this.width* this.height;
    return staciakampioPlotas;
  }
  perimeter (){
    let staciakampioPerimetras =  this.width*2 + this.height*2;
    return staciakampioPerimetras;
  }
}
let staciakampiai =[
  new Rectangle(5,10),
  new Rectangle(2,8),
  new Rectangle(3,8)
];

// pasitikrinam ar veikia area ir perimeter
staciakampiai.forEach(staciakampis => console.log(staciakampis.area()));

staciakampiai.forEach(staciakampis => console.log(staciakampis.perimeter()));

console.groupEnd();


//          TASK 3

console.groupCollapsed(' 3');

// 3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" parametrus. +
//   3.1) Sukurkite metodą "coordinates", kuris grąžina "x" ir "y" reikšmes.(x;y) +
//   3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą). +

class Point {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  coordinates(){
    return `(${this.x}, ${this.y})`;
  }
  distance(taskas){
    return `Atstumas tarp  dvieju tasku yra: ${Math.hypot(this.x-taskas.x,this.y-taskas.y)}`;
    //this.x-taskas.x pirma pakeliami kvadratu abu skaiciai, viena is kito atima, tada sudeda su this.y-taskas.y ir is ju sumos traukia sakni 
  }
}
let taskas1 = new Point (3,12);
let taskas2 = new Point (5,9);
let taskas3 = new Point (2,8);
let taskas4 = new Point (23,2);
let taskas5 = new Point (1,21);
console.log(taskas1.distance(taskas2));
console.log(taskas3.distance(taskas5));
// ima taskas3 ir taskas5 ir skaiciuoja atstuma tarp ju su math.hypot (186 eilute)

console.groupEnd();


//          TASK 4

console.groupCollapsed(' 4');

//  4) Sukurkite klasę vardu "Rectangle_3D" ir duokite jai "width", "height" ir "depth" parametrus. +
  // 4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.+
  // 4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio paviršiaus plotą.+
  // 4.3) Sukurkite metodą "perimeter", kuris grąžina 3D stačiakampio perimetrą.

  class Rectangle_3D{
    constructor(width, height, depth){
      this.width = width;
      this.height = height;
      this.depth = depth;
    }
    volume(){
      let turis = this.width*this.height*this.depth;
      return turis;
    }
    surfaceArea(){
      let pavirsiausPlotas = 2*((this.width*this.height)+(this.width*this.depth)+(this.height*this.depth));
      return pavirsiausPlotas;
      //S=2(ab+ac+bc)
    }
    perimeter(){
      let perimetras = 4*(this.width+this.height+this.depth);
      return perimetras;
      //Perimeter of a Square, (P) = 4 × Side units.
    }
  }
    let kvadratas = new Rectangle_3D(2,2,4);

  // pasitikrinam
    console.log(kvadratas.volume());
    console.log(kvadratas.surfaceArea());
    console.log(kvadratas.perimeter());

console.groupEnd();



