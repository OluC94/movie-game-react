import { checkAppearance } from "../utils/game-utils";
import { fpAppearances } from "../utils/hard-coded";

describe("checkAppearance", () => {
  it("returns a boolean", () => {
    expect(typeof checkAppearance("", [])).toBe("boolean");
  });
  it("returns the correct result if the submitted title matches an actors filmography", () => {
    expect(checkAppearance("Little Women", fpAppearances)).toBe(true);
    expect(checkAppearance("Not Little Women", fpAppearances)).toBe(false);
  });
  it.todo("checks for 'actor' or 'self'");
});
