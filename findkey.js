const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Error 🛑🛑🛑: assertion failed - expected ${expected}, but got ${actual}`);
  } else {
    console.log(`Success ✔✔✔: assertion passed - both are ${actual}`);
  }
};
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
assertEqual(result1, "noma"); 

const result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4);
assertEqual(result2, undefined); 

const result3 = findKey({
  "key1": { val: "value1" },
  "key2":   { val: "value2" },
  "key3":      { val: "value3" }
}, x => x.val === "value2");
assertEqual(result3, "key2"); 

const result4 = findKey({}, x => x === "value");
assertEqual(result4, undefined); 