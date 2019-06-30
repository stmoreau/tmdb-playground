import { getGenreName } from "./getGenreName";
import { genres } from "./__mocks__/genres";

describe("getGenreName", () => {
  test("returns Action", () => {
    expect(getGenreName(28, genres)).toEqual("Action");
  });
  test("returns Animation", () => {
    expect(getGenreName(16, genres)).toEqual("Animation");
  });
  test("returns null when genre is not found", () => {
    expect(getGenreName(999, genres)).toBeNull();
  });
});
