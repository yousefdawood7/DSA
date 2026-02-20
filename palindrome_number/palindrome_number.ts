export const isPalindromeNumber = function (number: number) {
  let numberCategory = 10 ** Math.trunc(Math.log10(Math.abs(number))); // 2000 ==> 1000 (10 ** 3)

  let reversedNumber = 0;

  for (let i = number; i >= 1; i /= 10) {
    const numberRHS = Math.trunc(i % 10); // 123 ==> 3
    reversedNumber += numberRHS * numberCategory;
    numberCategory /= 10;
  }

  return number === reversedNumber;
};

export const isPalindromeNumberIterative = function (number: number) {
  let reversed = 0;

  for (let i = number; i >= 1; i /= 10)
    reversed = reversed * 10 + Math.trunc(i % 10);

  return number === reversed;
};

/*
  TIME COMPLEXITIES
    Worst Case => O(log(n))
    Average Case => O(log(n))
    Best Case => O(1)
  
  SPACE COMPLEXITY ===> O(1)
  
  Asymptotic Notations
    Omega =>  Ω(1)
    Theta => Θ(log(n)) ==> for Worst Case
    Big O => O(log(n))
*/
