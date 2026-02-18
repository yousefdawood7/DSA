export const countDigits1 = function (number: number) {
  let numOfDigits = 0;

  // prettier-ignore
  if (number === 0)
    return 1;

  while (number !== 0) {
    number = Math.trunc(number / 10);
    ++numOfDigits;
  }

  return numOfDigits;
};

export const countDigits2 = function (number: number): number {
  // prettier-ignore
  if (number === 0)
    return 1;

  // prettier-ignore
  if (Math.abs(number) < 1)
    return 0;

  return 1 + countDigits2(number / 10);
};

export const countDigits3 = function (number: number) {
  // prettier-ignore
  if (number === 0)
    return 1;

  return Math.trunc(Math.log10(Math.abs(number))) + 1;
};

/*
  TIME COMPLEXITIES
    Worst Case => O(log(n))
    Average Case => O(log(n))
    Best Case => O(1)
  
  SPACE COMPLEXITY
    O(1) => for Iterative Solution
    O(log(n)) => for Recursive Solution
  
  Asymptotic Notations
    Omega =>  Ω(1)
    Theta => Θ(log(n)) ==> for Worst Case
    Big O => O(log(n))
*/
