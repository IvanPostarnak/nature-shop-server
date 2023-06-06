const numberToTimestamp = require('./numberToTimestamp');

const configureQuery = (queryObj, table) => {
  const startOfQuery = `SELECT * from ${table} `;
  const query = {
    postIdAddon: `WHERE (${table}_id >= ${queryObj.start || 0}${queryObj.end ? ` AND ${table}_id <= ${queryObj.end})` : ')'}`,
    authorAddon: `${queryObj.author ? ` AND (author_id = ${queryObj.author})` : ''}`,
    language: `${queryObj.language ? ` AND (language_id = ${queryObj.language})` : ''}`,
    rating: `${queryObj.rating ? ` AND (rating_5 = ${queryObj.rating})` : ''}`,
    votes_number: `${queryObj.votes_number ? ` AND (votes_number_5 >= ${queryObj.votes_number})` : ''}`,
    visited_total: `${queryObj.visited_total ? ` AND (visited_total >= ${queryObj.visited_total})` : ''}`,
    create_ts: `${queryObj.create_ts ? ` AND (create_ts >= to_timestamp('${numberToTimestamp(queryObj.create_ts)}', 'YYYY-MM-DD HH24:MI:SS'))` : ''}`
  }
  const limitAddon = `${queryObj.limit ? ` LIMIT ${queryObj.limit}` : ''}`;

  return startOfQuery + Object.values(query).reduce((acc, value) => acc + value, []) + limitAddon;
}

module.exports = configureQuery;