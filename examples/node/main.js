const { loadOpenCV } = require("@opencvjs/node");
const { Canvas, createCanvas, Image, ImageData, loadImage } = require("canvas");
const { JSDOM } = require("jsdom");
const { writeFileSync } = require("fs");

async function main() {
  // before loading opencv.js we emulate a minimal HTML DOM. See the function declaration below.
  installDOM();

  const cv = await loadOpenCV();

  // Convert an image file to an object compatible with
  // HTML DOM Image and therefore with cv.imread()
  const image = await loadImage("Lenna.jpg");

  // Read the image and convert it to grayscale
  const src = cv.imread(image);
  const dst = new cv.Mat();
  cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);

  // Create an object compatible with HTMLCanvasElement
  const canvas = createCanvas(256, 256);
  cv.imshow(canvas, dst);
  writeFileSync("output.jpg", canvas.toBuffer("image/jpeg"));

  // Release the memory
  src.delete();
  dst.delete();
}

// Using jsdom and node-canvas we define some global variables to emulate HTML
// DOM. Although a complete emulation can be archived, here we only define those
// globals used by cv.imread() and cv.imshow().
function installDOM() {
  const dom = new JSDOM();
  global.document = dom.window.document;

  // The rest enables DOM image and canvas and is provided by node-canvas
  global.Image = Image;
  global.HTMLCanvasElement = Canvas;
  global.ImageData = ImageData;
  global.HTMLImageElement = Image;
}

main();
