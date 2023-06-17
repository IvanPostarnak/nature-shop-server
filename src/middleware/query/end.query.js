const endQuery = (req, res, next) => {
  const end = parseInt(req.query.end) || -1;
  req.custom.query.end = end;
  next();
}

module.exports = endQuery;