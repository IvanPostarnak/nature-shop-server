const titleQuery = (req, res, next) => {
  const title = req.query.title || -1;
  req.title = title;
  next();
}

module.exports = titleQuery;