import catAndMouse from '../catAndMouse';

describe('catAndMouse', () => {
  it('should return first cat to mouse', () => {
    const result = catAndMouse(1, 2, 4);
    expect(result).toBe('Cat B');
  });

  it('should return mouse if both cats fail', () => {
    const result = catAndMouse(0, 10, 5);
    expect(result).toBe('Mouse C');
  });
});
