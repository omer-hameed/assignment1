""use strict";

// DAY 1
// Question # 1 Define a function named multiply that takes two numbers as parameters and returns their product. Write code to test this function with different input values.

function Multiply(x, y) {
  return x * y;
}
const product = Multiply(3, 8);

console.log(product);

// Question # 2 Write a function called greeting that takes a name as a parameter and returns a string that says "Hello, [name]!". Use template literals to construct the string. Write code to test this fuunction with different input values

function greetings(name) {
  console.log(`Hello ${name}`);
}
greetings("umer");

function greeting1(name) {
  return `Hello ${name}`;
}
console.log(greeting1("John"));

// QUESTION # 3: Create an arrow function that takes an array of numbers and returns the sum of those numbers.

const addNums = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
console.log(addNums([24, 3, 56, 9]));
console.log(addNums([61, -44, 6]));

// Question # 4 Define a function called calculateBMI that takes a person's weight (in kilograms) and height (in meters) as parameters and returns their Body Mass Index (BMI). The formula for BMI is weight / (height * height). Write code to test this function with different input values.

function calculateBMI(weight, height) {
  return weight / (height * height);
}
const BMI = calculateBMI(78, 1.69);
console.log(`The BMI of the person is ${BMI}`);
console.log(calculateBMI(44, 1.84));

// Question # 5 Write an arrow function that takes a string as a parameter and returns the length of that string. Write code to test this function with different input values.

const calcString = (string) => {
  return string.length;
};
console.log(calcString("My name is Bob"));
console.log(calcString("Mosh"));
console.log(calcString("hello world"));

// Question # 6 Define a function named reverseString that takes a string as a parameter and returns the reverse of that string. Write code to test this function with different input values.

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("mosh"));
console.log(reverseString("I love coding"));

function reverseString2(str) {
  let strRev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
  }
  console.log(strRev);
}
reverseString2("Mosh");

// Question # 7 Write an arrow function that takes an object representing a person's name (with properties first and last) and returns a string that says "Hello, [first] [last]!". Use template literals to construct the string. Write code to test this function with different input value

const person1 = {
  first: "John",
  last: "Smag",
};
const person2 = {
  first: "Mathilda",
  last: "Smith",
};

const greetPerson = (person) => {
  return `Hello ${person.first} ${person.last}`;
};
console.log(greetPerson(person1));
console.log(greetPerson(person2));

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalize("umer"));
console.log(capitalize("boieng plane"));

// Question # 9 Write an arrow function that takes an array of strings and returns a new array with all the strings capitalized. Use the map method to apply the capitalization to each element. Write code to test this function with different input arrays.

const array = ["hello", "how", "are", "you"];

const capitalization = (str) => {
  return str.toUpperCase();
};
const newArr = array.map(capitalization);
console.log(newArr);

// Question # 10 Define a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome (i.e., it reads the same forwards and backwards) and false otherwise. Write code to test this function with different input values

function isPalindrome(string) {
  let revStr = string.split("").reverse().join("");
  // if (string === revStr) {
  //   return true;
  // } else {
  //   return false;
  // }
  return string === revStr ? true : false;
}
console.log(isPalindrome("deed"));
console.log(isPalindrome("Mosh"));
console.log(isPalindrome("kayak"));
console.log(isPalindrome("boeing"));
