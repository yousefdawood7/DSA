export const factorialDigitsFormula = function (number: number) {
  let result = 1;

  // prettier-ignore
  for (let i = number; i > 1; --i)
    result *= i;

  return Math.floor(Math.log10(result)) + 1;
};

/*
  TIME COMPLEXITIES
    Worst Case => O(n)
    Average Case => O(n)
    Best Case => O(1)
  
  SPACE COMPLEXITY ==> O(1)
  
  Asymptotic Notations
    Omega =>  Ω(1)
    Theta => Θ(n) ==> for Worst Case
    Big O => O(n)
*/

export const factorialDigitsIterative = function (number: number) {
  let result = 1;
  let digitCount = 0;

  // prettier-ignore
  for (let i = number; i > 1; --i)
    result *= i;

  // prettier-ignore
  for (let i = result; i >= 1; i /= 10)
    ++digitCount;

  return digitCount;
};

/*
  TIME COMPLEXITIES
    Worst Case => O(n)
    Average Case => O(n)
    Best Case => O(1)
  
  SPACE COMPLEXITY ==> O(1)
  
  Asymptotic Notations
    Omega =>  Ω(1)
    Theta => Θ(n) ==> for Worst Case
    Big O => O(n)
*/
