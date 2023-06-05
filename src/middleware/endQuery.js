const endQuery = (req, res, next) => {
  const end = parseInt(req.query.end) || -1;
  req.end = end;
  next();
}

module.exports = endQuery;