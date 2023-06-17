const methodQuery = (req, res, next) => {
  const method = req.query.method || -1;
  req.custom.query.method = method;
  next();
};

module.exports = methodQuery;