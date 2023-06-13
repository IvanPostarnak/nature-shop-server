const nameQuery = (req, res, next) => {
  const name = req.query.name || -1;
  req.name = name;
  next();
}

module.exports = nameQuery;