const createDateQuery = (req, res, next) => {
  const createDate = parseInt(req.query.create_ts) || -1;
  req.custom.query.create_ts = createDate;
  next();
}

module.exports = createDateQuery;