export const twoSum = function (nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; ++i)
    for (let j = i + 1; j < nums.length; ++j)
      if (nums[i] + nums[j] === target) return [i, j];
};

/*
  TIME COMPLEXITIES ==> O(n^2)
  SPACE COMPLEXITY ==> O(1)
*/
