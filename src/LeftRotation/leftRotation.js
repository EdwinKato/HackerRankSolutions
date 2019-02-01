export default function leftRotate(array, numberOfRotations) {
  return [
    ...array.slice(numberOfRotations, array.length),
    ...array.slice(0, numberOfRotations),
  ].join(' ');
}
