const configureTableQuery = require('../../../src/helpers/configureTableQuery');

const testTable = {name: 'test', column: 'test_id'};
const testArr = [
  {start: 10, end: 20},
  {author: 7, language: 1},
  {rating: 4, votes_count: 5},
  {visited_total: 4},
  {title: 'title', content: 'content'},
  {name: 'name', id: 1, method: 'OR', limit: 20}
];

describe('configureTableQuery(queryObj, table)', () => {
  test('Returns [query] for queryObj (testArr[0]) and table (testTable)', () => {
    expect(configureTableQuery(testArr[0], testTable)).toBe(
      `SELECT * FROM ${testTable.name} WHERE (${testTable.column} >= ${testArr[0].start} AND ${testTable.column} <= ${testArr[0].end})`
    );
  });
  test('Returns [query] for queryObj (testArr[1]) and table (testTable)', () => {
    expect(configureTableQuery(testArr[1], testTable)).toBe(
      `SELECT * FROM ${testTable.name} WHERE (${testTable.column} >= 0) AND (author_id = ${testArr[1].author}) AND (language_id = ${testArr[1].language})`
    );
  });
  test('Returns [query] for queryObj (testArr[2]) and table (testTable)', () => {
    expect(configureTableQuery(testArr[2], testTable)).toBe(
      `SELECT * FROM ${testTable.name} WHERE (${testTable.column} >= 0) AND (rating >= ${testArr[2].rating}) AND (votes_count >= ${testArr[2].votes_count})`
    );
  });
  test('Returns [query] for queryObj (testArr[3]) and table (testTable)', () => {
    expect(configureTableQuery(testArr[3], testTable)).toBe(
      `SELECT * FROM ${testTable.name} WHERE (${testTable.column} >= 0) AND (visited_total >= ${testArr[3].visited_total})`
    );
  });
  test('Returns [query] for queryObj (testArr[4]) and table (testTable)', () => {
    expect(configureTableQuery(testArr[4], testTable)).toBe(
      `SELECT * FROM ${testTable.name} WHERE (${testTable.column} >= 0) AND (title ILIKE '%${testArr[4].title}%') AND (content ILIKE '%${testArr[4].content}%')`
    );
  });
  test('Returns [query] for queryObj (testArr[5]) and table (testTable)', () => {
    expect(configureTableQuery(testArr[5], testTable)).toBe(
      `SELECT * FROM ${testTable.name} WHERE (${testTable.column} >= 0) ${testArr[5].method} (name ILIKE '%${testArr[5].name}%') ${testArr[5].method} (${testTable.column} = ${testArr[5].id}) LIMIT ${testArr[5].limit}`
    );
  });
});