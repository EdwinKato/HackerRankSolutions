/*
 * This solution uses the prefix sums algorithm to add values to
 * a range of elements. We then apply the Math.max method to get
 * the maximum value in the new array.
 */
export default function arrayManipulation(n, queries) {
  const newArray = new Array(n).fill(0);
  let max = 0;
  for (let i = 0; i < queries.length; i += 1) {
    newArray[queries[i][0] - 1] += queries[i][2];
    if (queries[i][1] < newArray.length) {
      newArray[queries[i][1]] -= queries[i][2];
    }
  }

  for (let j = 1; j < n; j += 1) {
    newArray[j] += newArray[j - 1];
  }

  newArray.forEach((value) => {
    max = Math.max(max, value);
  });

  return max;
}
