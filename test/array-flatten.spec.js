const { flatten } = require('../src/array-flatten')

describe('Array Flatten Test Suite', () => {
  it('flatten is a Function', () => {
    expect(flatten).toBeInstanceOf(Function);
  });

  it('Deep flattens an array [1, [2], [[3], 4], 5]', () => {
    expect(flatten([1, [2], [[3], 4], 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('Deep flattens an array', () => {
    expect(flatten([1, 2, [3, 4], 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('Deep flattens an array [1, 2, 3, 4, 5]', () => {
    expect(flatten([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('Deep flattens an array []', () => {
    expect(flatten([])).toEqual([]);
  });

  it('For non array input (undefined) returns an empty array', () => {
    expect(flatten(undefined)).toEqual([]);
  });

  it('For non array input ("") returns an empty array', () => {
    expect(flatten("")).toEqual([]);
  });

  it('For non array input (null) returns an empty array', () => {
    expect(flatten(null)).toEqual([]);
  });

  it('For non array input (6) returns an empty array', () => {
    expect(flatten(6)).toEqual([]);
  });

  it('For non array input ({}) returns an empty array', () => {
    expect(flatten({})).toEqual([]);
  });
})
