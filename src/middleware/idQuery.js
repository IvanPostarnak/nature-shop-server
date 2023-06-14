const idQuery = (req, res, next) => {
  const id = req.query.id || -1;
  req.id = id;
  next();
};

module.exports = idQuery;