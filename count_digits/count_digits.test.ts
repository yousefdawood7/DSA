import { describe, it, expect } from "vitest";
import { countDigits1, countDigits2, countDigits3 } from "./count_digits";

describe("countDigits1 (iterative)", () => {
  it("returns 1 for 0", () => expect(countDigits1(0)).toBe(1));
  it("returns 3 for 555", () => expect(countDigits1(555)).toBe(3));
  it("returns 3 for 123", () => expect(countDigits1(123)).toBe(3));
  it("returns 2 for 12", () => expect(countDigits1(12)).toBe(2));
  it("returns 1 for 1", () => expect(countDigits1(1)).toBe(1));
  it("returns 1 for -0", () => expect(countDigits1(-0)).toBe(1));
  it("returns 3 for -555", () => expect(countDigits1(-555)).toBe(3));
  it("returns 3 for -123", () => expect(countDigits1(-123)).toBe(3));
  it("returns 2 for -12", () => expect(countDigits1(-12)).toBe(2));
  it("returns 1 for -1", () => expect(countDigits1(-1)).toBe(1));
});

describe("countDigits2 (recursive)", () => {
  it("returns 1 for 0", () => expect(countDigits2(0)).toBe(1));
  it("returns 3 for 555", () => expect(countDigits2(555)).toBe(3));
  it("returns 3 for 123", () => expect(countDigits2(123)).toBe(3));
  it("returns 2 for 12", () => expect(countDigits2(12)).toBe(2));
  it("returns 1 for 1", () => expect(countDigits2(1)).toBe(1));
  it("returns 1 for -0", () => expect(countDigits2(-0)).toBe(1));
  it("returns 3 for -555", () => expect(countDigits2(-555)).toBe(3));
  it("returns 3 for -123", () => expect(countDigits2(-123)).toBe(3));
  it("returns 2 for -12", () => expect(countDigits2(-12)).toBe(2));
  it("returns 1 for -1", () => expect(countDigits2(-1)).toBe(1));
});

describe("countDigits3 (logarithmic)", () => {
  it("returns 1 for 0", () => expect(countDigits3(0)).toBe(1));
  it("returns 3 for 555", () => expect(countDigits3(555)).toBe(3));
  it("returns 3 for 123", () => expect(countDigits3(123)).toBe(3));
  it("returns 2 for 12", () => expect(countDigits3(12)).toBe(2));
  it("returns 1 for 1", () => expect(countDigits3(1)).toBe(1));
  it("returns 1 for -0", () => expect(countDigits3(-0)).toBe(1));
  it("returns 3 for -555", () => expect(countDigits3(-555)).toBe(3));
  it("returns 3 for -123", () => expect(countDigits3(-123)).toBe(3));
  it("returns 2 for -12", () => expect(countDigits3(-12)).toBe(2));
  it("returns 1 for -1", () => expect(countDigits3(-1)).toBe(1));
});
