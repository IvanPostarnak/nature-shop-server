const visitedQuery = (req, res, next) => {
  const visited = parseInt(req.query.visited_total) || -1;
  req.visited_total = visited;
  next();
}

module.exports = visitedQuery;