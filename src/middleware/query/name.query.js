const nameQuery = (req, res, next) => {
  const name = req.query.name || -1;
  req.custom.query.name = name;
  next();
}

module.exports = nameQuery;