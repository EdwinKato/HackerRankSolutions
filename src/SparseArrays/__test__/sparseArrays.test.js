import matchingStrings from '../sparseArrays';

describe('matchingStrings', () => {
  it('should return an array of occurrences of the matching strings', () => {
    const strings = ['aba', 'baba', 'aba', 'xzxb'];
    const queries = ['aba', 'xzxb', 'ab'];
    const result = matchingStrings(strings, queries);
    expect(result).toEqual([2, 1, 0]);
  });
});
