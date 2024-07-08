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




// DAY 2

// PROBLEM
//  You are given an array of objects representing the students in a class. Each object has the following properties:

// const students = [ { name: "Alice", grade: 90 }, { name: "Bob", grade: 80 }, { name: "Charlie", grade: 95 }, { name: "Dave", grade: 85 } ]; Your task is to write a set of functions to manipulate this array and perform the following operations:

// Problem # 1: Use the "concat" method to combine the "students" array with an additional array of objects representing new students who joined the class mid-semester. The new students are:

// const newStudents = [ { name: "Eve", grade: 88 }, { name: "Frank", grade: 92 } ];
const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

const newStudents = students.concat([
  { name: "Eve", grade: 88 },
  { name: "Frank", grade: 92 },
]);
console.log(newStudents);

// Problem # 2: Use the "entries" method to create an iterator over the "students" array and log each index and value to the console.

// const students = [
//   { name: "Alice", grade: 90 },
//   { name: "Bob", grade: 80 },
//   { name: "Charlie", grade: 95 },
//   { name: "Dave", grade: 85 },
// ];
const iterator = students.entries();

let items = "";
for (let x of iterator) {
  items += x;
}
console.log(items);

// Problem # 3: Use the "every" method to check if all students have a passing grade (i.e. grade >= 70).

function checkGrade(student) {
  return student.grade >= 70;
}
const passing = students.every(checkGrade);
console.log(passing);

// SECND
const allPassing = students.every((student) => student.grade >= 70);

console.log(allPassing);

// Problem # 5: Use the "filter" method to create a new array containing only the students who have a grade above 90.

const toppers = students.filter((student) => student.grade >= 90);
console.log(toppers);

// Problem # 6: Use the "find" method to find the first student with a name of "Charlie" and log their grade to the console.

// const students = [
//   { name: "Alice", grade: 90 },
//   { name: "Bob", grade: 80 },
//   { name: "Charlie", grade: 95 },
//   { name: "Dave", grade: 85 },
// ];

const Charlie = students.find((student) => student.name === "Charlie");
console.log(Charlie);

//Problem # 7: Use the "findIndex" method to find the index of the first student with a grade of 85.

const studentGrade = students.findIndex((student) => student.grade === 85);
console.log(studentGrade);

// Problem # 8: Use the "flat" method to flatten an array of arrays. The input array is: const nestedArray = [[1, 2], [3, 4, 5], [6]];

const nestedArray = [[1, 2], [3, 4, 5], [6]];

const flattenArray = nestedArray.flat();
console.log(flattenArray);

// Problem # 9: Use the "flatMap" method to map over the "students" array and create a new array of objects with a "passing" property that is true if the student has a grade >= 70 and false otherwise.
const newStudents2 = students.flatMap((student) => student.grade > 70);
console.log(newStudents2);

// Problem # 10: Use the "forEach" method to log the name of each student to the console.

const studentsName = students.forEach((student) => console.log(student.name));
// console.log(studentsName);

// Problem # 11: Use the "from" method to create a new array from a string. The string is: const string = "hello world"

const string = "hello world";

const arrayStr = Array.from(string);
console.log(arrayStr);

//Problem # 12: Use the "includes" method to check if the "students" array includes a student with a name of "Eve"

const checkName = students.includes((student) => student.name === "eve");
console.log(checkName);

// Problem # 13: Use the "indexOf" method to find the index of the first student with a name of "Bob

//
//

const checkIndex = students.indexOf("Bob");
console.log(checkIndex);

// Problem # 14: Use the "map" method to create a new array containing only the grades of the students.
const onlyGrades = students.map((student) => student.grade);

console.log(onlyGrades);

// Problem # 15: Use the "push" method to add a new student to the end of the "students" array. The new student is: const newStudent = { name: "Grace", grade: 87 };

const newStudent = { name: "Grace", grade: 87 };
students.push(newStudent);
console.log(students);

// Problem # 16: Use the "pop" method to remove the last student from the "students" array.
students.pop();
console.log(students);

// Problem # 17: Use the "reverse" method to reverse the order of the "students" array

students.reverse();
console.log(students);
console.log(students[1]);

// Problem # 18: Use the "shift" method to remove the first student from the "students" array.

students.shift();
console.log(students);

// DAY 3
// ASSIGNMENT 3
// QUESTION #1


function fetchAlbums() {
  return new Promise((resolve) => {
    resolve(
      fetch("https://jsonplaceholder.typicode.com/albums/")
        .then((response) => response.json())
        .then((albums) => {
          console.log("<<hy", albums);
          const filteredAlbums = albums.filter((album) => album.title);

          const simplifiedAlbums = filteredAlbums.map((album) => ({
            id: album.id,
            title: album.title,
          }));

          return simplifiedAlbums;
        })
        .catch((error) => {
          console.error("Error fetching albums:", error);
        })
    );
  });
}

fetchAlbums()
  .then((albums) => {
    console.log("Fetched albums:", albums);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// question2
function fetchPostsAxios() {
  return new Promise((resolve) => {
    resolve(
      axios
        .get("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => {
          const data = response.data;
          console.log(data);
          const filterPosts = data.filter((post) => post.title);
          const sortPosts = filterPosts.sort((a, b) => a.id - b.id);
          return sortPosts;
        })

        .catch((error) => {
          console.error("Error fetching posts:", error);
        })
    );
  });
}

fetchPostsAxios();

// QUESTION #3

function fetchUser() {
  return new Promise((resolve) => {
    resolve(
      fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((users) => {
          console.log(users);
          const filteredUser = users.filter((user) => user.email);
          const totalUsersWithPhone = filteredUser.reduce((count, user) => {
            return user.phone ? count + 1 : count;
          }, 0);
          console.log(totalUsersWithPhone);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        })
    );
  });
}
fetchUser();

// Question 5

function fetchTodos() {
  return new Promise((resolve) => {
    resolve(
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((todos) => {
          const filterCompleted = todos.filter((todo) => todo.completed);

          const formatted = filterCompleted.map((todo) => ({
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
          }));
          return formatted;
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        })
    );
  });
}
fetchTodos()
  .then((todos) => {
    console.log(todos);
  })
  .catch((error) => {
    console.error("Error fetching posts:", error);
  });
