const filterObjectByValue = (object, value = -1) => {
  return Object.fromEntries(
    Object.entries(object).filter(item => item[1] != value)
  );
}

module.exports = filterObjectByValue;