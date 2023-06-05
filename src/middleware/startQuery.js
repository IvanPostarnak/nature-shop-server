const startQuery = (req, res, next) => {
  const start = parseInt(req.query.start) || -1;
  req.start = start;
  next();
}

module.exports = startQuery;