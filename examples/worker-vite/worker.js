import { loadOpenCV } from "@opencvjs/worker";

self.onmessage = async function (event) {
  const cv = await loadOpenCV();

  const srcData = event.data;

  const src = cv.matFromImageData(srcData);

  // Convert to grayscale
  const tmp = new cv.Mat();
  cv.cvtColor(src, tmp, cv.COLOR_RGBA2GRAY, 0);
  const dst = new cv.Mat();
  cv.cvtColor(tmp, dst, cv.COLOR_GRAY2RGBA, 0);

  // Convert back to ImageData
  console.log("Before ImageData");
  const dstData = new ImageData(
    new Uint8ClampedArray(dst.data),
    srcData.width,
    srcData.height,
  );
  console.log("After ImageData");

  // Clean up
  src.delete();
  tmp.delete();
  dst.delete();

  // Send result back to main thread
  self.postMessage(dstData, [dstData.data.buffer]);
};
