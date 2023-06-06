const authorQuery = (req, res, next) => {
  const author = parseInt(req.query.author) || -1;
  req.author = author;
  next();
}

module.exports = authorQuery;