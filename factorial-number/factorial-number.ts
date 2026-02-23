export const factorialIterative = function (number: number) {
  let result = 1;

  // prettier-ignore
  for (let i = number; i > 1; --i)
    result *= i;

  return result;
};

export const factorialRecursive = function (number: number): number {
  // prettier-ignore
  if (number <= 1 )
    return 1; // we'll use 1 for negative numbers also

  return number * factorialRecursive(number - 1);
};

/*
  TIME COMPLEXITIES
    Worst Case => O(n)
    Average Case => O(n)
    Best Case => O(1)

  SPACE COMPLEXITY
    O(1) => for Iterative Solution
    O(n) => for Recursive Solution

  Asymptotic Notations
    Omega =>  Ω(1)
    Theta => Θ(n) ==> for Worst Case
    Big O => O(n)
*/
