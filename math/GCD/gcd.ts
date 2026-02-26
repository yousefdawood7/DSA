export const gcd = function (firstNumber: number, lastNumber: number) {
  // LargestNumber = SmallerNumber * q + r
  let largestNumber = firstNumber > lastNumber ? firstNumber : lastNumber;
  let smallestNumber = firstNumber < lastNumber ? firstNumber : lastNumber;

  // prettier-ignore
  if (firstNumber === lastNumber)
    return firstNumber;

  // prettier-ignore
  if(smallestNumber === 0) 
    return largestNumber

  // prettier-ignore
  if (smallestNumber === 1)
    return 1

  let q = Math.floor(largestNumber / smallestNumber);
  let r = largestNumber % (smallestNumber * q);

  // prettier-ignore
  if (r == 0)
    return smallestNumber;

  while (true) {
    largestNumber = smallestNumber;
    smallestNumber = r;

    q = Math.floor(largestNumber / smallestNumber);

    let remainder = largestNumber % (smallestNumber * q);
    // prettier-ignore
    if (remainder === 0)
        return r;
    r = remainder;
  }
};

export const gcdRecursive = function (
  firstNumber: number,
  lastNumber: number,
): number {
  let largestNumber = firstNumber > lastNumber ? firstNumber : lastNumber;
  let smallestNumber = firstNumber < lastNumber ? firstNumber : lastNumber;

  // prettier-ignore
  if (firstNumber === lastNumber)
    return firstNumber;

  // prettier-ignore
  if(smallestNumber === 0) 
    return largestNumber

  // prettier-ignore
  if (smallestNumber === 1)
    return 1

  // prettier-ignore
  if ((largestNumber % smallestNumber) === 0)
    return smallestNumber;

  return gcdRecursive(smallestNumber, largestNumber % smallestNumber);
};
