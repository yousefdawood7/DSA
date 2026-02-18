export const getQuadraticSolutions = function (
  a: number,
  b: number,
  c: number,
) {
  const discriminant = b ** 2 - 4 * a * c;

  // prettier-ignore
  if (discriminant < 0)
    return -1; // Imaginary solutions

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
