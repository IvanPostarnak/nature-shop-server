const languageQuery = (req, res, next) => {
  const language = parseInt(req.query.language) || -1;
  req.custom.query.language = language;
  next();
}

module.exports = languageQuery;