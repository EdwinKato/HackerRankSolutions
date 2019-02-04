import arrayManipulation from '../arrayManipulation';

describe('arrayManipulation', () => {
  it('should return the maximum value in the array', () => {
    const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
    const result = arrayManipulation(5, queries);
    expect(result).toBe(200);
  });
});
