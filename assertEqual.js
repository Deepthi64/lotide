// FUNCTION IMPLEMENTATION
const failed ="Lighthouse Labs !== Bootcamp";
const passed = "1 === 1";
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Error 🛑🛑🛑:assertion failed ${failed}`);
  } else {
    console.log(`Error ✔✔✔: assertion passed  ${passed}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
