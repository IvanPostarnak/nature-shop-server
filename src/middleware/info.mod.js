const infoMod = (req, res, next) => {
  const info = req.query.info_mod || -1;
  req.custom.info_mod = info;
  next();
};

module.exports = infoMod;