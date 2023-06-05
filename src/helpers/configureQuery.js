const configureQuery = (queryObj, table) => {
  const startOfQuery = `SELECT * from ${table} `;
  const whereIdAddon = `WHERE (${table}_id >= ${queryObj.start || 0}${queryObj.end ? ` AND ${table}_id <= ${queryObj.end})` : ')'}`;
  const authorAddon = `${queryObj.author_id ? ` AND (author_id = ${queryObj.author_id})` : ''}`;
  const limitAddon = `${queryObj.limit ? ` LIMIT ${queryObj.limit}` : ''}`;

  return startOfQuery + whereIdAddon + authorAddon + limitAddon;
}

module.exports = configureQuery;