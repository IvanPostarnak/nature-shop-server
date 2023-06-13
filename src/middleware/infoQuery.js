const infoQuery = (req, res, next) => {
  const info = req.query.info_mod || -1;
  req.info_mod = info;
  next();
};

module.exports = infoQuery;