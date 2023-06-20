const numberToTimeString = require('../../../src/helpers/numberToTimeString');

describe('numberToTimeString(number)', () => {
  test('Returns [time string] for number (1407701258)', () => {
    expect(numberToTimeString(1407701258)).toBe('2014-08-10 20:07:38.000');
  });
  test('Returns [time string] for number (1)', () => {
    expect(numberToTimeString(1)).toBe('1970-01-01 00:00:01.000');
  });
  test('Returns [time string] for number (-1)', () => {
    expect(numberToTimeString(-1)).toBe('1969-12-31 23:59:59.000');
  });
  test('Returns [time string] for number (-1407701258)', () => {
    expect(numberToTimeString(-1407701258)).toBe('1925-05-24 03:52:22.000');
  });
  test('Returns [time string] for number (null)', () => {
    expect(numberToTimeString(null)).toBe('1970-01-01 00:00:01.000');
  });
  test('Returns [time string] for number (undefined)', () => {
    expect(numberToTimeString(undefined)).toBe('1970-01-01 00:00:01.000');
  });
});