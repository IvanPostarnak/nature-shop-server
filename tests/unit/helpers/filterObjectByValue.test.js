const filterObjectByValue = require('../../../src/helpers/filterObjectByValue');

const testObject = {
  f1: -1,
  f2: 'abc',
  f3: null,
  f4: undefined,
  f5: NaN
};

describe('filterObjectByValue(object, value)', () => {
  test('Returns [filtered] Object for object (testObject) and value ()', () => {
    expect(filterObjectByValue(testObject)).toStrictEqual({
      f2: 'abc',
      f3: null,
      f4: undefined,
      f5: NaN
    });
  });

  test('Returns [filtered] Object for object (testObject) and value (undefined)', () => {
    expect(filterObjectByValue(testObject, undefined)).toStrictEqual({
      f2: 'abc',
      f3: null,
      f4: undefined,
      f5: NaN
    });
  });

  test('Returns [filtered] Object for object (testObject) and value (NaN)', () => {
    expect(filterObjectByValue(testObject, NaN)).toStrictEqual({
      f1: -1,
      f2: 'abc',
      f3: null,
      f4: undefined,
      f5: NaN
    });
  });

  test('Returns [filtered] Object for object (testObject) and value (null)', () => {
    expect(filterObjectByValue(testObject, null)).toStrictEqual({
      f1: -1,
      f2: 'abc',
      f5: NaN
    });
  });

  test('Returns [filtered] Object for object (testObject) and value (abc)', () => {
    expect(filterObjectByValue(testObject, 'abc')).toStrictEqual({
      f1: -1,
      f3: null,
      f4: undefined,
      f5: NaN
    });
  });

  test('Returns [same] Object for object (testObject) and value (ivalid)', () => {
    expect(filterObjectByValue(testObject, 'invalid')).toStrictEqual({
      f1: -1,
      f2: 'abc',
      f3: null,
      f4: undefined,
      f5: NaN
    });
  });
});