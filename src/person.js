export class Person {
  constructor(name) {
    this.name = name;
  }
  talk() {
    console.log("Hi, my name is " + this.name);
  }
}
