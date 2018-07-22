/* This is from the youtube video: 

https://www.youtube.com/watch?v=NCwa_xi0Uuc&index=20&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax
 
Named JavaScript for React Developers
 
Content of video:
1. let/const
2. Objects
3. this
4. Arrow Funcs
5. Destructuring
6. Spread
7. Classes
8. Modules
*/
//***************************OBJECTS******************************* */

/*
Points to be noted:
> varialbles defined with var are function scoped
> variables defined with let and const are block {} scoped
> "variables" inside the object is called a "property" and "function" inside the object is called the "method"
> ES5 way of defining a method in an object :
var person = {
  name: "vaibhav",
  walk: function(){},
}
> ES6 way of defining a method 
const person = {
  name: "vaibhav",
  walk(){}, // we omit the : and function keyword
  talk(){}
}
> there are 3 methods to access these properties and methods:
Method1: dot notation
person.walk();
Method2: Bracket notation
person["name"] = "Mosh";

> If we know which property we are going to modify or which method we are going to call in advance then we use the dot notation, else we use the bracket method shown below
const targetMember = 'name';
person[targetMember] = 'John';
 */

//***************************3. 'this' keyword******************************* */

/*
const person = {
  name: "Vaibhav",
  walk() {
    console.log(this);
  }
};

person.walk();

const walk = person.walk;
console.log(walk);
walk(); // here we will get the output as undefined

> because the value of 'this' is determined by how the function is called
> when a function is called as an method of an object then the this keyword will be holding the reference to that object to which it belongs
> when a function is called as a normal standalone function 'outside the object' then the this keyword will be holding the reference to the 'global window object'

*/

//***************************binding 'this' keyword******************************* */

/* 
If the function is defined as standalone then it holds the reference to the global object
If the strict mode is enabled i.e. it shows undefined

> Every function in JavaScript is an object 

> We have a method called function to bind the function to an object

> Bind method: 
  >>it takes the first argument as the 'thisArg' which is representing the object to which the 'this' keyword will be pointing to 
  e.g. const walk = person.walk.bind(person);

  >>the bind method will return a new instance of the walk function and set the 'this' to point to the 'person object' instead of the global window object


//e.g.
const person = {
  name: "Vaibhav",
  walk() {
    console.log(this);
  }
};

const walk = person.walk.bind(person); //here we are creating a new instance of the walk method of the object person and hence the this keyword will now be having reference to the object person and we sont get a undefined output in console
walk();
console.log(walk);
*/

//***************************4 Arrow Functions******************************* */

/* 
// old javascript syntax
function squaringNum(num) {
  return num * num;
}

const square = squaringNum(4);
console.log(square);

//ES6 syntax with arrow functions
const squaringNum1 = num => num * num;

console.log(squaringNum1(5));
*/

//*************************** Arrow Functions and 'this' keyword******************************* */

// We have three important cases here
//CASE 1: we create an object which has a method and print the value of this simply
/* 
const person = {
  talk() {
    console.log("this", this);
  }
};

person.talk(); // here the this keyword will point to the person object

// CASE 2: we create an object which has a setTimeout function which is global and inside that we print the this keyword and we find that the this keyword no longer points to the same person object but it points to the global object window
const person1 = {
  talk() {
    setTimeout(function() {
      console.log("this", this);
    }, 1000);
  }
};

person1.talk(); // here the this keyword will point to the window object

// CASE 3: we can resolve this issue by using the older javascript method as follows and the this keyword we will change to the self keyword

const person2 = {
  talk() {
    var self = this;
    setTimeout(function() {
      console.log("self:", self);
    }, 1000);
  }
};

person2.talk(); // here we have resolve the issue and the this here(self) is pointing to the same person2 object and not the global object window

// CASE 4: instead of creating a self variable we can avoid this confusion of this keyword with the arrow functions. Arrow functions dont bind this but instead they inherit the this keyword

const person3 = {
  talk() {
    setTimeout(() => console.log("this", this), 1000);
  }
};

person3.talk(); // here we are not defining any self variable and still we get the this pointing to the person3 object
*/

//*************************** Array.map() ******************************* */
/*
// > this map method is very important for rendering the lists as shown below

// we have an array of colors and we wish to conver this array elements to the HTML Lists

// Note that the map method will return a new array and will not change the existing array so we need to store the new array in some new variable

const colors = ["red", "blue", "green", "yellow"];

// // ES5 Way
// const colorList = colors.map(function(color) {
//   return "<li>" + color + "</li>";
// });

// console.log(colorList);

// ES6 Way using template literals
const colorList = colors.map(color => `<li>${color}</li>`);

console.log(colorList);
*/

//*************************** Object Destructuring ******************************* */
/* when we create an object and we wish to store the array properties or methods into new variables we will be using destructuring as below */
/*
const address = {
  street: "145/4",
  city: "danger",
  country: "national",
  calc() {
    console.log("Im a func");
  }
};

// by lengthy method where we create three new constants and then assign them the address property values
// const street = address.street;
// const city = address.city;
// const country = address.country;

// console.log(street, city, country);

//instead of this we can use the object destructuring

const { street, city, country, func } = address; // all in just one line but it works the same way as the above code works
console.log(street, city, country, func);

// WE HAVE A NEW CONCEPT OF ALIASING SHOWN BELOW
// if we are just interested in the street

const { street: st } = address; // here we are giving an alias for the street property of the address object as st for short

console.log(st);

*/

//*************************** 6. spread operator ******************************* */
/*
// spread operator is ... and the rest operator is also ...

// the spread opeartor will take all the properties of an array or an object and it will return those so that we can store them in new array or object

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // if we wish to join these two arrays we can use two methods: concat or the spread opearator
// // using concat
// const combined = first.concat(second);
// console.log(combined); // now here if we wish to add few more elements in between it is not possible here so we can go for the spread opearator

// // using spread operator
// const third = [...first, "a", ...second, "b"];
// console.log(third);

// We can use the spread operator on the objects as well

const first = { name: "vaibhav" };
const second = { job: "enjoying" };

const combined = {
  ...first,
  ...second,
  location: "earth",
  display: () => console.log("this is combined object")
};
console.log(combined);
// so the takeaway is with spread operator we dont only join the two arrays or objects but we can also insert new elements or properties into the array or objects respectively

const clone = combined;
console.log("cloned: ", clone);

const clone2 = { ...combined };
console.log(clone2);
*/

//*************************** 7. Classes ******************************* */
/*
// constructor class

class Person {
  constructor(name) {
    this.name = name;
  }
  talk() {
    console.log("Hi, my name is " + this.name);
  }
}

const amit = new Person("Amit"); // when using the consructor class dont forget to use the 'new' keyword never ever ever forget the 'new' keyword!!!!
console.log(amit.name);
amit.talk();

// Inheritance Concept

class Teacher extends Person {
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
// in the above Teacher class we are inheriting  all the parameters and the methods of the class Person using the keyword extends and using the concept of inheritance
// as being a teacher he sould be able to talk and we should not be writing the talk function again in Teacher class so we inherit the name and talk method from the Person class

const teacher = new Teacher("Vijay", "Msc");
console.log(teacher.name);
console.log(teacher.degree);
teacher.talk();
teacher.teach();

// we use this concept whenever we create a component we should have that component extend the base component that is defined in react. Because that base component in react has a bunch of methods that we need in our components
*/
//*************************** 8. Modules ******************************* */
/* 

 >> As we can see above we have multiple classes defined in the same file. instead we can create saperate files for each class which is called "Modularity". And each file is called "Module"
 >> In older javascript we didnt have the native modules but starting from ES6 we have this functionality of modularity
 >> Now we have less code in each file and our application is more maintainable 
 >> but just creating the saperate files isn't sufficient. 
 >> When we work with modules the objects defined in the module are private by default and are not visible or accessible outisde  files or modules
 >> In order to make it visible we have to make it public and we do that by exporting this class to the outside. 
 >> So we export the teacher class in teacher.js and import it where ever we need it.
 >> To export a class its simple. we just need to add the keyword 'export' in front of the class



import { Teacher } from "./teacher";

const teacher = new Teacher("Aniket", "Ded");
teacher.teach();
*/

////// Named and Default Exports ////////
/* 
>> Named Export -> import { ... } from '...';
>> Default Export -> import ... from '...';

> when we have multiple functions or classes in a module we just 'named export' the function or the class from that module and we import it in other module using the {} 
> when we have only one function or class in the module we export it by 'default export' method

 */

import { promotion } from "./teacher";
import Teacher from "./teacher";

// or we can write in same line as below
// import Teacher, { promotion } from './teacher';

const teacher = new Teacher("Vineet", "Ded");
teacher.teach();

// we use this named and default export all the time in React projects
//e.g. import React, { Component } from 'react';
// >> Note that we dont have the ./ before the react because we use that only for our own modules that are part of the project
// >> But react is a third party library that is stored inside the node modules folder
// >> React is default export while the component is the named export
// >> if we wish to see all the named exports from react library we can just press the ctrl+space to see the list of them
