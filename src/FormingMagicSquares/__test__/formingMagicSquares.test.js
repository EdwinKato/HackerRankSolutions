import formingMagicSquares from '../formingMagicSquares';

describe('formingMagicSquares', () => {
  it('should return the minimum cost required to transform a square into a magic square', () => {
    const square = [[4, 9, 2], [3, 5, 7], [8, 1, 5]];
    const result = formingMagicSquares(square);
    expect(result).toBe(1);
  });
});
