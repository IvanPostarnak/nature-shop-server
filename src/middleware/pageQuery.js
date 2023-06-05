const pageQuery = (req, res, next) => {
  const page = parseInt(req.query.page) || -1;
  req.page = page;
  next();
}

module.exports = pageQuery;