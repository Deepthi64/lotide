// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("Error 🛑🛑🛑: assertion failed");
  } else {
    console.log("Error ✔✔✔: assertion passed");
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
