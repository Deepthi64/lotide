const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
      return;
    }
  }
  console.log(`✔️✔️✔️ Assertion Passed: ${arr1} === ${arr2}`);
};

const tail = function(array) {
  return array.slice(1);
};

const expected = ["Lighthouse", "Labs"];
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, expected);