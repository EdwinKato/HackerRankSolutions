export default function organizingContainers(container) {
  const add = (a, b) => a + b;
  const containerSum = [];
  const typeSum = [];
  for (let i = 0; i < container.length; i += 1) {
    containerSum.push(container[i].reduce(add, 0));
    let sum = 0;
    for (let j = 0; j < container[i].length; j += 1) {
      sum += container[j][i];
    }
    typeSum.push(sum);
  }
  containerSum.sort((a, b) => a - b);
  typeSum.sort((a, b) => a - b);

  if (JSON.stringify(containerSum) === JSON.stringify(typeSum)) {
    return 'Possible';
  }
  return 'Impossible';
}
