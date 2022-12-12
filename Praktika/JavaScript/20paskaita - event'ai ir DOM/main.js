let renkames1 =document.querySelector('p'); //# jei renkiesi id skliaustuose viskas rasoma
console.dir(renkames1);
console.log(renkames1);
//dir ir log
//dir - grazina interaktyvu savybiu sarasa
//log - grazina elementa

for(let i = 0; i < renkames1.length; i++){
renkames1[i].addEventListener('click',function(event){ 
console.dir(event);
console.log('paspaudei ant'+ i + '"ojo, paragrafo');
});
}

let renkames2 = document.querySelector('html');
renkames2.addEventListener('keydown',function(event){ 
console.dir(event);
console.log('Paspaudei' + event.key + ' klaviatura ');
});

let visiH1 = document.querySelectorAll("h1");
for(let i = 0; i < visiH1.length; i++){
    console.dir(visiH1[i]);
    visiH1[i].textContent+= " :)"; //keicia duomenys
    visiH1[i].style.color = 'red';
}


//uzduotis
let renkames3 =document.querySelector('p');
console.log(renkames3);

let renkames4 =document.querySelector('h1');
console.log(renkames4);

let renkames5 =document.querySelector('h2');
console.log(renkames5);

let renkames6 =document.querySelector('div');
console.log(renkames6);

/*
let renkames7 = document.querySelector('h1');// galima pakeisti i div ar dar kita ir paspaudus parsys teksta kuris yra apacioje
renkames7.addEventListener('mouseover',function(event){ 
console.dir(event);
console.log('Paspaudei' + event.key + ' klaviatura ');
});*/

//pabaigti uzduoti

//           kurti DOM is JS'o
let DOM_is_JS = document.querySelector('#DOM_is_JS');

DOM_is_JS.innerHTML +="<p> Labas</p>"; //pirmas budas

//antras budas
let paragrafas = document.createElement("p");
console.dir(paragrafas);
let tekstas = document.createTextNode("Text node");
paragrafas.append(tekstas);
DOM_is_JS.append(paragrafas);


//      DOM stilizavimas is JS'o

paragrafas.style.color = '#f00';
//paragrafas.className = 'tekstas';
//paragrafas.setAttribute('class', 'tekstas');
paragrafas.classList.add('tekstas');//prideda klase
//paragrafas.classList.add('kitaKlase');
//paragrafas.classList.remove('kitaKlase')//atima klase/panaikina


// task5

let calculator = document.querySelector("#calc");

console.dir(calculator);
calculator.children[0].addEventListener('submit', function(e){
    e.preventDefault();
    console.dir(e); 
    let number1 = e.target.elements.number1.valueAsNumber;
    console.log(number1);
    let number2 = e.target.elements.number2.valueAsNumber;
    console.log(number2);
    let action = document.querySelector("#operator").value;
    let calculate;


    if (action == "add"){
        calculate = number1 + number2;
    } else if (action == "min"){
        calculate = number1 - number2;
    } else if (action == "div"){
        calculate = number1 * number2;
    } else if (action == "nul"){
        calculate = number1 / number2;
    } else if (action == "degree"){
        calculate = Math.pow(number1,number2);
    } else if (action == "remains"){
        calculate = number1 % number2;
    } else if (action == "root"){
        calculate = number1 * 1 / number2;
    }

    document.querySelector('#results').innerHTML = calculate;
});


