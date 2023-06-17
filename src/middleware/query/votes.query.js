const votesQuery = (req, res, next) => {
  const votes = parseInt(req.query.votes_count) || -1;
  req.custom.query.votes_count = votes;
  next();
}

module.exports = votesQuery;