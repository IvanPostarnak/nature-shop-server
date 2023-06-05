const authorIdQuery = (req, res, next) => {
  const author_id = parseInt(req.query.author_id) || -1;
  req.author_id = author_id;
  next();
}

module.exports = authorIdQuery;