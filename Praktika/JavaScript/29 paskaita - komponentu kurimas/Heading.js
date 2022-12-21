export default class Heading{
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


  export const helloWorld = () => {
    console.log('Hello world!');
  }
  
  export const notMorningPerson = () => {
    console.log("Mornings should start at 11AM...");
  }
  
  // export default Heading;
  // export { helloWorld, notMorningPerson };