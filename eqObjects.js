const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (const key of object1Keys) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

module.exports = { eqObjects};