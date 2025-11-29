const student1 = {
  name: 'John',
  age: 22,
  grade: 'A',
  address: '#123 A. Bonifacio Dela Paz, Pasig City',
  introduce: () => {console.log(`Hi, I am ${name} and I am ${age} years old.`)},
}

const students = [
  { name: 'john', age: 19},
  { name: 'Maria', age: 20},
  { name: 'Peter', age: 21},
  { name: 'Lara', age: 22}
];

students.forEach(student => {
  console.log(student.name);
});
/*
const key = Object.keys(student);

for (let i = 0; i < key.length; i++){
  console.log(key[i]);
  console.log(student[key[i]]);
}

for (let key in student){
  console.log(key);
  console.log(student[key]);
}
*/

