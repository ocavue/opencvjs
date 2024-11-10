import { load } from "@opencvjs/worker";

self.onmessage = async function (event) {
  const cv = await load();

  const srcData = event.data;

  let src = cv.matFromImageData(srcData);

  // Convert to grayscale
  let dst = new cv.Mat();
  cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);

  // Convert back to ImageData
  const dstData = new ImageData(
    new Uint8ClampedArray(dst.data),
    srcData.width,
    srcData.height
  );

  // Clean up
  src.delete();
  dst.delete();

  // Send result back to main thread
  self.postMessage(dstData, [dstData.data.buffer]);
};
