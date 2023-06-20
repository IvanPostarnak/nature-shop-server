const defineTableQueryMethod = require('./defineTableQueryMethod');
const numberToTimeString = require('./numberToTimeString');

const configureTableQuery = (queryObj, table) => {
  const method = defineTableQueryMethod(queryObj.method);

  const startOfQuery = `SELECT * FROM ${table.name} `;
  const query = {
    range: `WHERE (${table.column} >= ${queryObj.start || 0}${queryObj.end ? ` ${method} ${table.column} <= ${queryObj.end})` : ')'}`,
    author: `${queryObj.author ? ` ${method} (author_id = ${queryObj.author})` : ''}`,
    language: `${queryObj.language ? ` ${method} (language_id = ${queryObj.language})` : ''}`,
    rating: `${queryObj.rating ? ` ${method} (rating >= ${queryObj.rating})` : ''}`,
    votes_count: `${queryObj.votes_count ? ` ${method} (votes_count >= ${queryObj.votes_count})` : ''}`,
    visited_total: `${queryObj.visited_total ? ` ${method} (visited_total >= ${queryObj.visited_total})` : ''}`,
    created: `${queryObj.created ? ` ${method} (created >= to_timestamp('${numberToTimeString(queryObj.created)}', 'YYYY-MM-DD HH24:MI:SS'))` : ''}`,
    title: `${queryObj.title ? ` ${method} (title ILIKE '%${queryObj.title}%')` : ''}`,
    content: `${queryObj.content ? ` ${method} (content ILIKE '%${queryObj.content}%')` : ''}`,
    name: `${queryObj.name ? ` ${method} (name ILIKE '%${queryObj.name}%')` : ''}`,
    id: `${queryObj.id ? ` ${method} (${table.column} = ${queryObj.id})` : ''}`
  }
  const limitAddon = `${queryObj.limit ? ` LIMIT ${queryObj.limit}` : ''}`;

  return startOfQuery + Object.values(query).reduce((acc, value) => acc + value, []) + limitAddon;
}

module.exports = configureTableQuery;