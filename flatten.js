


const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenedArray = flattenedArray.concat(array[i]);
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};

module.exports = { flatten };