const defineTableQueryMethod = require('../../../src/helpers/defineTableQueryMethod');

describe('defineTableQueryMethod(keyword)', () => {
  test('Returns [AND] for keyword (undefined)', () => {
    expect(defineTableQueryMethod()).toBe('AND');
  });
  test('Returns [OR] for keyword (OR)', () => {
    expect(defineTableQueryMethod('OR')).toBe('OR');
  });
  test('Returns [OR] for keyword (or)', () => {
    expect(defineTableQueryMethod('or')).toBe('OR');
  });
  test('Returns [AND] for keyword (AND)', () => {
    expect(defineTableQueryMethod('AND')).toBe('AND');
  });
  test('Returns [AND] for keyword (and)', () => {
    expect(defineTableQueryMethod('and')).toBe('AND');
  });
  test('Returns [AND] for keyword (aNy_In#$valiD)', () => {
    expect(defineTableQueryMethod('aNy_In#$valiD')).toBe('AND');
  });
});