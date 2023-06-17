const contentQuery = (req, res, next) => {
  const content = req.query.content || -1;
  req.custom.query.content = content;
  next();
}

module.exports = contentQuery;