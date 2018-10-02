import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
}

interface Dog {
  name: string;
  age: number;
  color?: string;
  date?: Date;
}
const json = '{"name":"Max", "age":14,"color":"red", "date":"2017-09-29"}';
const  myDog: Dog = JSON.parse(json)
// parsowanie pliku dog na json

// console.log(myDog)


interface Adress {
  street: string;
  city: string;
}

interface Customer {
  name: string;
  lastname: string;
  adress: Adress;
}

function welcome2(customer: Customer): string {
  return `hej ${customer.name}, ${customer.lastname}, ${customer.adress.street}`;
}

console.log(welcome2({
  lastname: 'renia',
  name: 'dupa',
  adress: {
    street: 'udu',
    city: 'jdnkejnde'
  }
}));
