const getQuadraticSolutions = function (a: number, b: number, c: number) {
  const discriminant = b ** 2 - 4 * a * c;

  // prettier-ignore
  if (discriminant < 0)
    return -1;

  const firstSolution = Math.floor((-b + Math.sqrt(discriminant)) / (2 * a));
  const secondSolution = Math.floor((-b - Math.sqrt(discriminant)) / (2 * a));

  // prettier-ignore
  if (firstSolution > secondSolution)
    return [firstSolution, secondSolution];
  return [secondSolution, firstSolution];
};

/*
  TIME COMPLEXITIES
    Worst Case => Θ(1)
    Average Case => Θ(1)
    Best Case => Θ(1)
  
  SPACE COMPLEXITY ==> Θ(1)
*/

console.log(getQuadraticSolutions(1, -5, 6)); // → [3, 2]
console.log(getQuadraticSolutions(1, 2, 1)); // → [-1, -1]
console.log(getQuadraticSolutions(1, 0, 1)); // → -1
console.log(getQuadraticSolutions(1, -2, 2)); // → -1
console.log(getQuadraticSolutions(2, -4, 2)); // → [1, 1] X
console.log(getQuadraticSolutions(1, -3, -4)); // → [4, -1]
console.log(getQuadraticSolutions(1, -10, 24)); // → [6, 4]
console.log(getQuadraticSolutions(1, 0, -4)); // → [2, -2]
console.log(getQuadraticSolutions(1, 5, 6)); // → [-2, -3]
console.log(getQuadraticSolutions(1, 0, -2)); // → [1, -2]
console.log(getQuadraticSolutions(1, -5, 2)); // → [4, 0]
console.log(getQuadraticSolutions(1, 4, 2)); // → [-1, -4]
console.log(getQuadraticSolutions(1, -100, 1)); // → [99, 0]
console.log(getQuadraticSolutions(1, 100, 1)); // → [-1, -100]
console.log(getQuadraticSolutions(2, 5, 2)); // → [-1, -2] X
console.log(getQuadraticSolutions(3, 6, 3)); // → [-1, -1] X
console.log(getQuadraticSolutions(1, 0, 0)); // → [0, 0]
console.log(getQuadraticSolutions(-1, 2, 3)); // → [3, -1]
console.log(getQuadraticSolutions(-1, 2, -2)); // → -1
console.log(getQuadraticSolutions(1, -1, -6)); // → [3, -2]
