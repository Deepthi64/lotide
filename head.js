
const head = function(array) {
  const firstItem = array[0];
  if (array.length === 0) {
    return undefined;
  }
  return firstItem;
};
//assertEqual(head([3]), 3);
//assertEqual(head([]), undefined);
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = {head};



