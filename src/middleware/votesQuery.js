const votesQuery = (req, res, next) => {
  const votes = parseInt(req.query.votes_number) || -1;
  req.votes_number = votes;
  next();
}

module.exports = votesQuery;