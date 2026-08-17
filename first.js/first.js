const sum = (a, b) => a + b;

console.log(sum(1)); // NaN
console.log(sum()); // NaN
console.log(sum(12, 21)); // 33

const num = [1, 2, 3, 4, 5, 5, 6];

const even = num.filter((i) => i % 2 == 0);
console.log(num); // [1,2,3,4,5,5,6]
console.log(even); // [2,4,6]

const square = even.map((i) => i * i);
console.log(square); // [4,16,36]

console.log(((i, s) => i + s)(5, 10)); // 15

console.log(sum); // Prints the function

const student = {
  name: "chirag",
  age: 34,
  branch: "cse",
};
const { name, age, branch } = student;
// const name = student.name;
<<<<<<< HEAD
=======

>>>>>>> d9a6087 (new_day)
// const age = student.age;
// const branch = student.branch;
console.log(age, name, branch);
