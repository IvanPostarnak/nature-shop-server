const methodQuery = (req, res, next) => {
  const method = req.query.method || -1;
  req.method = method;
  next();
};

module.exports = methodQuery;