const startQuery = (req, res, next) => {
  const start = parseInt(req.query.start) || -1;
  req.custom.query.start = start;
  next();
}

module.exports = startQuery;