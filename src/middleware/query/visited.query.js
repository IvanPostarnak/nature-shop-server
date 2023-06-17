const visitedQuery = (req, res, next) => {
  const visited = parseInt(req.query.visited_total) || -1;
  req.custom.query.visited_total = visited;
  next();
}

module.exports = visitedQuery;