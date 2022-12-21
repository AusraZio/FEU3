/* Youtube kanalai
  Mosh - https://www.youtube.com/@programmingwithmosh (gera info)
  TraversyMedia - https://www.youtube.com/@TraversyMedia (gera info)
  Net Ninja - https://www.youtube.com/@NetNinja (geri tutorials)
  WebDev - https://www.youtube.com/@WebDevSimplified (ne tik JS)
  FreeCodeCamp - https://www.youtube.com/@freecodecamp (apie labai daug ką)
  DaveGray - https://www.youtube.com/@DaveGrayTeachesCode ()
  DevDreamer - https://www.youtube.com/@DevDreamer ( trumpi video - nesunku dėmesį išlaikyti)
  CodingTrain - https://www.youtube.com/@TheCodingTrain (sekamos naujienos ir labai faini projektai, minusas - not beginners friendly)
  FireShip - https://www.youtube.com/@Fireship (fun stuff :) )
  CodeBullet - https://www.youtube.com/@CodeBullet (purely for fun)
  KevinPowell - https://www.youtube.com/@KevinPowell (HTML/CSS)
*/


// OOP Principai

/*
Inkapsuliacija - objekto vidiniai duomenys yra slepiami ir jais galima manipuliuoti tik naudojant objekto viesus metodus.
Abstrakcija - objekto nepriklausomumas nuo isoriniu sudedamuju daliu
Paveldejimas - viena klase gali buti kitos klases konkretizacija/patikslinmas/tesimas
Polimorfizmas - galimybe dirbti su objektu nezinant jo tikslaus tipo ir strukturos
*/

class Gyvunas{
    #pavadinimas;
    #kojuKiekis
    constructor(pavadinimas, kojuKiekis){
        this.#pavadinimas = pavadinimas;
        this.#kojuKiekis = kojuKiekis;
    }

    getPavadinimas(){
        return this.#pavadinimas;
    }
    setPavadinimas(naujasPavadinimas){
        this.#pavadinimas = naujasPavadinimas;
    }

    getKojuKiekis(){
        return this.#kojuKiekis;
    }
    setKojuKiekis(naujasKojuKiekis){
        this.#kojuKiekis = naujasKojuKiekis;
    }

    valgo(){
        return 'Valgo kazka...'
    }
}


class Kate extends Gyvunas{
    constructor(kojukiekis){
        super('kate', kojukiekis);
    }

    #balsoVariantai = [`Miauuu..`, `Psshhhttt`, `Murk...`, `Rawr...`];
    #balsoVariantas(){
        return this.balsoVariantai[Math.floor(Math.random()*this.#balsoVariantai.length)];
    }

    balsas(){
        return this.#balsoVariantas();
    }
    valgo(){
        return `Valgo kaciu maista, peles...`;
    }
}


class Voras extends Gyvunas{
    constructor(kojuKiekis){
        super('Voras', kojuKiekis);
    }

    gasdina(){
        return "Buuu MUHAHAHAH";
    }
    valgo(){
        return`Valgo muses...`;
    }
}


let gyvunas = [
    new Gyvunas('suo', 4),
    new Kate(4),
    new Voras(8)
]




//1) Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname.
  //1.1) JavaScripte pasirašykite klasę su konstruktoriumi, kuris turės vardą ir pavardę. Metodą - atsirasti lentelėje.
  //1.2) Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization).
  //1.3) Sukurkite objektą naudojant Klasę.
  //1.4) Galiausiai iškvieskite metodą, kad pridėtų į lentelę.
  //Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje esančioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).


  class Person {
    firstName;
    lastName;
  
    constructor(firstName, lastName) {
      this.firstName = this.getFormattedName(firstName);
      this.lastName = this.getFormattedName(lastName);
    }
  
    getFormattedName(name) {
      if (name.toLowerCase().includes(" ")) {
        const names = name.split(" ");
        const lastName = names[1];
  
        return ` ${lastName[0].toLocaleUpperCase()}${lastName
          .slice(1)
          .toLocaleLowerCase()}`;
      }
  
      return name[0].toLocaleUpperCase() + name.slice(1).toLocaleLowerCase();
    }
  
    addToTheTable() {
      const usersListElement = document.querySelector("tbody#users-list");
  
      const nameRow = document.createElement("tr");
      const firstNameElement = document.createElement("td");
      const lastNameElement = document.createElement("td");
  
      firstNameElement.textContent = this.firstName;
      lastNameElement.textContent = this.lastName;
  
      nameRow.append(firstNameElement, lastNameElement);
  
      usersListElement.append(nameRow);
    }
  }
  
  const fullNameEntryForm = document.querySelector("form#fullNameEntry");
  
  fullNameEntryForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const fullName = document.querySelector("#fullNameInput").value.trim();
  
    const firstName = fullName.split(" ")[0];
    const otherNames = fullName.slice(firstName.length).trim(); // potential middle name, last name
  
    const user = new Person(firstName, otherNames);
  
    user.addToTheTable();
  
    console.log({ user }); // musu naujas vartotojas. galime POST i duomenu baze
  });

//2) Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis).
  //2.1) Per Klasę, sukuriamas objektas ir jis atvaizduojamas po forma (CSS'ą rašykite CSS'e) kaip atvaizduota nuotraukoje (./images/cars.PNG).
  //3.1) Paspaudus ant automobilio bloko - turi alert išmesti kainą ir mileage. (gal su CSS'u gražiai padaryti, kad užėjus ant elemento su pele, atsiranda laukelis nuotraukoje...)


  class Car {
    constructor (brand, model, mileage, price, image) {
      this.brand = brand;
      this.model = model;
      this.mileage = mileage;
      this.price = price;
      this.image = image;
    }
    post() {
      const container = document.querySelector('.container');
      const createDiv = document.createElement('div');
      createDiv.className = '.card';
      const createImage = document.createElement('img');
      createImage.src = this.image;
      const createText = document.createElement('h2');
      createText.innerText = `${this.brand} ${this.model}`;
      createDiv.append(createImage, createText);
      container.append(createDiv);
      createDiv.addEventListener('click', () => {
        // alert(this.price);
        console.log(this.price);
      })
    }
  }
  
  document.querySelector('#carForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const brand = document.querySelector('#brand').value;
    const model = document.querySelector('#model').value;
    const mileage = document.querySelector('#mileage').value;
    const price = document.querySelector('#price').value;
    const image = document.querySelector('#image').value;
    const car = new Car(brand, model, mileage, price, image);
    car.post();
  })