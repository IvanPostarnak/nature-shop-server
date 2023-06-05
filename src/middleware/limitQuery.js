const limitQuery = (req, res, next) => {
  const limit = parseInt(req.query.limit) || -1;
  req.limit = limit;
  next();
}

module.exports = limitQuery;