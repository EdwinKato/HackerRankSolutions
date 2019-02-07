import organisingContainers from '../organisingContainers';

describe('organisingContainers', () => {
  it('should return Possible if swaps can be made and Impossible if not', () => {
    const containers = [[1, 1], [1, 1]];
    const secondContainer = [[1, 3, 1], [2, 1, 2], [3, 3, 3]];
    const result = organisingContainers(containers);
    const secondResult = organisingContainers(secondContainer);
    expect(result).toEqual('Possible');
    expect(secondResult).toEqual('Impossible');
  });
});
