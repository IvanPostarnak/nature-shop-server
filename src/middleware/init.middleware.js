const initMiddleware = (req, res, next) => {
  req.custom = {
    query: {

    }
  };
  next();
};

module.exports = initMiddleware;