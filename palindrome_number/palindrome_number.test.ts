import { describe, it, expect } from "vitest";
import { isPalindromeNumber } from "./palindrome_number";

describe.skip("isPalindromeNumber", () => {
  it("should return true for single digit numbers", () => {
    expect(isPalindromeNumber(5)).toBe(true);
  });

  it("should return true for palindrome numbers", () => {
    expect(isPalindromeNumber(121)).toBe(true);
    expect(isPalindromeNumber(1221)).toBe(true);
    expect(isPalindromeNumber(12321)).toBe(true);
  });

  it("should return false for non-palindrome numbers", () => {
    expect(isPalindromeNumber(123)).toBe(false);
    expect(isPalindromeNumber(1234)).toBe(false);
  });

  it("should return true for zero", () => {
    expect(isPalindromeNumber(0)).toBe(true);
  });

  it("should return false for negative numbers", () => {
    expect(isPalindromeNumber(-121)).toBe(false);
  });
});
