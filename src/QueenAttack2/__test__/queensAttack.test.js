import queensAttack from '../queensAttack';

describe('matchingStrings', () => {
  it('should return the number of moves', () => {
    const obstacles = [[5, 5], [4, 2], [2, 3]];
    const result = queensAttack(5, 3, 4, 3, obstacles);
    expect(result).toEqual(10);
  });
});
