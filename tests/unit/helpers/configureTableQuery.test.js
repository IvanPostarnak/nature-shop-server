const configureTableQuery = require('../../../src/helpers/configureTableQuery');

const testTable = {name: 'test', column: 'test_id'};
const testObj1 = {start: 10, end: 20};
const testObj2 = {author: 7, language: 1};
const testObj3 = {rating: 4, votes_count: 5};
const testObj4 = {visited_total: 4};
const testObj5 = {title: 'title', content: 'content'};
const testObj6 = {name: 'name', id: 1, method: 'OR', limit: 20};

describe('configureTableQuery(queryObj, table)', () => {
  test('Returns [query] for queryObj (testObj1) and table (testTable)', () => {
    expect(configureTableQuery(testObj1, testTable)).toBe(
      `SELECT * FROM ${testTable.name} WHERE (${testTable.column} >= ${testObj1.start} AND ${testTable.column} <= ${testObj1.end})`
    );
  });
  test('Returns [query] for queryObj (testObj2) and table (testTable)', () => {
    expect(configureTableQuery(testObj2, testTable)).toBe(
      `SELECT * FROM ${testTable.name} WHERE (${testTable.column} >= 0) AND (author_id = ${testObj2.author}) AND (language_id = ${testObj2.language})`
    );
  });
  test('Returns [query] for queryObj (testObj3) and table (testTable)', () => {
    expect(configureTableQuery(testObj3, testTable)).toBe(
      `SELECT * FROM ${testTable.name} WHERE (${testTable.column} >= 0) AND (rating >= ${testObj3.rating}) AND (votes_count >= ${testObj3.votes_count})`
    );
  });
  test('Returns [query] for queryObj (testObj4) and table (testTable)', () => {
    expect(configureTableQuery(testObj4, testTable)).toBe(
      `SELECT * FROM ${testTable.name} WHERE (${testTable.column} >= 0) AND (visited_total >= ${testObj4.visited_total})`
    );
  });
  test('Returns [query] for queryObj (testObj5) and table (testTable)', () => {
    expect(configureTableQuery(testObj5, testTable)).toBe(
      `SELECT * FROM ${testTable.name} WHERE (${testTable.column} >= 0) AND (title ILIKE '%${testObj5.title}%') AND (content ILIKE '%${testObj5.content}%')`
    );
  });
  test('Returns [query] for queryObj (testObj6) and table (testTable)', () => {
    expect(configureTableQuery(testObj6, testTable)).toBe(
      `SELECT * FROM ${testTable.name} WHERE (${testTable.column} >= 0) ${testObj6.method} (name ILIKE '%${testObj6.name}%') ${testObj6.method} (${testTable.column} = ${testObj6.id}) LIMIT ${testObj6.limit}`
    );
  });
});