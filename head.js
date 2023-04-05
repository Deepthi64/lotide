const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  }
};
function head(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};
assertEqual(head([3]), 3);
assertEqual(head([]), undefined);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

