const numberToTimestamp = require('./numberToTimestamp');

const configureTableQuery = (queryObj, tableName) => {
  const startOfQuery = `SELECT * from ${tableName} `;
  const query = {
    postIdAddon: `WHERE (${tableName}_id >= ${queryObj.start || 0}${queryObj.end ? ` AND ${tableName}_id <= ${queryObj.end})` : ')'}`,
    authorAddon: `${queryObj.author ? ` AND (author_id = ${queryObj.author})` : ''}`,
    language: `${queryObj.language ? ` AND (language_id = ${queryObj.language})` : ''}`,
    rating: `${queryObj.rating ? ` AND (rating_5 = ${queryObj.rating})` : ''}`,
    votes_number: `${queryObj.votes_number ? ` AND (votes_number_5 >= ${queryObj.votes_number})` : ''}`,
    visited_total: `${queryObj.visited_total ? ` AND (visited_total >= ${queryObj.visited_total})` : ''}`,
    create_ts: `${queryObj.create_ts ? ` AND (create_ts >= to_timestamp('${numberToTimestamp(queryObj.create_ts)}', 'YYYY-MM-DD HH24:MI:SS'))` : ''}`,
    title: `${queryObj.title ? ` AND (title ILIKE '%${queryObj.title}%')` : ''}`,
    content: `${queryObj.content ? ` AND (content ILIKE '%${queryObj.content}%')` : ''}`,
  }
  const limitAddon = `${queryObj.limit ? ` LIMIT ${queryObj.limit}` : ''}`;

  return startOfQuery + Object.values(query).reduce((acc, value) => acc + value, []) + limitAddon;
}

module.exports = configureTableQuery;