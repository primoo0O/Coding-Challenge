/*
let fruits = ['apple', 'orange', 'banana'];

const firstF = fruits[0];
const lastF = fruits[fruits.length - 1];

console.log(`${firstF} and ${lastF}`);

fruits.push('coconut');
let remove = fruits.pop();

console.log(remove);

let numbers = [1,2,3,4,5];
let sum = 0;
for(i = 0; i < numbers.length; i++){
  sum += numbers[i];
}
console.log(sum);

let numbers = [1,2,3,4,5];

for(i = 0; i < numbers.length; i++){
  if(numbers[i] % 2){
    continue;
  }
  console.log(numbers[i]);
}

let numbers = [1,2,3,4,5];

function largest(arr){
 let max = arr[0];

 for(let i = 1; i < arr.length; i++){
  if (arr[i] > max){
    max = arr[i];
  }
 }
 return max; 
}

function large(number){
  return Math.max(...number);
}

console.log(large(numbers));
console.log(largest(numbers));
*/

let numbers = [1,2,3,4,5];

const double = numbers.map(num => num * 2);

const even = numbers.filter(num => num % 2 === 0);

console.log(double);
console.log(even);
console.log(numbers.includes(0));



