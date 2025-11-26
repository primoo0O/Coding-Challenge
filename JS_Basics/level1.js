//1
console.log("Welcome to My JavaScript Basics Program!");

//2
let name = "John";
let age = 21;
let student = true;
let temperature = 150;

//3
let concatenation = "My name is " + name + " and I am " + age + " years old.";
let templateLiteral = `My name is ${name} and I am ${age} years old.`;

console.log(concatenation);
console.log(templateLiteral);

//4
let n1 = 1;
let n2 = 2;

console.log(n1+n2);
console.log(n2-n1);
console.log(n1*n2);
console.log(n1/n2);
console.log(n2%n1);

//5
if (temperature < 20){
  console.log("It's cold");
}
else if ( temperature >= 20 && temparature <= 30 ) {
  console.log("Weather is nice");
}
else {
  console.log("It's hot");
}

//6 

let counter = 1;
counter++;
counter++;
counter++;
counter--;

console.log(counter);

//7

let isUndefined;
let isNull = null;

console.log(isUnfined);
console.log(isNull);



// Here is the quiz answer
/*
1. c 
2. c
3. b
4. c
5. c - b
6. TRUE
7. TRUE - FALSE
8. TRUE
9. TRUE
10.TRUE
11. 6
12. boolean
13, 0.377 - 2
14. Hello World
15. Hi, Nico - Hi, Nico!
16. 
if (temperature < 20){
  console.log("It's cold");
}

else if ( temperature >= 20 && temperature <= 30) {
    console.log("Weather is nice");
  }

else {
  console.log("It's hot");}
*/