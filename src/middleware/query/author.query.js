const authorQuery = (req, res, next) => {
  const author = parseInt(req.query.author) || -1;
  req.custom.query.author = author;
  next();
}

module.exports = authorQuery;