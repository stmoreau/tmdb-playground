import { removeElementFromArray } from "./removeElementFromArray";

describe("removeElementFromArray", () => {
  test("removes last element", () => {
    expect(removeElementFromArray([28, 1, 2, 4], 4)).toEqual([28, 1, 2]);
  });
  test("removes first element", () => {
    expect(removeElementFromArray([28, 1, 2, 4], 28)).toEqual([1, 2, 4]);
  });
  test("removes middle element", () => {
    expect(removeElementFromArray([28, 1, 2, 4], 2)).toEqual([28, 1, 4]);
  });
  test("returns initial array if element is not found", () => {
    expect(removeElementFromArray([28, 1, 2, 4], 19)).toEqual([28, 1, 2, 4]);
  });
});
