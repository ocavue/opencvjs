const { loadOpenCV } = require("@opencvjs/node");
const Jimp = require("jimp");

async function main() {
  const cv = await loadOpenCV();

  // Load local image file with jimp. It supports jpg, png, bmp, tiff and gif:
  const jimpSrc = await Jimp.read("./assets/Lenna.jpg");
  const src = cv.imread(jimpSrc.bitmap);

  // Convert the image to grayscale
  const tmp = new cv.Mat();
  cv.cvtColor(src, tmp, cv.COLOR_RGBA2GRAY, 0);
  const dst = new cv.Mat();
  cv.cvtColor(tmp, dst, cv.COLOR_GRAY2RGBA, 0);

  // Save the grayscale image
  cv.imwrite("./assets/Lenna_gray.jpg", dst);

  // Release the memory
  src.delete();
  tmp.delete();
  dst.delete();
}

main();
