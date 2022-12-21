//          JSON
/*
JSON - Java Script Object Notation

JSON skiriasi nuo Object tuo, kad:
 JSON raktiniai zodziai yra kabutese
 JSON ignoruoja/nesaugo metodu
*/
const object = {
    raktu : 'reiškmė',
    tiesa : true,
    skaicius : 654,
    masyvas : ['labas', 'ate'],
    objektas : {hi:'ha', du: 2},
    funkcija(zodis){
      return `Pasakei ${zodis}`
    }
  }
  const objectAsJSON = JSON.stringify(object);
  


//      Fetch
/*syntax
fetch('url');
.then(res => res.text() || JSON.parse(res))
*/
/*
Fetch skirtas pasiimti duomenys is nurodyto failo ar url.
*/

// data.txt
const data = fetch('./data/data.txt')
   .then(response => response.text())
   .then(data =>{
    console.log(data);
    let dataAsArray = data.split('\n');//eilute luzis
    console.log(dataAsArray);
    //dataAsArray = dataAsArray.map(item => item.split(' '));
    //console.log(dataAsArray);
    dataAsArray.forEach(line => {
        document.querySelector('#tekstinis').innerHTML += `<p>${line}</p>`;
    });
   })

   // data.json
fetch('./data/data.json')
.then(response => response.json())
.then(data => {
  console.log(data);
  Object.keys(data).forEach(key => {
    document.querySelector('#jsonSimple').innerHTML += `<p>${data[key]}</p>`;
  });
});


   //1) movies.json
  //1.1) Susikurti movies.json failą, jame sukurti 3 filmus. Kiekvienas filmas turi:
    //1.1.1) Pavadinimą
    //1.1.2) Poster (nuotraukos url)
    //1.1.3) Ilgis minutėmis
    //1.1.4) Bent 2 aktoriai
  //1.2) Nuskaityti movies.json failą JS'e. ir į ekraną išvesti informaciją apie filmus:
    //1.2.1) Pavadinimas
    //1.2.2) Poster'is (nuotrauka)
    //1.2.3) Ilgis valandomis ir minutėmis
    //1.2.4) Bent 2 aktoriai (suktas ciklas per masyvą)
  //1.3) Jeigu yra laiko ir noro - stilizuoti.


  // Nuskaityti movies.json failą
  fetch('./data/movies.json')
  .then(res => res.json())
  .then(data => {
    console.log(data[0].actors.map(actor => `<li>${actor}</li>`).toString().replaceAll(',',''));
    data.forEach(movie => {
      document.querySelector('#filmai').innerHTML += `
        <div class="movie">
          <h1>${movie.name}</h1>
          <img src="${movie.poster}" alt="${movie.name} movie poster">
          <span>Movie length: ${Math.floor(movie.length/60)} hours ${movie.length%60} minutes</span>
          <ul>
            ${
              movie.actors
                .map(actor => `<li>${actor}</li>`)
                .toString()
                .replaceAll(',', '')
            }
          <ul>
        </div>
      `
    });
  });

  // random user

  fetch('https://randomuser.me/api')
  .then(res => res.json())
  .then(data => {
    console.log(data.results[0]);
});


//2) Pasiimkite duomenis iš https://randomuser.me/api/ ir juos atvaizduokite puslapyje.
  //Duomenys galėtų būti atvaizduoti kortelėje.
  //Atvaizduoti nuotrauką, vardą, amžių, adresą ir el. paštą.
  //Galima padaryti mygtuką, kurį paspaudus užkraunamas naujas random asmuo.
  //Kas be ko - pastilizuoti.

  fetch('https://randomuser.me/api')
  .then(res => res.json())
  .then(data => {
    console.log(data);
 


  const person = data.results[0];

  const Fullname = person.name.first + ' ' + person.name.last;
  const age = person.dob.age;
  const address =person.location.street.name + ' ' + person.location.street.number;
  const email = person.email;
  
  const card = document.createElement('div');
  card.innerHTML = `
    <img src="${person.picture.medium}" alt="Profile picture" />
    <p>${Fullname}</p>
    <p>${age}</p>
    <p>${address}</p>
    <p>${email}</p>
  `;
  
  document.body.appendChild(card);

})


document.getElementById("fetch-button").addEventListener("click", () => {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        const name = `${user.name.first} ${user.name.last}`;
        const email = user.email;
  
        // Atnaujinti HTML elementus
        document.querySelector("h1").textContent = name;
        document.querySelector("p").textContent = email;
        document.querySelector("img").src = user.picture.medium;
      });
  });




  