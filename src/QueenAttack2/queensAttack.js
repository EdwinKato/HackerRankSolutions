/* eslint-disable camelcase, no-unused-vars */
export default function queensAttack(n, k, r_q, c_q, obstacles) {
  let rowRightObstacle = -1;
  let columnRightObstacle = -1;
  let rowBottomRightObstacle = -1;
  let columnBottomRightObstacle = -1;
  let rowBottomObstacle = -1;
  let columnBottomObstacle = -1;
  let rowBottomLeftObstacle = -1;
  let columnBottomLeftObstacle = -1;
  let rowLeftObstacle = -1;
  let columnLeftObstacle = -1;
  let rowTopLeftObstacle = -1;
  let columnTopLeftObstacle = -1;
  let rowTopObstacle = -1;
  let columnTopObstacle = -1;
  let rowTopRightObstacle = -1;
  let columnTopRightObstacle = -1;

  for (let i = 0; i < k; i += 1) {
    const rowObstacle = obstacles[i][0];
    const columnObstacle = obstacles[i][1];

    // Right
    if (
      (columnObstacle < columnRightObstacle || rowRightObstacle === -1)
      && columnObstacle > c_q
      && rowObstacle === r_q
    ) {
      rowRightObstacle = rowObstacle;
      columnRightObstacle = columnObstacle;
    }

    // Bottom right
    if (
      r_q - rowObstacle === columnObstacle - c_q
      && columnObstacle > c_q
      && rowObstacle < r_q
      && ((rowObstacle > rowBottomRightObstacle
        && columnObstacle < columnBottomRightObstacle)
        || rowBottomRightObstacle === -1)
    ) {
      rowBottomRightObstacle = rowObstacle;
      columnBottomRightObstacle = columnObstacle;
    }

    // Bottom
    if (
      (rowObstacle > rowBottomObstacle || rowBottomObstacle === -1)
      && rowObstacle < r_q
      && columnObstacle === c_q
    ) {
      console.log(`Bottom: (${rowObstacle}, ${columnObstacle})`);
      rowBottomObstacle = rowObstacle;
      columnBottomObstacle = columnObstacle;
    }

    // Bottom left
    if (
      r_q - rowObstacle === c_q - columnObstacle
      && columnObstacle < c_q
      && rowObstacle < r_q
      && ((rowObstacle > rowBottomLeftObstacle
        && columnObstacle > columnBottomLeftObstacle)
        || rowBottomLeftObstacle === -1)
    ) {
      rowBottomLeftObstacle = rowObstacle;
      columnBottomLeftObstacle = columnObstacle;
    }

    // Left
    if (
      (columnObstacle > rowLeftObstacle || rowLeftObstacle === -1)
      && columnObstacle < c_q
      && rowObstacle === r_q
    ) {
      console.log(`Left: (${rowObstacle}, ${columnObstacle})`);
      rowLeftObstacle = rowObstacle;
      columnLeftObstacle = columnObstacle;
    }

    // Top left
    if (
      c_q - columnObstacle === rowObstacle - r_q
      && columnObstacle < c_q
      && rowObstacle > r_q
      && ((rowObstacle < rowTopLeftObstacle
        && columnObstacle > columnTopLeftObstacle)
        || rowTopLeftObstacle === -1)
    ) {
      rowTopLeftObstacle = rowObstacle;
      columnTopLeftObstacle = columnObstacle;
    }

    // Top
    if (
      (rowObstacle < rowTopObstacle || rowTopObstacle === -1)
      && rowObstacle > r_q
      && columnObstacle === c_q
    ) {
      rowTopObstacle = rowObstacle;
      columnTopObstacle = columnObstacle;
    }

    // Top right
    if (
      rowObstacle - r_q === columnObstacle - c_q
      && columnObstacle > c_q
      && rowObstacle > r_q
      && ((rowObstacle < rowTopRightObstacle
        && columnObstacle < columnTopRightObstacle)
        || rowTopRightObstacle === -1)
    ) {
      rowTopRightObstacle = rowObstacle;
      columnTopRightObstacle = columnObstacle;
    }
  }

  const rightSteps = columnRightObstacle !== -1 ? columnRightObstacle - c_q - 1 : n - c_q;
  const bottomSteps = rowBottomObstacle !== -1 ? r_q - rowBottomObstacle - 1 : r_q - 1;
  const leftSteps = columnLeftObstacle !== -1 ? c_q - columnLeftObstacle - 1 : c_q - 1;
  const topSteps = rowTopObstacle !== -1 ? r_q - rowTopObstacle - 1 : n - r_q;
  const bottomRightSteps = columnBottomRightObstacle !== -1
    ? columnBottomRightObstacle - c_q - 1
    : Math.min(r_q - 1, n - c_q);
  const bottomLeftSteps = rowBottomLeftObstacle !== -1
    ? c_q - columnBottomLeftObstacle - 1
    : Math.min(r_q - 1, c_q - 1);
  const topLeftSteps = columnTopLeftObstacle !== -1
    ? c_q - columnTopLeftObstacle - 1
    : Math.min(n - r_q, c_q - 1);
  const topRightSteps = rowTopRightObstacle !== -1
    ? columnTopRightObstacle - c_q - 1
    : Math.min(n - r_q, n - c_q);

  return (
    rightSteps
    + bottomSteps
    + leftSteps
    + topSteps
    + bottomRightSteps
    + bottomLeftSteps
    + topLeftSteps
    + topRightSteps
  );
}
