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
const takeUntil = function(array, callback) {
  const results = [];
  for (const element of array) {
    if (callback(element)) {
      return results;
    }
    results.push(element);
  }
  return results;
}
const weather = [ "rainy" , " snow" , "sunny", "chilly"];
  const todayWeather = takeUntil(weather, x => x === "chilly");
  console.log("today weather is ",todayWeather);

