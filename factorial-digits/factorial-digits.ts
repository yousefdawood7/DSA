export const factorialDigitsFormula = function (number: number) {
  // This Solution using Stirling's approximation

  // prettier-ignore
  if (number < 0)
    return 0;

  // prettier-ignore
  if (number === 0 || number === 1)
    return 1;

  return (
    Math.floor(
      number * Math.log10(number / Math.E) +
        0.5 * Math.log10(2 * Math.PI * number),
    ) + 1
  );
};

/*
  TIME COMPLEXITIES
    Worst Case => O(1)
    Average Case => O(1)
    Best Case => O(1)
  
  SPACE COMPLEXITY ==> O(1)
  
  Asymptotic Notations
    Omega =>  Ω(1)
    Theta => Θ(1)
    Big O => O(1)
*/

export const factorialDigitsRecursive = function (
  number: number,
  accm: number = 0,
): number {
  // prettier-ignore
  if (number < 0)
    return 0;

  // prettier-ignore
  if (number === 0 || number === 1)
    return accm + 1;

  return Math.floor(
    factorialDigitsRecursive(number - 1, accm + Math.log10(number)),
  );
};

/*
  TIME COMPLEXITIES
    Worst Case => O(n)
    Average Case => O(n)
    Best Case => O(1)
  
  SPACE COMPLEXITY ==> O(n)
  
  Asymptotic Notations
    Omega =>  Ω(1)
    Theta => Θ(n) ==> for Worst Case
    Big O => O(n)
*/

export const factorialDigitsFormulaIterative1 = function (number: number) {
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

export const factorialDigitsIterative2 = function (number: number) {
  let result = 1;
  let digitCount = 0;

  // prettier-ignore
  for (let i = number; i > 1; --i)
    result *= i;

  // prettier-ignore
  for (let i = result; i >= 1; i /= 10)
    ++digitCount;
  // Here you Calculated based on N! so the complexity would be O(nlog(n))

  return digitCount;
};

/*
  TIME COMPLEXITIES
    Worst Case => O(nlog(n))
    Average Case => O(nlog(n))
    Best Case => O(1)
  
  SPACE COMPLEXITY ==> O(1)
  
  Asymptotic Notations
    Omega =>  Ω(1)
    Theta => Θ(nlog(n)) ==> for Worst Case
    Big O => O(nlog(n))
*/

export const factorialDigitsIterative3 = function (number: number) {
  let result = 0;

  // prettier-ignore
  for (let i = number; i > 0; --i)
    result += (Math.log10(i))

  return Math.floor(result) + 1;
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
