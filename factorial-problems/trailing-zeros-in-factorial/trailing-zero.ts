export const trailingZero = function (number: bigint) {
  let factorial = 1n;
  let trailingZeros = 0n;

  // prettier-ignore
  for (let i = 2n; i <= number; ++i)
    factorial *= i;

  for (let i = BigInt(factorial); i >= 1; i /= 10n) {
    let flag = 0;
    if (i % 10n === 0n) {
      ++trailingZeros;
      flag = 1;
    }

    // Number of Trailing Zero is n / 4 ==> O(n)

    // prettier-ignore
    if (!flag)
        break;
  }

  return trailingZeros;
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

export const trailingZeroByFive = function (number: number) {
  let trailingZero = 0;

  // prettier-ignore
  for (let i = 5; i <= number; i *= 5)
    trailingZero += Math.floor(number / i)
  return trailingZero;
};

/*
  TIME COMPLEXITIES
    Worst Case => O(log5(n))
    Average Case => O(log5(n))
    Best Case => O(1)
  
  SPACE COMPLEXITY ==> O(1)
  
  Asymptotic Notations
    Omega =>  Ω(1)
    Theta => Θ(log5(n)) ==> for Worst Case
    Big O => O(log5(n))
*/
