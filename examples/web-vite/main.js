import { loadOpenCV } from "@opencvjs/web";

async function main() {
  // Wait for the OpenCV.js library to load
  const cv = await loadOpenCV();

  const imgSrc = document.getElementById("img_src");
  const imgDst = document.getElementById("img_dst");

  // Wait for the image to load
  await imgSrc.decode();

  // Read the image
  const src = cv.imread(imgSrc);

  // Convert the image to grayscale
  const dst = new cv.Mat();
  cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);

  // Show the grayscale image
  cv.imshow(imgDst, dst);

  // Release the memory
  src.delete();
  dst.delete();
}

main();
