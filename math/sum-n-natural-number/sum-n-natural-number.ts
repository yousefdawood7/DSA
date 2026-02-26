export const firstNNaturalNumbers = function (number: number) {
  return (number * (number + 1)) / 2;
};

/*
  TIME COMPLEXITIES
    Worst Case => O(1)
    Average Case => O(1)
    Best Case => O(1)
  
  SPACE COMPLEXITY ===> O(1)
  
  Asymptotic Notations
    Omega =>  Ω(1)
    Theta => Θ(1)
    Big O => O(1)
*/

export const firstNNaturalNumbersIterative = function (number: number) {
  let result = 0;

  // prettier-ignore
  for (let i = 1; i <= number; ++i)
    result += i;

  return result;
};

/*
  TIME COMPLEXITIES
    Worst Case => O(n)
    Average Case => O(n)
    Best Case => O(1)
  
  SPACE COMPLEXITY ===> O(1)
  
  Asymptotic Notations
    Omega =>  Ω(1)
    Theta => Θ(n) ==> for Worst Case
    Big O => O(n)
*/

export const firstNNaturalNumbersNestedIterative = function (number: number) {
  let result = 0;

  // prettier-ignore
  for (let i = 1; i <= number; ++i)
    for (let j = 1; j <= number; ++j)
     ++result;

  // This Will Run For The Same Formula As The First Algorithm in This file
  return result;
};

/*
  TIME COMPLEXITIES
    Worst Case => O(n^2)
    Average Case => O(n^2)
    Best Case => O(1)
  
  SPACE COMPLEXITY ===> O(1)
  
  Asymptotic Notations
    Omega =>  Ω(1)
    Theta => Θ(n^2) ==> for Worst Case
    Big O => O(n^2)
*/

export const firstNNaturalNumbersNestedRecursive = function (
  number: number,
): number {
  // prettier-ignore
  if (number === 0)
    return 0;

  return number + firstNNaturalNumbersNestedRecursive(number - 1);
};

/*
  TIME COMPLEXITIES
    Worst Case => O(n)
    Average Case => O(n)
    Best Case => O(1)
  
  SPACE COMPLEXITY ===> O(n)
  
  Asymptotic Notations
    Omega =>  Ω(1)
    Theta => Θ(n) ==> for Worst Case
    Big O => O(n)
*/
