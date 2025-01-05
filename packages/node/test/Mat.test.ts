import Jimp from "jimp";
import path from "node:path";
import { translateException } from "./cv";
import { expect, describe, it } from "vitest";
import { loadOpenCV } from "../lib";

describe("Mat", () => {
  it("should pass TS type validations", async () => {
    let cv = await loadOpenCV();
    try {
      // load local image file with jimp. It supports jpg, png, bmp, tiff and gif:
      const jimpSrc = await Jimp.read(path.resolve(__dirname, "Lenna.png"));

      // `jimpImage.bitmap` property has the decoded ImageData that we can use to create a cv:Mat
      const img = cv.matFromImageData(jimpSrc.bitmap);
      expect(img.channels()).toEqual(4);

      const imgGray = new cv.Mat();
      cv.cvtColor(img, imgGray, cv.COLOR_RGBA2GRAY);
      expect(imgGray.channels()).toEqual(1);

      const imgBlur = new cv.Mat();
      cv.GaussianBlur(
        imgGray,
        imgBlur,
        new cv.Size(5, 5),
        0,
        0,
        cv.BORDER_DEFAULT
      );

      const imgThresh = new cv.Mat();
      cv.threshold(
        imgBlur,
        imgThresh,
        0,
        255,
        cv.THRESH_BINARY + cv.THRESH_OTSU
      );

      const contours = new cv.MatVector();
      const hierarchy = new cv.Mat();

      cv.findContours(
        imgThresh,
        contours,
        hierarchy,
        cv.RETR_CCOMP,
        cv.CHAIN_APPROX_SIMPLE
      );

      const channels = new cv.MatVector();
      cv.split(img, channels);
      cv.merge(channels, img);
    } catch (err) {
      throw translateException(cv, err);
    }
  });
});
