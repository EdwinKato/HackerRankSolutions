import leftRotate from '../leftRotation';

describe('leftRotation', () => {
  it('should rotate the array four times', () => {
    const testArray = [1, 2, 3, 4, 5];
    const result = leftRotate(testArray, 4);
    expect(result).toBe('5 1 2 3 4');
  });
});
