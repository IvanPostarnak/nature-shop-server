const loggerURL = (req, res, next) => {
  console.log(req.originalUrl);
  next();
}

module.exports = loggerURL;