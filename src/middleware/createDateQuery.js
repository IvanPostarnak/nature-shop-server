const createDateQuery = (req, res, next) => {
  const createDate = parseInt(req.query.create_ts) || -1;
  req.create_ts = createDate;
  next();
}

module.exports = createDateQuery;