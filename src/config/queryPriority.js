const queryPriority = [
  {name: 'author_id', priority: 5, group: null},
  {name: 'limit', priority: 4, group: 2},
  {name: 'page', priority: 3, group: 2},
  {name: 'start', priority: 2, group: 1},
  {name: 'end', priority: 1, group: 1}
];

module.exports = queryPriority;