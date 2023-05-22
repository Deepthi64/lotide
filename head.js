
const head = function(array) {
  const firstItem = array[0];
  if (array.length === 0) {
    return undefined;
  }
  return firstItem;
};


module.exports = {head};



