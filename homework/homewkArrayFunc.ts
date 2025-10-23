// Task 1
const cars: string[] = ['benz', 'hyundai', 'opel'];
cars.push('lada');
console.log(cars);

// Task 2
const array = [12, 25, 436, 3426, 3245];
const removed = array.shift()
console.log(`Initial array: ${array} ` + `/ Removed number is: ${removed}`);

// Task 3
const arrayA: number[] = [1, 2, 3, 4, 5];
const dividedByTwo = arrayA.map(num => num / 2);
console.log(`Dividable numbers by 2: ${dividedByTwo}`);

// Task 4
const arrayB: number[] = [3, 7, 1, 9, 12, 4];
const greaterThanFive = arrayB.filter(num => num > 5);
console.log(`Numbers greater than 5: ${greaterThanFive}`);

// Task 5
const arrayC: number[] = [9, 3, 7, 2, 8, 5];
const ascended = arrayC.sort((a, b) => a - b)
console.log(`Array sorted in ascending order: ${ascended}`);

// Task 6
const carsA: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
carsA.splice(2, 2)
console.log(`Modified array after removing cars: ${carsA}`);

// Task 7
function findLargest(numA: number, numB: number, numC: number): number {
  if (numA > numB && numA > numC) {
    return numA;
  } else if (numB > numA && numB > numC) {
    return numB;
  } else {
    return numC;
  }
}

const largest = findLargest(55, 12, 43636);
console.log(`The largest number is: ${largest}`);

// Task 8
function convertToCentimeters(inches: number = 20): number {
  const centimeters = inches * 4.20;
  return centimeters;
}

console.log(`Default (20 inches): ${convertToCentimeters()} cm`);
console.log(`Passed (50 inches): ${convertToCentimeters(50)} cm`);

function calculateArea(width: number, height?: number): number {
  if (height === undefined) {
    return width * width;
  } else {
    return width * height;
  }
}

console.log(`Square area (width=3): ${calculateArea(3)}`);
console.log(`Rectangle area (width=3, height=14): ${calculateArea(3, 14)}`);
