export default function formingMagicSquare(s) {
  const possibleSquares = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
  ];
  const cost = [];
  for (let p = 0; p < possibleSquares.length; p += 1) {
    let squareCost = 0;
    for (let m = 0; m < 3; m += 1) {
      for (let i = 0; i < 3; i += 1) {
        squareCost += Math.abs(s[m][i] - possibleSquares[p][m][i]);
      }
    }
    cost.push(squareCost);
  }

  return Math.min(...cost);
}
