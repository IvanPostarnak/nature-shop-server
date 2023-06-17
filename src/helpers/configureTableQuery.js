const defineTableQueryMethod = require('./defineTableQueryMethod');
const numberToTimestamp = require('./numberToTimestamp');

const configureTableQuery = (queryObj, table) => {
  const method = defineTableQueryMethod(queryObj.method);

  const startOfQuery = `SELECT * from ${table.name} `;
  const query = {
    range: `WHERE (${table.column} >= ${queryObj.start || 0}${queryObj.end ? ` ${method} ${table.column} <= ${queryObj.end})` : ')'}`,
    author: `${queryObj.author ? ` ${method} (author_id = ${queryObj.author})` : ''}`,
    language: `${queryObj.language ? ` ${method} (language_id = ${queryObj.language})` : ''}`,
    rating: `${queryObj.rating ? ` ${method} (rating_5 = ${queryObj.rating})` : ''}`,
    votes_number: `${queryObj.votes_number ? ` ${method} (votes_number_5 >= ${queryObj.votes_number})` : ''}`,
    visited_total: `${queryObj.visited_total ? ` ${method} (visited_total >= ${queryObj.visited_total})` : ''}`,
    create_ts: `${queryObj.create_ts ? ` ${method} (create_ts >= to_timestamp('${numberToTimestamp(queryObj.create_ts)}', 'YYYY-MM-DD HH24:MI:SS'))` : ''}`,
    title: `${queryObj.title ? ` ${method} (title ILIKE '%${queryObj.title}%')` : ''}`,
    content: `${queryObj.content ? ` ${method} (content ILIKE '%${queryObj.content}%')` : ''}`,
    name: `${queryObj.name ? ` ${method} (name ILIKE '%${queryObj.name}%')` : ''}`,
    id: `${queryObj.id ? ` ${method} (${table.column} = ${queryObj.id})` : ''}`
  }
  const limitAddon = `${queryObj.limit ? ` LIMIT ${queryObj.limit}` : ''}`;

  return startOfQuery + Object.values(query).reduce((acc, value) => acc + value, []) + limitAddon;
}

module.exports = configureTableQuery;