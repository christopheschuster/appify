/*
 * Filename: SophisticatedApp.js
 * Content: A sophisticated, elaborate, and complex JavaScript application.
 */

// Global variables
let counter = 0;
const maxCount = 10;

// Utility function to generate a random number between two values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Class definition for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Function to create an array of Person objects
function createPeople() {
  const people = [];

  for (let i = 0; i < maxCount; i++) {
    const name = `Person ${i + 1}`;
    const age = getRandomNumber(20, 50);
    const person = new Person(name, age);
    people.push(person);
  }

  return people;
}

// Function to calculate the sum of ages for a given array of Person objects
function calculateSumOfAges(people) {
  let sum = 0;

  for (const person of people) {
    sum += person.age;
  }

  return sum;
}

// Function to log an informative message about the sum of ages
function logSumOfAges(sum) {
  console.log(`The sum of ages is ${sum}`);
}

// Main program execution
function main() {
  const people = createPeople();
  const sum = calculateSumOfAges(people);
  logSumOfAges(sum);
}

main();
