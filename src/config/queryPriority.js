const queryPriority = [
  {name: 'language', priority: 8, group: null},
  {name: 'author', priority: 7, group: null},
  {name: 'rating', priority: 6, group: null},
  {name: 'votes_number', priority: 5, group: null},
  {name: 'visited_total', priority: 4, group: null},
  {name: 'limit', priority: 3, group: 2},
  {name: 'start', priority: 2, group: 1},
  {name: 'end', priority: 1, group: 1}
];

module.exports = queryPriority;