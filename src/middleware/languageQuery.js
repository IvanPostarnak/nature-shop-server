const languageQuery = (req, res, next) => {
  const language = parseInt(req.query.language) || -1;
  req.language = language;
  next();
}

module.exports = languageQuery;