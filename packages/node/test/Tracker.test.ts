import { translateException } from "./cv";
import { describe, it } from "vitest";
import { loadOpenCV } from "../lib";

describe("Tracker", () => {
  it("should pass TS type validations", async () => {
    let cv = await loadOpenCV();
    try {
      const tracker = new cv.TrackerMIL();
    } catch (err) {
      throw translateException(cv, err);
    }
  });
});
