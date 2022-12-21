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

class Gyvunas {
    #pavadinimas; // privatus
    #kojuKiekis
    constructor(pavadinimas, kojuKiekis) {
      this.pavadinimas = pavadinimas;
      this.kojuKiekis = kojuKiekis;
    }
    getPavadinimas() {
      return this.#pavadinimas; //paimi pavadinimas
    }
    setPavadinimas(naujasPavadinimas) {
      this.#pavadinimas = naujasPavadinimas; //pakeiti pavadinima
    }
    getKojuKiekis() {
      return this.#kojuKiekis;
    }
    setKojuKiekis(naujasKojuKiekis) {
      return this.#kojuKiekis = naujasKojuKiekis;
    }
    valgo() {
      return 'kazka'
    }
  }
  
  class Kate extends Gyvunas {   // klase kate gauna visus gyvunas nustatymus, negauna tik konstruktoriaus ir jo nustatymu
    constructor(kojuKiekis) {
      super('kate', kojuKiekis); //idedam gyvunas construktoriu su sitais nustatymais
    }
    #balsoVariantai = ['miau', 'mur', 'prrrrrru', 'sssssshhhhhh']
    #balsoVariantas() {
      return this.#balsoVariantai[Math.floor(Math.random() * this.#balsoVariantai.length)];
    }
    balsas() {
      return this.#balsoVariantas();
    }
    valgo() {
      return 'peles'
    }
  }
  class Voras extends Gyvunas {
    constructor(kojuKiekis) {
      super('Voras', kojuKiekis);
    }
    gasdina() {
      return 'bu'
    }
    valgo() {
      return 'muses'
    }
  }
  
  let gyvunas = [
    new Gyvunas('Kate', 4),
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
    constructor(firstName, lastName) {//klase su konstrutoriumi
      this.firstName = this.SutvarkytasName(firstName);///pirmas vardas = lygus sutvarkyto pilno vardo pirmam vardui
      this.lastName = this.SutvarkytasName(lastName);///pavarde = lygi sutvarkyto pilno vardo  pavardei arba atram vardui ir pavardei jei iraso triguba varda
    }
  
    SutvarkytasName(name) { /// 
      if (name.toLowerCase().includes('middleName')) { ///jeigu pilno vardo value yra mazosomis raidemis ir turi vidurini varda
        const names = name.split(" "); // tada pilno vardo value splitinimas ties pirmu tarpeliu ir vardas pries splitinima priskiriamas pirmam vardui (isvedem pirma varda)
        const lastName = names[1]; /// o pavardei priskeriamas pilno vardo pirmasis elementas ( arba kitai antras jei skaiciuoji ne nuo 0 arba elementas esanti po splitinimo - ta gali buti visurinis vardas su pavarde arba tiesiog pavarde)
  
        return `middleName ${lastName[0].toLocaleUpperCase()}${lastName  /// ir jei yra vidurinis vardas grazinama pavarde 0 elemtas siuo atveju antras varda didziaja raide
          .slice(1)}`; /// ir pavarde kuri turi viduri varda ir pavarde ir slicinimas ties 1 elementu situ atveju ties pavarde (isvedeme antra varda)
      }
  
      return name[0].toLocaleUpperCase() + name.slice(1).toLocaleUpperCase(); /// tada grazinamas antras vardas  didzija raide + pavarde ir didziaja raide (isvedeme trecia varda-pavarde)
    }
  
    addToTable() { //// idejimas vardo i table 
      const usersListElement = document.querySelector("tbody#users-list"); // pasirenkame selector is html 
  
      const nameRow = document.createElement("tr");  /// sukuriame tr
      const firstNameElement = document.createElement("td");  ///sukuriam td su pirmu vardu
      const lastNameElement = document.createElement("td"); /// sukuriam td su pavarde
  
      firstNameElement.textContent = this.firstName; /// td pirmo vardo contents = pirmo vardo input value
      lastNameElement.textContent = this.lastName; /// td pavardes content = antro + pavardes( ar tik pavardes) input value
  
      nameRow.append(firstNameElement, lastNameElement); /// apendiname td 
  
      usersListElement.append(nameRow); ///apendiname tr
    }
  }
  
  ///event kad iskviesti 
  const fullNameEntryForm = document.querySelector("form#fullNameEntry");/// pasirenkame forma 
  
  fullNameEntryForm.addEventListener("submit", (event) => { /// uzrasomas event ties submit 
    event.preventDefault();
  
    const fullName = document.querySelector("#fullNameInput").value.trim(); /// uzrasomas pilno vardo input value trim()-isima whitespace is abieju pusiu
  
    const firstName = fullName.split(" ")[0]; /// pirmas vardas splitinamas ties tarpeliu
    const otherNames = fullName.slice(firstName.length).trim(); // potential middle name, last name 
  
    const user = new Person(firstName, otherNames); /// user=naujas person su primu ir antru vardu 
  
    user.addToTable(); //idedamas i table
  
    console.log({ user }); // vis nauja parodo useri 
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
      const container = document.querySelector('.container'); //kuriu konteineri paemus is html .container 
      const createDiv = document.createElement('div');
      createDiv.className = '.card';
      const createImage = document.createElement('img');
      createImage.src = this.image; //sukuriu elmenta kuris bus this image, kad irasius i forma isikeltu nurodytas
      const createText = document.createElement('h2');
      createText.innerText = `${this.brand} ${this.model}`;// kadangi noriu jog man ismestu brand ir model, tai idedu tus parametrus i inner text if h2
      createDiv.append(createImage, createText);
      container.append(createDiv);
      createDiv.addEventListener('click', () => { //pridedu event listeneri kad paspaudus ant paveikslelio ismetu kaina
        const createP = document.createElement('p');
        createP.innerText = `${this.price}`;
        createDiv.append(createP);
        console.log(this.price);
      })
    }
  }
  //pasikeisti
  document.querySelector('#carForm').addEventListener('submit', (event) => { //event listeneris formai
    event.preventDefault();
    const brand = document.querySelector('#brand').value;
    const model = document.querySelector('#model').value;
    const mileage = document.querySelector('#mileage').value;
    const price = document.querySelector('#price').value;
    const image = document.querySelector('#image').value; //paimu visas value
    const car = new Car(brand, model, mileage, price, image);
    car.post(); //car ikeliamas
  })
  



  // Susikurti (h1-h6) Antraštės Klasę su tekstu, atributais
  class Heading{
    constructor(props){
      this.props = props;
      return this.render();
    }
  
    render = () =>{
      this.htmlElement = document.createElement(`h${this.props.dydis}`);// i html pridedu h, kurio dydis bus nustatomas per objekta zemiau
      this.textElement = document.createTextNode(this.props.tekstas); //pridedu teksta kuris bus parasytas zemiau  
      this.htmlElement.append(this.textElement); //appendinu vis elementa
  
      if(this.props.atributai){
        // jeigu atributai yra objektas
        Object.keys(this.props.atributai).forEach(raktas => {//paima ju keys ir nustato atributus kurie gali but duodami
          this.htmlElement.setAttribute(raktas, this.props.atributai[raktas]);
        });
  
        // jeigu atributai yra masyvai masyve
        // this.props.atributai.forEach(atributas => {
        //   this.htmlElement.setAttribute(atributas[0], atributas[1]);
        // });
      }
  
      return this.htmlElement;
    }
  }
  
  let antraste1 = new Heading({ //susikeliam visus nekuriant papildomu eiluciu, tik su auksciau parasytomis
    dydis: '1',
    tekstas: 'Kaimietiškai',
    atributai: {
      class: 'klasesVardas darVienaKlase',
      id: 'kazkoksId',
      style: 'color:red'
    }
    // atributai: [ 
    //   ['class', 'klasesVardas darVienaKlase'],
    //   ['id', 'kazkoksId'],
    //   ['style', 'color:red']
    // ]
  });
  document.querySelector("body").append(antraste1);
  
  document.querySelector("body").append(new Heading({  //pridedam dar viena h
    dydis:'5',
    tekstas:'Labas rytas',
    // atributai: [
    //   ['style', 'font-size: 50px']
    // ]
    atributai: {
      style: 'font-size:40px'
    }
  }));
  document.querySelector("body").append(new Heading({
    dydis:'6',
    tekstas:'Labai mažas header',
    atributai: {
      style: 'color:aquamarine',
    }
  }));