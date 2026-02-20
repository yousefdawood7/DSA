import { describe, it, expect } from "vitest";
import { isPalindromeNumber } from "./palindrome_number";

describe("isPalindromeNumber", () => {
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
    expect(isPalindromeNumber(-1)).toBe(false);
    expect(isPalindromeNumber(-11)).toBe(false);
    expect(isPalindromeNumber(-101)).toBe(false);
  });

  it("should return false for numbers ending with zero except zero itself", () => {
    expect(isPalindromeNumber(10)).toBe(false);
    expect(isPalindromeNumber(100)).toBe(false);
    expect(isPalindromeNumber(1010)).toBe(false);
    expect(isPalindromeNumber(120)).toBe(false);
  });

  it("should handle longer palindrome and near-miss numbers", () => {
    expect(isPalindromeNumber(1000000001)).toBe(true);
    expect(isPalindromeNumber(1234554321)).toBe(true);

    expect(isPalindromeNumber(1234543210)).toBe(false);
    expect(isPalindromeNumber(1000000002)).toBe(false);
  });

  it("should keep boundary-style integer behavior stable", () => {
    expect(isPalindromeNumber(1)).toBe(true);
    expect(isPalindromeNumber(9)).toBe(true);
    expect(isPalindromeNumber(11)).toBe(true);
    expect(isPalindromeNumber(12)).toBe(false);
    expect(isPalindromeNumber(99)).toBe(true);
    expect(isPalindromeNumber(1001)).toBe(true);
  });
});
