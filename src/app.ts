import {User} from './components/userComponent';

export class App{

  userObj: any;

  constructor(){
    this.userObj = new User();
    this.userObj.sayHello()
  }

  sayBye(){
    console.log('Bye...');
  }

  htmlTemplate(){
    var htmlTemplate = `
    <h3> Webpack Typescript App <h3>
    `;
    return htmlTemplate;
  }

}
var a = new App();
a.sayBye();
