// Task 1
const name: string = "Petar Ivanov"
const age: number = 20

console.log('Hello! My name is ' +name + ', ' +age + ' years old');

// Task 2
const num1: number = 2
const num2: number = 4
const add: number = num1 + num2
const subs: number = num2 - num1
console.log(add);
console.log(subs);

//Task3
const numbers = [66, 12];

numbers.forEach(num => {
  const isWithinRange = num >= 10 && num <= 50;
  console.log(`Is number ${num} within range? : ${isWithinRange}`);
});

