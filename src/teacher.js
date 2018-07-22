import { Person } from "./person"; // Notice here we dont use the extension for person.js file as the .js extension is automatically added in react. but we need to add the .css and .html if we are importing them

// lets create a function which we will named export it
export function promotion() {}

// lets default export this Teacher class
export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log(
      `I'm a teacher with degree ${this.degree} and my name is ${this.name}`
    );
  }
}
