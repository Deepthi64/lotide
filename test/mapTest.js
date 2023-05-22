const { assertArraysEqual } = require('../assertArraysEqual');
const { map } = require('../map');

const nums = [1, 2, 3, 4, 5];
const expected = [2, 4, 6, 8, 10];
const actual = map(nums, num => num * 2);
assertArraysEqual(actual, expected);

const  array = ["hello", "carole", "how", "are", "you"];
const outputArray= [5, 6, 3, 3, 3];
const givenArray = map(array, array => array.length);
assertArraysEqual(givenArray, outputArray);


const students = [  { name: "Alice", age: 22, grade: "A" },  { name: "Bob", age: 21, grade: "B" },  { name: "Charlie", age: 20, grade: "C" }];
const grades = ["A", "B", "A"];
const result = map(students, student => student.grade);
assertArraysEqual(result, grades);
