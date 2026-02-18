const countDigits1 = function (number: number) {
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

console.log("First Solution");

console.log(countDigits1(0));
console.log(countDigits1(555));
console.log(countDigits1(123));
console.log(countDigits1(12));
console.log(countDigits1(1));
console.log("==========");
console.log(countDigits1(-0));
console.log(countDigits1(-555));
console.log(countDigits1(-123));
console.log(countDigits1(-12));
console.log(countDigits1(-1));

console.log("Second Solution");

const countDigits2 = function (number: number): number {
  // prettier-ignore
  if (number === 0)
    return 1;

  // prettier-ignore
  if (Math.abs(number) < 1)
    return 0;

  return 1 + countDigits2(number / 10);
};

console.log(countDigits2(0));
console.log(countDigits2(555));
console.log(countDigits2(123));
console.log(countDigits2(12));
console.log(countDigits2(1));
console.log("==========");
console.log(countDigits2(-0));
console.log(countDigits2(-555));
console.log(countDigits2(-123));
console.log(countDigits2(-12));
console.log(countDigits2(-1));

const countDigits3 = function (number: number) {
  // prettier-ignore
  if (number === 0)
    return 1;

  return Math.trunc(Math.log10(Math.abs(number))) + 1;
};

console.log("Third Solution");

console.log(countDigits3(0));
console.log(countDigits3(555));
console.log(countDigits3(123));
console.log(countDigits3(12));
console.log(countDigits3(1));
console.log("==========");
console.log(countDigits3(-0));
console.log(countDigits3(-555));
console.log(countDigits3(-123));
console.log(countDigits3(-12));
console.log(countDigits3(-1));

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
