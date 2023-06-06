const ratingQuery = (req, res, next) => {
  const rating = parseInt(req.query.rating) || -1;
  req.rating = rating;
  next();
}

module.exports = ratingQuery;