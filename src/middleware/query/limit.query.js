const limitQuery = (req, res, next) => {
  const limit = parseInt(req.query.limit) || -1;
  req.custom.query.limit = limit;
  next();
}

module.exports = limitQuery;