import { describe, it, expect } from "vitest";
import {
  factorialDigitsFormulaIterative1,
  factorialDigitsIterative2,
  factorialDigitsIterative3,
  factorialDigitsFormula,
  factorialDigitsRecursive,
} from "./factorial-digits";

// ─── factorialDigitsFormulaIterative1 ──────────────────────────────────────────

describe("factorialDigitsFormulaIterative1", () => {
  it("should return 1 digit for 0!", () => {
    expect(factorialDigitsFormulaIterative1(0)).toBe(1);
  });

  it("should return 1 digit for 1!", () => {
    expect(factorialDigitsFormulaIterative1(1)).toBe(1);
  });

  it("should return 1 digit for 2!", () => {
    expect(factorialDigitsFormulaIterative1(2)).toBe(1);
  });

  it("should return 1 digit for 3!", () => {
    expect(factorialDigitsFormulaIterative1(3)).toBe(1);
  });

  it("should return 2 digits for 4!", () => {
    expect(factorialDigitsFormulaIterative1(4)).toBe(2);
  });

  it("should return 3 digits for 5!", () => {
    expect(factorialDigitsFormulaIterative1(5)).toBe(3);
  });

  it("should return 3 digits for 6!", () => {
    expect(factorialDigitsFormulaIterative1(6)).toBe(3);
  });

  it("should return 4 digits for 7!", () => {
    expect(factorialDigitsFormulaIterative1(7)).toBe(4);
  });

  it("should return 5 digits for 8!", () => {
    expect(factorialDigitsFormulaIterative1(8)).toBe(5);
  });

  it("should return 6 digits for 9!", () => {
    expect(factorialDigitsFormulaIterative1(9)).toBe(6);
  });

  it("should return 7 digits for 10!", () => {
    expect(factorialDigitsFormulaIterative1(10)).toBe(7);
  });

  it("should return 8 digits for 11!", () => {
    expect(factorialDigitsFormulaIterative1(11)).toBe(8);
  });

  it("should return 9 digits for 12!", () => {
    expect(factorialDigitsFormulaIterative1(12)).toBe(9);
  });

  it("should return 10 digits for 13!", () => {
    expect(factorialDigitsFormulaIterative1(13)).toBe(10);
  });

  it("should return 11 digits for 14!", () => {
    expect(factorialDigitsFormulaIterative1(14)).toBe(11);
  });

  it("should return 13 digits for 15!", () => {
    expect(factorialDigitsFormulaIterative1(15)).toBe(13);
  });

  it("should return 19 digits for 20!", () => {
    expect(factorialDigitsFormulaIterative1(20)).toBe(19);
  });

  it("should return 26 digits for 25!", () => {
    expect(factorialDigitsFormulaIterative1(25)).toBe(26);
  });

  it("should always return a positive integer", () => {
    for (let n = 0; n <= 20; n++) {
      const result = factorialDigitsFormulaIterative1(n);
      expect(result).toBeGreaterThan(0);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it("digit count should be non-decreasing as n increases", () => {
    let prev = factorialDigitsFormulaIterative1(0);
    for (let n = 1; n <= 25; n++) {
      const curr = factorialDigitsFormulaIterative1(n);
      expect(curr).toBeGreaterThanOrEqual(prev);
      prev = curr;
    }
  });
});

// ─── factorialDigitsIterative2 ─────────────────────────────────────────────────

describe("factorialDigitsIterative2", () => {
  it("should return 1 digit for 0!", () => {
    expect(factorialDigitsIterative2(0)).toBe(1);
  });

  it("should return 1 digit for 1!", () => {
    expect(factorialDigitsIterative2(1)).toBe(1);
  });

  it("should return 1 digit for 2!", () => {
    expect(factorialDigitsIterative2(2)).toBe(1);
  });

  it("should return 1 digit for 3!", () => {
    expect(factorialDigitsIterative2(3)).toBe(1);
  });

  it("should return 2 digits for 4!", () => {
    expect(factorialDigitsIterative2(4)).toBe(2);
  });

  it("should return 3 digits for 5!", () => {
    expect(factorialDigitsIterative2(5)).toBe(3);
  });

  it("should return 3 digits for 6!", () => {
    expect(factorialDigitsIterative2(6)).toBe(3);
  });

  it("should return 4 digits for 7!", () => {
    expect(factorialDigitsIterative2(7)).toBe(4);
  });

  it("should return 5 digits for 8!", () => {
    expect(factorialDigitsIterative2(8)).toBe(5);
  });

  it("should return 6 digits for 9!", () => {
    expect(factorialDigitsIterative2(9)).toBe(6);
  });

  it("should return 7 digits for 10!", () => {
    expect(factorialDigitsIterative2(10)).toBe(7);
  });

  it("should return 8 digits for 11!", () => {
    expect(factorialDigitsIterative2(11)).toBe(8);
  });

  it("should return 9 digits for 12!", () => {
    expect(factorialDigitsIterative2(12)).toBe(9);
  });

  it("should return 10 digits for 13!", () => {
    expect(factorialDigitsIterative2(13)).toBe(10);
  });

  it("should return 11 digits for 14!", () => {
    expect(factorialDigitsIterative2(14)).toBe(11);
  });

  it("should return 13 digits for 15!", () => {
    expect(factorialDigitsIterative2(15)).toBe(13);
  });

  it("should return 19 digits for 20!", () => {
    expect(factorialDigitsIterative2(20)).toBe(19);
  });

  it("should return 26 digits for 25!", () => {
    expect(factorialDigitsIterative2(25)).toBe(26);
  });

  it("should always return a positive integer", () => {
    for (let n = 0; n <= 20; n++) {
      const result = factorialDigitsIterative2(n);
      expect(result).toBeGreaterThan(0);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it("digit count should be non-decreasing as n increases", () => {
    let prev = factorialDigitsIterative2(0);
    for (let n = 1; n <= 25; n++) {
      const curr = factorialDigitsIterative2(n);
      expect(curr).toBeGreaterThanOrEqual(prev);
      prev = curr;
    }
  });
});

// ─── factorialDigitsIterative3 ─────────────────────────────────────────────────

describe("factorialDigitsIterative3", () => {
  it("should return 1 digit for 0!", () => {
    expect(factorialDigitsIterative3(0)).toBe(1);
  });

  it("should return 1 digit for 1!", () => {
    expect(factorialDigitsIterative3(1)).toBe(1);
  });

  it("should return 1 digit for 2!", () => {
    expect(factorialDigitsIterative3(2)).toBe(1);
  });

  it("should return 1 digit for 3!", () => {
    expect(factorialDigitsIterative3(3)).toBe(1);
  });

  it("should return 2 digits for 4!", () => {
    expect(factorialDigitsIterative3(4)).toBe(2);
  });

  it("should return 3 digits for 5!", () => {
    expect(factorialDigitsIterative3(5)).toBe(3);
  });

  it("should return 3 digits for 6!", () => {
    expect(factorialDigitsIterative3(6)).toBe(3);
  });

  it("should return 4 digits for 7!", () => {
    expect(factorialDigitsIterative3(7)).toBe(4);
  });

  it("should return 5 digits for 8!", () => {
    expect(factorialDigitsIterative3(8)).toBe(5);
  });

  it("should return 6 digits for 9!", () => {
    expect(factorialDigitsIterative3(9)).toBe(6);
  });

  it("should return 7 digits for 10!", () => {
    expect(factorialDigitsIterative3(10)).toBe(7);
  });

  it("should return 8 digits for 11!", () => {
    expect(factorialDigitsIterative3(11)).toBe(8);
  });

  it("should return 9 digits for 12!", () => {
    expect(factorialDigitsIterative3(12)).toBe(9);
  });

  it("should return 10 digits for 13!", () => {
    expect(factorialDigitsIterative3(13)).toBe(10);
  });

  it("should return 11 digits for 14!", () => {
    expect(factorialDigitsIterative3(14)).toBe(11);
  });

  it("should return 13 digits for 15!", () => {
    expect(factorialDigitsIterative3(15)).toBe(13);
  });

  it("should return 19 digits for 20!", () => {
    expect(factorialDigitsIterative3(20)).toBe(19);
  });

  it("should return 26 digits for 25!", () => {
    expect(factorialDigitsIterative3(25)).toBe(26);
  });

  it("should return 65 digits for 50!", () => {
    expect(factorialDigitsIterative3(50)).toBe(65);
  });

  it("should return 158 digits for 100!", () => {
    expect(factorialDigitsIterative3(100)).toBe(158);
  });

  it("should return 199 digits for 120!", () => {
    expect(factorialDigitsIterative3(120)).toBe(199);
  });

  it("should return 263 digits for 150!", () => {
    expect(factorialDigitsIterative3(150)).toBe(263);
  });

  it("should return 375 digits for 200!", () => {
    expect(factorialDigitsIterative3(200)).toBe(375);
  });

  it("should always return a positive integer", () => {
    for (let n = 0; n <= 25; n++) {
      const result = factorialDigitsIterative3(n);
      expect(result).toBeGreaterThan(0);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it("digit count should be non-decreasing as n increases", () => {
    let prev = factorialDigitsIterative3(0);
    for (let n = 1; n <= 25; n++) {
      const curr = factorialDigitsIterative3(n);
      expect(curr).toBeGreaterThanOrEqual(prev);
      prev = curr;
    }
  });
});

// ─── factorialDigitsFormula (Stirling's approximation) ─────────────────────────

describe("factorialDigitsFormula", () => {
  it("should return 1 digit for 0!", () => {
    expect(factorialDigitsFormula(0)).toBe(1);
  });

  it("should return 1 digit for 1!", () => {
    expect(factorialDigitsFormula(1)).toBe(1);
  });

  it("should return 1 digit for 2!", () => {
    expect(factorialDigitsFormula(2)).toBe(1);
  });

  it("should return 1 digit for 3!", () => {
    expect(factorialDigitsFormula(3)).toBe(1);
  });

  it("should return 2 digits for 4!", () => {
    expect(factorialDigitsFormula(4)).toBe(2);
  });

  it("should return 3 digits for 5!", () => {
    expect(factorialDigitsFormula(5)).toBe(3);
  });

  it("should return 3 digits for 6!", () => {
    expect(factorialDigitsFormula(6)).toBe(3);
  });

  it("should return 4 digits for 7!", () => {
    expect(factorialDigitsFormula(7)).toBe(4);
  });

  it("should return 5 digits for 8!", () => {
    expect(factorialDigitsFormula(8)).toBe(5);
  });

  it("should return 6 digits for 9!", () => {
    expect(factorialDigitsFormula(9)).toBe(6);
  });

  it("should return 7 digits for 10!", () => {
    expect(factorialDigitsFormula(10)).toBe(7);
  });

  it("should return 8 digits for 11!", () => {
    expect(factorialDigitsFormula(11)).toBe(8);
  });

  it("should return 9 digits for 12!", () => {
    expect(factorialDigitsFormula(12)).toBe(9);
  });

  it("should return 10 digits for 13!", () => {
    expect(factorialDigitsFormula(13)).toBe(10);
  });

  it("should return 11 digits for 14!", () => {
    expect(factorialDigitsFormula(14)).toBe(11);
  });

  it("should return 13 digits for 15!", () => {
    expect(factorialDigitsFormula(15)).toBe(13);
  });

  it("should return 19 digits for 20!", () => {
    expect(factorialDigitsFormula(20)).toBe(19);
  });

  it("should return 26 digits for 25!", () => {
    expect(factorialDigitsFormula(25)).toBe(26);
  });

  it("should return 65 digits for 50!", () => {
    expect(factorialDigitsFormula(50)).toBe(65);
  });

  it("should return 158 digits for 100!", () => {
    expect(factorialDigitsFormula(100)).toBe(158);
  });

  it("should return 199 digits for 120!", () => {
    expect(factorialDigitsFormula(120)).toBe(199);
  });

  it("should return 263 digits for 150!", () => {
    expect(factorialDigitsFormula(150)).toBe(263);
  });

  it("should return 375 digits for 200!", () => {
    expect(factorialDigitsFormula(200)).toBe(375);
  });

  it("should always return a positive integer", () => {
    for (let n = 0; n <= 25; n++) {
      const result = factorialDigitsFormula(n);
      expect(result).toBeGreaterThan(0);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it("digit count should be non-decreasing as n increases", () => {
    let prev = factorialDigitsFormula(0);
    for (let n = 1; n <= 25; n++) {
      const curr = factorialDigitsFormula(n);
      expect(curr).toBeGreaterThanOrEqual(prev);
      prev = curr;
    }
  });
});

// ─── factorialDigitsRecursive ──────────────────────────────────────────────────

describe("factorialDigitsRecursive", () => {
  it("should return 1 digit for 0!", () => {
    expect(factorialDigitsRecursive(0)).toBe(1);
  });

  it("should return 1 digit for 1!", () => {
    expect(factorialDigitsRecursive(1)).toBe(1);
  });

  it("should return 1 digit for 2!", () => {
    expect(factorialDigitsRecursive(2)).toBe(1);
  });

  it("should return 1 digit for 3!", () => {
    expect(factorialDigitsRecursive(3)).toBe(1);
  });

  it("should return 2 digits for 4!", () => {
    expect(factorialDigitsRecursive(4)).toBe(2);
  });

  it("should return 3 digits for 5!", () => {
    expect(factorialDigitsRecursive(5)).toBe(3);
  });

  it("should return 3 digits for 6!", () => {
    expect(factorialDigitsRecursive(6)).toBe(3);
  });

  it("should return 4 digits for 7!", () => {
    expect(factorialDigitsRecursive(7)).toBe(4);
  });

  it("should return 5 digits for 8!", () => {
    expect(factorialDigitsRecursive(8)).toBe(5);
  });

  it("should return 6 digits for 9!", () => {
    expect(factorialDigitsRecursive(9)).toBe(6);
  });

  it("should return 7 digits for 10!", () => {
    expect(factorialDigitsRecursive(10)).toBe(7);
  });

  it("should return 8 digits for 11!", () => {
    expect(factorialDigitsRecursive(11)).toBe(8);
  });

  it("should return 9 digits for 12!", () => {
    expect(factorialDigitsRecursive(12)).toBe(9);
  });

  it("should return 10 digits for 13!", () => {
    expect(factorialDigitsRecursive(13)).toBe(10);
  });

  it("should return 11 digits for 14!", () => {
    expect(factorialDigitsRecursive(14)).toBe(11);
  });

  it("should return 13 digits for 15!", () => {
    expect(factorialDigitsRecursive(15)).toBe(13);
  });

  it("should return 19 digits for 20!", () => {
    expect(factorialDigitsRecursive(20)).toBe(19);
  });

  it("should return 26 digits for 25!", () => {
    expect(factorialDigitsRecursive(25)).toBe(26);
  });

  it("should return 65 digits for 50!", () => {
    expect(factorialDigitsRecursive(50)).toBe(65);
  });

  it("should return 158 digits for 100!", () => {
    expect(factorialDigitsRecursive(100)).toBe(158);
  });

  it("should return 199 digits for 120!", () => {
    expect(factorialDigitsRecursive(120)).toBe(199);
  });

  it("should return 263 digits for 150!", () => {
    expect(factorialDigitsRecursive(150)).toBe(263);
  });

  it("should return 375 digits for 200!", () => {
    expect(factorialDigitsRecursive(200)).toBe(375);
  });

  it("should always return a positive integer", () => {
    for (let n = 0; n <= 25; n++) {
      const result = factorialDigitsRecursive(n);
      expect(result).toBeGreaterThan(0);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it("digit count should be non-decreasing as n increases", () => {
    let prev = factorialDigitsRecursive(0);
    for (let n = 1; n <= 25; n++) {
      const curr = factorialDigitsRecursive(n);
      expect(curr).toBeGreaterThanOrEqual(prev);
      prev = curr;
    }
  });
});
