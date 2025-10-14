// Task 1
const name: string = 'Petar Ivanov';
const age: number = 20;

console.log('Hello! My name is ' + name + ', ' + age + ' years old');

// Task 2
const [num1, num2] = [2, 4];
console.log(`${num1} + ${num2} = `, num1 + num2);
console.log(`${num2} - ${num1} = `, num2 - num1);

//Task3
const numbers = [66, 12];

numbers.forEach((num) => {
  const isWithinRange = num >= 10 && num <= 50;
  console.log(`Is number ${num} within range? : ${isWithinRange}`);
});
