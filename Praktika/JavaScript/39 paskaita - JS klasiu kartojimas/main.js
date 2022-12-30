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
  
  