// Variables

let name = "John";
const age = 25;
var city = "New York";

console.log(name, age, city);

// Data Types

let str = "Hello";
let num = 100;
let bool = true;
let nothing = null;
let undef;

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(nothing);
console.log(undef);

// Operators

let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Comparison

console.log(a > b);
console.log(a < b);
console.log(a === 20);

// Conditions

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// Loops

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let i = 1;

while (i <= 3) {
    console.log(i);
    i++;
}

let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
    console.log(color);
}

let person = {
    name: "John",
    age: 25
};

for (let key in person) {
    console.log(key, person[key]);
}

// Functions

function greet(name) {
    return "Hello " + name;
}

console.log(greet("Alice"));

const add = (x, y) => x + y;

console.log(add(10, 20));

// Arrays

let fruits = ["Apple", "Banana"];

fruits.push("Orange");
fruits.unshift("Mango");
fruits.pop();
fruits.shift();

console.log(fruits);

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(n => n * 2);
let even = numbers.filter(n => n % 2 === 0);
let total = numbers.reduce((sum, n) => sum + n, 0);

console.log(doubled);
console.log(even);
console.log(total);

// Objects

let student = {
    name: "Bob",
    age: 22,

    greet() {
        console.log("Hi " + this.name);
    }
};

student.greet();

// Destructuring

let { name: studentName, age: studentAge } = student;

console.log(studentName, studentAge);

// Spread Operator

let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];

console.log(arr2);

// Rest Operator

function sum(...nums) {
    return nums.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4));

// Template Literals

console.log(`My name is ${name}`);

// Classes

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes sound");
    }
}

let dog = new Animal("Dog");
dog.speak();

// Inheritance

class Cat extends Animal {
    speak() {
        console.log(this.name + " says Meow");
    }
}

let cat = new Cat("Kitty");
cat.speak();

// Set

let set = new Set([1, 2, 2, 3]);

console.log(set);

// Map

let map = new Map();

map.set("name", "John");
map.set("age", 25);

console.log(map.get("name"));

// Date

let today = new Date();

console.log(today);

// Math

console.log(Math.PI);
console.log(Math.sqrt(25));
console.log(Math.random());

// JSON

let json = JSON.stringify(student);
console.log(json);

let obj = JSON.parse(json);
console.log(obj);

// Error Handling

try {
    console.log(x);
} catch (error) {
    console.log("Error:", error.message);
}

// Promise

const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

promise
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Async / Await

async function fetchData() {
    return "Data Loaded";
}

async function run() {
    let data = await fetchData();
    console.log(data);
}

run();

// String Methods

let text = "JavaScript";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("Script"));
console.log(text.slice(0, 4));

// Number Methods

let price = 99.567;

console.log(price.toFixed(2));

// Optional Chaining

let user = {
    profile: {
        email: "abc@gmail.com"
    }
};

console.log(user?.profile?.email);

// Nullish Coalescing

let username = null;

console.log(username ?? "Guest");

// Default Parameters

function welcome(user = "Guest") {
    console.log("Welcome", user);
}

welcome();
welcome("Alex");

// Closures

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

let c = counter();

c();
c();
c();

// Callbacks

function display(msg) {
    console.log(msg);
}

function process(callback) {
    callback("Callback Executed");
}

process(display);

// Timer

setTimeout(() => {
    console.log("Runs after 2 seconds");
}, 2000);

// DOM (Browser Only)

// const h1 = document.getElementById("title");
// h1.innerText = "Hello JavaScript";