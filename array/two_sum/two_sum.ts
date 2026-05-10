export const twoSum = function (nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; ++i)
    for (let j = i + 1; j < nums.length; ++j)
      if (nums[i] + nums[j] === target) return [i, j];
  throw new Error("No valid solution found");
};

/*
  TIME COMPLEXITIES ==> O(n^2)
  SPACE COMPLEXITY ==> O(1)
*/

export const twoSum2 = function (nums: number[], target: number): number[] {
  const indicies: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; ++i) {
    // prettier-ignore
    if (indicies.has(target - nums[i]))
        return [indicies.get(target - nums[i])!, i];
    indicies.set(nums[i], i);
  }
  throw new Error("No valid solution found");
};

/*
  TIME COMPLEXITIES ==> O(n)
  SPACE COMPLEXITY ==> O(n)
*/

// Problem: https://leetcode.com/problems/two-sum
