import { describe, it, expect } from "vitest";
import { factorialIterative, factorialRecursive } from "./factorial-number";

describe("factorialIterative", () => {
  it("should return 1 for input 0", () => {
    expect(factorialIterative(0)).toBe(1);
  });

  it("should return 120 for input 5", () => {
    expect(factorialIterative(5)).toBe(120);
  });

  it("should return 3628800 for input 10", () => {
    expect(factorialIterative(10)).toBe(3628800);
  });

  it("should return 24 for input 4", () => {
    expect(factorialIterative(4)).toBe(24);
  });

  it("should return 6227020800 for input 13", () => {
    expect(factorialIterative(13)).toBe(6227020800);
  });
});

describe("factorialRecursive", () => {
  it("should return 1 for input 0", () => {
    expect(factorialRecursive(0)).toBe(1);
  });

  it("should return 120 for input 5", () => {
    expect(factorialRecursive(5)).toBe(120);
  });

  it("should return 3628800 for input 10", () => {
    expect(factorialRecursive(10)).toBe(3628800);
  });

  it("should return 24 for input 4", () => {
    expect(factorialRecursive(4)).toBe(24);
  });

  it("should return 6227020800 for input 13", () => {
    expect(factorialRecursive(13)).toBe(6227020800);
  });
});
