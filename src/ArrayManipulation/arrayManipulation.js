/*
 * This solution uses the prefix sums algorithm to add values to
 * a range of elements. We then apply the Math.max method to get
 * the maximum value in the new array.
 */
export default function arrayManipulation(arrayLength, queries) {
  const array = new Array(arrayLength).fill(0);
  let max = 0;
  for (let i = 0; i < queries.length; i += 1) {
    array[queries[i][0] - 1] += queries[i][2];
    if (queries[i][1] < array.length) {
      array[queries[i][1]] -= queries[i][2];
    }
  }

  for (let j = 1; j < arrayLength; j += 1) {
    array[j] += array[j - 1];
  }

  array.forEach((value) => {
    max = Math.max(max, value);
  });

  return max;
}
