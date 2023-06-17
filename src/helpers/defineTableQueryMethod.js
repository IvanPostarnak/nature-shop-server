const defineTableQueryMethod = (keyword) => {
  const methodsArray = ['AND', 'OR'];
  const defaultMethod = methodsArray[0];

  if (keyword != undefined) {
    const upperKeyword = keyword.toUpperCase();
    return methodsArray.includes(upperKeyword) ? upperKeyword : defaultMethod;
  } else {
    return defaultMethod;
  }
};

module.exports = defineTableQueryMethod;