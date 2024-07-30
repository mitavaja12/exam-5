let originalArray = [1, 2, 3, 4, 5];
let rotatePositions = 2;
let rotatedArray = [];

let effectivePositions = rotatePositions % originalArray.length;

let endPart = originalArray.slice(originalArray.length - effectivePositions);

let startPart = originalArray.slice(0, originalArray.length - effectivePositions);

rotatedArray = endPart.concat(startPart);

console.log(rotatedArray); 
