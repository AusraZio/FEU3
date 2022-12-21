//Sukurti ToDo aplikaciją

//Task'ai turi būti generuojami iš jiem sukurtos klasės.
//Informacija saugoma localStorage.
//Galimybė sukurti, redaguoti, trinti ir pažymėti/atžymėti task'ą kaip atliktą/neatliktą.
// Sukuriant naują task'ą jis pridedamas į localStorage.
//Trinant task'ą jis ištrinamas iš localStorage.
//Redaguojant task'ą jis ARBA ištrinamas ir sukuriamas ARBA perrašomas jau esantis.
//Task'ai atvaizduojami nuskaičius localStorage ir iš jo pasiėmus informaciją apie task'us.
//Stilizuoti!!! (idėja kaip gali atrodyti (./images/toDoApp.PNG))


function appendToList() {
    const tasksArray = ['Išvesti šunį', 'Nuvalyti dulkes', 'Išplauti indus', 'Padaryti namų darbus'];
    const ulList = document.querySelector('#myUL');
    tasksArray.forEach((item) => {
      const li = document.createElement('li');
      const textNode = document.createTextNode(item);
      li.appendChild(textNode);
      ulList.appendChild(li);
    })
  }
  
  appendToList();
  
  function newElement() {
    const li = document.createElement('li');
    const value = document.querySelector('#myInput').value;
    const textNode = document.createTextNode(value);
    li.appendChild(textNode);
    if(value === '') {
      console.log('Neįvestas tekstas');
    } else {
      const ulList = document.querySelector('#myUL');
      ulList.appendChild(li);
    }
    document.querySelector('#myInput').value = '';
  
    const span = document.createElement('span');
    const txt = document.createTextNode('\u00D7');
    span.classList.add('close');
    // span.classList = 'close';
    span.append(txt);
    li.appendChild(span);
  
    const close = document.querySelectorAll('.close');
  
    for(let i=0; i<close.length; i++) {    
      close[i].onclick = function() {
        const parentElement = this.parentElement;
        parentElement.style.display = 'none';      
      }
    }
  }
  
  const liItems = document.querySelectorAll('li');
  
  for(let i=0; i<liItems.length;i++) {
    const span = document.createElement('span');
    const txt = document.createTextNode('\u00D7');
    span.classList.add('close');
    span.append(txt);
    liItems[i].appendChild(span);
  
    liItems[i].onclick = function() {
      liItems[i].classList.toggle('checked');
    }
  }
  
  const close = document.querySelectorAll('.close');
  
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const parentElement = this.parentElement;
      parentElement.style.display = 'none';
    }
  }
  
  
  //
  const liItemsValuesArray = [...document.querySelectorAll("li")].map((item) => item.textContent.replace('x',''));
  const sortedItems = liItemsValuesArray.sort()
  console.log(sortedItems);
  
  const doneTasks = [...document.querySelectorAll("li")].reduce((array, value) => {
    if ([...value.classList].includes('checked')) {
      array.push(value.textContent.replace('x', ''));
    }
    return array;
  },[]);
  
  const toDoTasks = [...document.querySelectorAll("li")].reduce((array, value) => {
    if (![...value.classList].includes('checked')) {
      array.push(value.textContent.replace('x', ''));
    }
    return array;
  }, []);
  
  console.log(doneTasks);
  console.log(toDoTasks);
  
  
  let toDo = [];
  let done = [];
  [...document.querySelectorAll("li")].forEach((value) => {
    if ([...value.classList].includes('checked')) {
      toDo.push(value.textContent.replace('x', ''));
    } else {
      done.push(value.textContent.replace('x', ''));
    }
  })
  
  console.log(toDo);
  console.log(done);