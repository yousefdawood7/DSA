import { describe, it, expect } from "vitest";
import {
  firstNNaturalNumbers,
  firstNNaturalNumbersIterative,
  firstNNaturalNumbersNestedIterative,
  firstNNaturalNumbersNestedRecursive,
} from "./sum-n-natural-number";

describe("firstNNaturalNumbers (formula)", () => {
  it("returns 0 for n = 0", () => expect(firstNNaturalNumbers(0)).toBe(0));
  it("returns 1 for n = 1", () => expect(firstNNaturalNumbers(1)).toBe(1));
  it("returns 3 for n = 2", () => expect(firstNNaturalNumbers(2)).toBe(3));
  it("returns 6 for n = 3", () => expect(firstNNaturalNumbers(3)).toBe(6));
  it("returns 10 for n = 4", () => expect(firstNNaturalNumbers(4)).toBe(10));
  it("returns 15 for n = 5", () => expect(firstNNaturalNumbers(5)).toBe(15));
  it("returns 55 for n = 10", () => expect(firstNNaturalNumbers(10)).toBe(55));
  it("returns 1275 for n = 50", () =>
    expect(firstNNaturalNumbers(50)).toBe(1275));
  it("returns 5050 for n = 100", () =>
    expect(firstNNaturalNumbers(100)).toBe(5050));
  it("returns 500500 for n = 1000", () =>
    expect(firstNNaturalNumbers(1000)).toBe(500500));
});

describe("firstNNaturalNumbersIterative (loop)", () => {
  it("returns 0 for n = 0", () =>
    expect(firstNNaturalNumbersIterative(0)).toBe(0));
  it("returns 1 for n = 1", () =>
    expect(firstNNaturalNumbersIterative(1)).toBe(1));
  it("returns 3 for n = 2", () =>
    expect(firstNNaturalNumbersIterative(2)).toBe(3));
  it("returns 6 for n = 3", () =>
    expect(firstNNaturalNumbersIterative(3)).toBe(6));
  it("returns 10 for n = 4", () =>
    expect(firstNNaturalNumbersIterative(4)).toBe(10));
  it("returns 15 for n = 5", () =>
    expect(firstNNaturalNumbersIterative(5)).toBe(15));
  it("returns 55 for n = 10", () =>
    expect(firstNNaturalNumbersIterative(10)).toBe(55));
  it("returns 1275 for n = 50", () =>
    expect(firstNNaturalNumbersIterative(50)).toBe(1275));
  it("returns 5050 for n = 100", () =>
    expect(firstNNaturalNumbersIterative(100)).toBe(5050));
  it("returns 500500 for n = 1000", () =>
    expect(firstNNaturalNumbersIterative(1000)).toBe(500500));

  it("matches formula for all n from 0 to 100", () => {
    for (let n = 0; n <= 100; n++) {
      expect(firstNNaturalNumbersIterative(n)).toBe(firstNNaturalNumbers(n));
    }
  });
});

describe("firstNNaturalNumbersNestedIterative (nested loop → n²)", () => {
  it("returns 0 for n = 0", () =>
    expect(firstNNaturalNumbersNestedIterative(0)).toBe(0));
  it("returns 1 for n = 1", () =>
    expect(firstNNaturalNumbersNestedIterative(1)).toBe(1));
  it("returns 4 for n = 2", () =>
    expect(firstNNaturalNumbersNestedIterative(2)).toBe(4));
  it("returns 9 for n = 3", () =>
    expect(firstNNaturalNumbersNestedIterative(3)).toBe(9));
  it("returns 16 for n = 4", () =>
    expect(firstNNaturalNumbersNestedIterative(4)).toBe(16));
  it("returns 25 for n = 5", () =>
    expect(firstNNaturalNumbersNestedIterative(5)).toBe(25));
  it("returns 100 for n = 10", () =>
    expect(firstNNaturalNumbersNestedIterative(10)).toBe(100));
  it("returns 2500 for n = 50", () =>
    expect(firstNNaturalNumbersNestedIterative(50)).toBe(2500));
  it("returns 10000 for n = 100", () =>
    expect(firstNNaturalNumbersNestedIterative(100)).toBe(10000));

  it("always equals n² for n from 0 to 50", () => {
    for (let n = 0; n <= 50; n++) {
      expect(firstNNaturalNumbersNestedIterative(n)).toBe(n * n);
    }
  });
});

describe("firstNNaturalNumbersNestedRecursive (recursive)", () => {
  it("returns 0 for n = 0", () =>
    expect(firstNNaturalNumbersNestedRecursive(0)).toBe(0));
  it("returns 1 for n = 1", () =>
    expect(firstNNaturalNumbersNestedRecursive(1)).toBe(1));
  it("returns 3 for n = 2", () =>
    expect(firstNNaturalNumbersNestedRecursive(2)).toBe(3));
  it("returns 6 for n = 3", () =>
    expect(firstNNaturalNumbersNestedRecursive(3)).toBe(6));
  it("returns 10 for n = 4", () =>
    expect(firstNNaturalNumbersNestedRecursive(4)).toBe(10));
  it("returns 15 for n = 5", () =>
    expect(firstNNaturalNumbersNestedRecursive(5)).toBe(15));
  it("returns 55 for n = 10", () =>
    expect(firstNNaturalNumbersNestedRecursive(10)).toBe(55));
  it("returns 1275 for n = 50", () =>
    expect(firstNNaturalNumbersNestedRecursive(50)).toBe(1275));
  it("returns 5050 for n = 100", () =>
    expect(firstNNaturalNumbersNestedRecursive(100)).toBe(5050));

  it("matches formula for all n from 0 to 100", () => {
    for (let n = 0; n <= 100; n++) {
      expect(firstNNaturalNumbersNestedRecursive(n)).toBe(
        firstNNaturalNumbers(n),
      );
    }
  });
});

describe("cross-validation between implementations", () => {
  it("formula and iterative produce identical results for n = 0 to 200", () => {
    for (let n = 0; n <= 200; n++) {
      expect(firstNNaturalNumbersIterative(n)).toBe(firstNNaturalNumbers(n));
    }
  });
});
