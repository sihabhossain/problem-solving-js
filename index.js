// problem 1
const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 40, gender: "female" },
];

const filterAndMapNames = (persons) => {
  return persons
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

console.log(filterAndMapNames(people)); // Output: ["Bob", "Charlie"]

// problem 2
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

const getBookTitles = (bookArray) => {
  return bookArray.map((book) => book.title);
};

console.log(getBookTitles(books)); // Output: ["The Great Gatsby", "To Kill a Mockingbird", "1984"]

// problem 3
const square = (n) => n * n;
const double = (n) => n * 2;
const addFive = (n) => n + 5;

const composedFunction = (n) => addFive(double(square(n)));

console.log(composedFunction(3)); // Output: 23

// problem 4
const cars = [
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Honda", model: "Accord", year: 2010 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const sortCarsByYear = (carArray) => {
  return carArray.sort((a, b) => a.year - b.year);
};

console.log(sortCarsByYear(cars));
// Output: Sorted array by year in ascending order

// problem 5
const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const findAndModifyAge = (personsArray, name, newAge) => {
  return personsArray.map((person) =>
    person.name === name ? { ...person, age: newAge } : person
  );
};

console.log(findAndModifyAge(persons, "Alice", 28));
// Output: Updated array with Alice's age modified to 28
