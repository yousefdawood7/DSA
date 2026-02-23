import { describe, it, expect } from "vitest";
import {
  factorialDigitsFormula,
  factorialDigitsIterative,
} from "./factorial-digits";

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

  it("should return 7 digits for 10!", () => {
    expect(factorialDigitsFormula(10)).toBe(7);
  });

  it("should return 10 digits for 13!", () => {
    expect(factorialDigitsFormula(13)).toBe(10);
  });

  it("should return 19 digits for 20!", () => {
    expect(factorialDigitsFormula(20)).toBe(19);
  });

  it("should return 199 digits for 120!", () => {
    expect(factorialDigitsFormula(120)).toBe(199);
  });
});

describe("factorialDigitsIterative", () => {
  it("should return 1 digit for 0!", () => {
    expect(factorialDigitsIterative(0)).toBe(1);
  });

  it("should return 1 digit for 1!", () => {
    expect(factorialDigitsIterative(1)).toBe(1);
  });

  it("should return 1 digit for 2!", () => {
    expect(factorialDigitsIterative(2)).toBe(1);
  });

  it("should return 1 digit for 3!", () => {
    expect(factorialDigitsIterative(3)).toBe(1);
  });

  it("should return 2 digits for 4!", () => {
    expect(factorialDigitsIterative(4)).toBe(2);
  });

  it("should return 3 digits for 5!", () => {
    expect(factorialDigitsIterative(5)).toBe(3);
  });

  it("should return 7 digits for 10!", () => {
    expect(factorialDigitsIterative(10)).toBe(7);
  });

  it("should return 10 digits for 13!", () => {
    expect(factorialDigitsIterative(13)).toBe(10);
  });

  it("should return 19 digits for 20!", () => {
    expect(factorialDigitsIterative(20)).toBe(19);
  });

  it("should return 199 digits for 120!", () => {
    expect(factorialDigitsIterative(120)).toBe(199);
  });
});
