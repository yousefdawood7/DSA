import { describe, it, expect } from "vitest";
import { getQuadraticSolutions } from "./quadratic_solutions";

describe("getQuadraticSolutions", () => {
  it("returns -1 when discriminant is negative (1, 0, 1)", () => {
    expect(getQuadraticSolutions(1, 0, 1)).toBe(-1);
  });

  it("returns -1 when discriminant is negative (1, -2, 2)", () => {
    expect(getQuadraticSolutions(1, -2, 2)).toBe(-1);
  });

  it("returns -1 when discriminant is negative (-1, 2, -2)", () => {
    expect(getQuadraticSolutions(-1, 2, -2)).toBe(-1);
  });

  it("returns two equal roots as array (1, 2, 1)", () => {
    expect(getQuadraticSolutions(1, 2, 1)).toEqual([-1, -1]);
  });

  it("returns two equal roots as array (2, -4, 2)", () => {
    expect(getQuadraticSolutions(2, -4, 2)).toEqual([1, 1]);
  });

  it("returns two equal roots as array (3, 6, 3)", () => {
    expect(getQuadraticSolutions(3, 6, 3)).toEqual([-1, -1]);
  });

  it("returns [3, 2] for (1, -5, 6)", () => {
    expect(getQuadraticSolutions(1, -5, 6)).toEqual([3, 2]);
  });

  it("returns [4, -1] for (1, -3, -4)", () => {
    expect(getQuadraticSolutions(1, -3, -4)).toEqual([4, -1]);
  });

  it("returns [6, 4] for (1, -10, 24)", () => {
    expect(getQuadraticSolutions(1, -10, 24)).toEqual([6, 4]);
  });

  it("returns [2, -2] for (1, 0, -4)", () => {
    expect(getQuadraticSolutions(1, 0, -4)).toEqual([2, -2]);
  });

  it("returns [-2, -3] for (1, 5, 6)", () => {
    expect(getQuadraticSolutions(1, 5, 6)).toEqual([-2, -3]);
  });

  it("returns [1, -2] for (1, 0, -2)", () => {
    expect(getQuadraticSolutions(1, 0, -2)).toEqual([1, -2]);
  });

  it("returns [4, 0] for (1, -5, 2)", () => {
    expect(getQuadraticSolutions(1, -5, 2)).toEqual([4, 0]);
  });

  it("returns [-1, -4] for (1, 4, 2)", () => {
    expect(getQuadraticSolutions(1, 4, 2)).toEqual([-1, -4]);
  });

  it("returns [99, 0] for (1, -100, 1)", () => {
    expect(getQuadraticSolutions(1, -100, 1)).toEqual([99, 0]);
  });

  it("returns [-1, -100] for (1, 100, 1)", () => {
    expect(getQuadraticSolutions(1, 100, 1)).toEqual([-1, -100]);
  });

  it("returns [-1, -2] for (2, 5, 2)", () => {
    expect(getQuadraticSolutions(2, 5, 2)).toEqual([-1, -2]);
  });

  it("returns [0, 0] for (1, 0, 0)", () => {
    expect(getQuadraticSolutions(1, 0, 0)).toStrictEqual([-0, 0]);
  });

  it("returns [3, -1] for (-1, 2, 3)", () => {
    expect(getQuadraticSolutions(-1, 2, 3)).toEqual([3, -1]);
  });

  it("returns [3, -2] for (1, -1, -6)", () => {
    expect(getQuadraticSolutions(1, -1, -6)).toEqual([3, -2]);
  });
});
