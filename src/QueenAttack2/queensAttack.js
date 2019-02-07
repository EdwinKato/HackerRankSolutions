/* eslint-disable camelcase, no-unused-vars */
export default function queensAttack(n, k, r_q, c_q, obstacles) {
  let rowRightObstacle = -1;
  let columnRightObstacle = -1;
  const rowBottomRightObstacle = -1;
  const columnBottomRightObstacle = -1;
  const rowBottomObstacle = -1;
  const columnBottomObstacle = -1;
  const rowBottomLeftObstacle = -1;
  const columnBottomLeftObstacle = -1;
  const rowLeftObstacle = -1;
  const columnLeftObstacle = -1;
  const rowTopLeftObstacle = -1;
  const columnTopLeftObstacle = -1;
  const rowTopObstacle = -1;
  const columnTopObstacle = -1;
  const rowTopRightObstacle = -1;
  const columnTopRightObstacle = -1;

  let totalSteps = 0;

  for (let i = 0; i < k; i += 1) {
    const rowObstacle = obstacles[i][0];
    const columnObstacle = obstacles[i][1];

    // Right
    if (
      columnObstacle > c_q
      && rowObstacle === r_q
      && (columnObstacle < columnRightObstacle || rowRightObstacle === -1)
    ) {
      rowRightObstacle = rowObstacle;
      columnRightObstacle = columnObstacle;
    }

    // Bottom right
    if (rowBottomObstacle) {
      // Add code here
    }

    // Bottom
    if (rowBottomObstacle) {
      // Add code here
    }

    // Bottom left
    if (rowBottomObstacle) {
      // Add code here
    }

    // Left
    if (rowBottomObstacle) {
      // Add code here
    }

    // Top left
    if (rowBottomObstacle) {
      // Add code here
    }

    // Top
    if (rowBottomObstacle) {
      // Add code here
    }

    // Top right
    if (rowBottomObstacle) {
      // Add code here
    }
  }

  // R B L T
  totalSteps
    += columnRightObstacle !== -1 ? columnBottomRightObstacle - c_q - 1 : n - c_q;
  totalSteps
    += rowBottomObstacle !== -1 ? r_q - rowBottomObstacle - 1 : r_q - 1;
  totalSteps
    += columnRightObstacle !== -1 ? c_q - columnLeftObstacle - 1 : c_q - 1;
  totalSteps += rowTopObstacle !== -1 ? r_q - rowTopObstacle - 1 : n - r_q;

  // BR BL TL TR
  totalSteps
    += columnBottomRightObstacle !== -1
      ? columnBottomRightObstacle - c_q - 1
      : Math.min(r_q - 1, n - c_q);
  totalSteps
    += rowBottomLeftObstacle !== -1
      ? c_q - columnBottomLeftObstacle - 1
      : Math.min(r_q - 1, c_q - 1);
  totalSteps
    += columnTopLeftObstacle !== -1
      ? c_q - columnTopLeftObstacle - 1
      : Math.min(n - r_q, c_q - 1);
  totalSteps
    += rowTopRightObstacle !== -1
      ? columnTopRightObstacle - c_q - 1
      : Math.min(n - r_q, n - c_q);

  return totalSteps;
}
