const words = ["ground", "control", "to", "major", "tom"];
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
   // console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

// test case using map method to get nums array mutliplied by 2

const nums = [1, 2, 3, 4, 5];
const expected = [2, 4, 6, 8, 10];

const actual = map(nums, num => num * 2);

assertArraysEqual(actual, expected);

// test case using map method to output the length of each element in the given array

const  array = ["hello", "carole", "how", "are", "you"];
const outputArray= [5, 6, 3, 3, 3];

const givenArray = map(array, array => array.length);

assertArraysEqual(givenArray, outputArray);

// test case using map method to check the grades using assertArraysEqual function.

const students = [  { name: "Alice", age: 22, grade: "A" },  { name: "Bob", age: 21, grade: "B" },  { name: "Charlie", age: 20, grade: "C" }];
const grades = ["A", "B", "A"];

const result = map(students, student => student.grade);

assertArraysEqual(result, grades);

