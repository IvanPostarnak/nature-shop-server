const createDateQuery = (req, res, next) => {
  const createDate = parseInt(req.query.created) || -1;
  req.custom.query.created = createDate;
  next();
}

module.exports = createDateQuery;