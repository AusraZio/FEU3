import Heading,{ helloWorld, notMorningPerson as noMorning } from './Heading.js';


//              KOMPONENTAI

//      UL/OL 
{
    class List{
      constructor(props){
        this.props = props; // props - properties
        return this.render();  //render gali buti bet kas, bet iprasta naudoti render. Atvaizduoti atsakyma
      }
  
      render = () => {
        this.htmlElement = document.createElement(this.props.type);
  
        Object.keys(this.props.attributes).forEach(attribute => { // The keys of an object is the list of property names
          this.htmlElement.setAttribute(attribute, this.props.attributes[attribute]);
        });
  
        this.props.listItems.forEach(listItem => {
          this.li = document.createElement('li');
          this.liTextNode = document.createTextNode(listItem.text);
          this.li.append(this.liTextNode);
          Object.keys(listItem.attributes).forEach(attribute => {
            this.li.setAttribute(attribute, listItem.attributes[attribute]);
          });
          this.htmlElement.append(this.li);
        });
  
        return this.htmlElement;
      }
    }
  
    let list = new List({
      type: 'ul',
      attributes: {
        class: 'lightThemeList',
        id: 'superUnorderedList'
      },
      listItems: [
        {
          text: 'list item tekstas1',
          attributes: {
            class: 'listItem',
            style: 'color: yellow'
          }
        },{
          text: 'list item tekstas2',
          attributes: {
            class: 'listItem',
            style: 'color: green'
          }
        },{
          text: 'list item tekstas3',
          attributes: {
            class: 'listItem',
            style: 'color: red'
          }
        }
      ]
    });
  
    document.querySelector("body").append(list);
  }
  
  //      SELECT



//1) Sukurti Klasę, kurios pagalba galima būtų kurti OL arba UL elementus su LI jų viduje. (kas be ko, galimybė suteikti tekstus ir atributus) P.S. Stilizuoti :)

class Select {
    constructor(props) {
      this.props = props;
      return this.render();
    }
  
  
    render() {
      this.htmlElement = document.createElement('select');
      Object.keys(this.props.attributes).forEach(attributes => {
        this.htmlElement.setAttribute(attributes, this.props.attributes[attributes]);
      });
  
  
  
      this.props.options.forEach(option => {
        this.option = document.createElement('option');
        this.optionTextNode = document.createTextNode(option.text);
        this.option.append(this.optionTextNode);
        Object.keys(option.attributes).forEach(attributes => {
          this.option.setAttribute(attributes, option.attributes[attributes]);
        });
        this.htmlElement.append(this.option);
      });
      return this.htmlElement;
    }
  
  }
  
  
  
  let select = new Select({
    attributes: {
      class: 'select',
      id: 'select',
      style: 'color: purple'
    },
    options: [
      {
        text: 'Pirmas',
        attributes: {
          class: 'option',
          style: 'color: red',
        }
      }, {
        text: 'Antras',
        attributes: {
          class: 'option',
          style: 'color: green',
        }
      }, {
        text: 'Trecias',
        attributes: {
          class: 'option',
          style: 'color: blue',
        }
      }, {
        text: 'Ketvirtas',
        attributes: {
          class: 'option',
          style: 'color: purple',
        }
      }
    ]
  });
  document.querySelector('body').append(select);



//2) Sukurti Klasę, kurios pagalba galima būtų kurti SELECT elementą, kurio viduje būtų OPTION'ai. (kas be ko, galimybė suteikti tekstus ir atributus). P.S. Stilizuoti :)
//3) Sukurti Klasę, kurios pagalba galima būtų kurti TABLE elementą, kurio viduje būtų THEAD ir TBODY (gal ir TFOOT jei nori). THEAD viduje būtų TR, kurio viduje TH. TBODY viduje būtų TR, kurių viduje būtų TD. (jeigu darot su TFOOT, tai ten irgi bus TR su TD kaip buvo TBODY).  (kas be ko, galimybė suteikti tekstus ir atributus). P.S. Stilizuoti :)

// 
// 
  //  TABLE
//class Table{


    /* return
          TABLE
            THEAD
              TR
                TH TH TH
            TBODY
              TR
                TD TD TD
    */

  
  //let table = new Table({
    //tableAttributes:{
  
    //},
    //tableData : [{
     // vardas: "Rokas",
      //pavarde: "Banaitis",
      //amzius: 26
    //}, {
      //vardas: "Rokas2",
      //pavarde: "Banaitis2",
      //amzius: 27
    //}]
 // }); 
     


 class Table {               // sukuriame klase Table
  constructor(props) {
    this.props = props;
    return this.render();
  }

  render() {
    this.htmlElement = document.createElement(this.props.type);
    Object.keys(this.props.attributes).forEach(attributes => {
      this.htmlElement.setAttribute(attributes, this.props.attributes[attributes])
    });

// thead lipdom

    this.thead = document.createElement('thead'); //sukuriame thead elementa
    this.tr = document.createElement('tr');       // i thead sukuriam tr elementa
    Object.keys(this.props.thead).forEach(th => {  // ir pritaikom kiekvienam objektui
      this.th = document.createElement('th'); // sukuriam th
      this.thTextNode = document.createTextNode(this.props.thead[th]); //th elemente sukuriam textnoda
      this.th.append(this.thTextNode); //apend - after the last child of the Element.
      this.tr.append(this.th); //i tr idedamas th

    });

    this.thead.append(this.tr); // i thead iterpiamas tr
    this.htmlElement.append(this.thead); // ir galiausiia visas pries tai sukurtas thead keliauja i html

    /////tbody dabar lipdom
    this.tbody = document.createElement('tbody'); //sukuriam tbody
    this.props.tbody.forEach(tr => { 
      this.tr = document.createElement('tr');// kuris sukurs tr
      Object.keys(tr).forEach(td => {// pritaikom kieknam objektui
        this.td = document.createElement('td'); //tuomet sukuriam td
        this.tdTextNode = document.createTextNode(tr[td]);// bei td elemente vel sukuriam text node
        this.td.append(this.tdTextNode); //i td prijungiam text node
        this.tr.append(this.td); // i tr pridedam visus td
      });

      this.tbody.append(this.tr); // i body idedam visa sukurta tr
    });
    this.htmlElement.append(this.tbody);// i html pridedam visa sukurta tbody
    return this.htmlElement; // ir grazinam visa sukurta elementa
  } }

  
  
  let table = new Table({
  
    type: 'table',
  
    attributes: {
  
      class: 'table',
  
      id: 'table',
  
      style: 'color:  hsl(' + 360 * Math.random() + ', 100%, 50%);'
  
    },
  
    thead: {
  
      th1: 'Vardas',
  
      th2: 'Pavarde',
  
      th3: 'Amzius',
  
      th4: 'Ar mokosi JS?'
  
    },
  
    tbody: [
  
      {
  
        td1: 'Jonas',
  
        td2: 'Petraitis',
  
        td3: '15',
  
        td4: 'Taip'
  
      }, {
  
        td1: 'Petras',
  
        td2: 'Juozapaitis',
  
        td3: '50',
  
        td4: 'Ne'
  
      }, {
  
        td1: 'Antanas',
  
        td2: 'Kurmelevicius',
  
        td3: '25',
  
        td4: 'Taip'
  
      }, {
  
        td1: 'Kazys',
  
        td2: 'Kazakevicius',
  
        td3: '80',
  
        td4: 'Ne'
  
      }
  
    ]
  
  });
  
  
  
  document.querySelector('body').append(table);




  //    MODULIAI

  /*
  Kitu JS dailu importavimas ir naudojimas

  import ka 'isKur'; - faile kuriame norime naudoti importus (main.js)
  type="module" - nusirodyti atributa "type" su nustatymu "module"  JS failo prijungime HTML'e
  export default something(){}; 'isKur' faile reikia nurodyti ka jis eksportuoja.

  galima rasyti tiek export default, tiek export;
  export default bus numatytasis eksportas, kuri priims rasydamas - import anyNameWhat from 'exportFile.js. Vardas kuri nurodai neprivalo sutapti su export default vardu esanciu exportFile.js. Visvien bus eksportuojama vienas vienintelis elementas, kuris turi default prierasa.
  export - paprastas eksportas, kuri priimsi rasydamas - import {exportName2} from 'exportFile.js'. Priimsi butent tuos elementus, kuriu vardus parasei ir kurie yra paprasti exportai. Priimti paprastus eksportus galima kokiais tik nori pavadinimais naudoajnt "as" prierasa: import {exportedname as pirmas, exportedName2 as antras} from 'exportFile.js'.
  */

  let antraste = new Heading({
    dydis:'5',
    tekstas:'Labas rytas',
    atributai: {
      style: 'font-size: 50px'
    }
  });
  console.log(antraste);
  
  helloWorld();
  noMorning();

  //    Duomenu saugojimo vartotojo dalyje

  // cookie
  document.cookie = `vardas=kazkoks; expires=${new Date('2022 12 17')}`;
  document.cookie = `vardas=kazkoks; expires=${new Date('2022 12 17')}`;
  document.cookie = `vardas=kitoks; expires=${new Date('2022 12 17')}`;

  // session storage
 
  document.querySelector('body').addEventListener('click', () => {
    sessionStorage.setitem('vardas', 'Ausra');
    sessionStorage.setitem('pavarde', 'Ziogaite');
    sessionStorage.setitem('lvlOfTired', '30');
  });

  // local storage
document.querySelector('body').addEventListener('click', () => {
    localStorage.setItem('vardas', 'Rokas');
    localStorage.setItem('pavarde', 'Banaitis');
  
    // localStorage.clear(); // išvalo visą storage
    console.log(localStorage.key(0));
    console.log(localStorage.getItem(localStorage.key(0)));
    localStorage.removeItem(localStorage.key(0));
  });
