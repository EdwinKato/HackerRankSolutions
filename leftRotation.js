const leftRotate = (array, numberOfRotations) => {
    return [
        ...array.slice(numberOfRotations, array.length),
        ...array.slice(0,numberOfRotations)
    ];
}

const testArray = [1, 2, 3, 4, 5]
let result = leftRotate(testArray, 4);
console.log(result.join(' '));
