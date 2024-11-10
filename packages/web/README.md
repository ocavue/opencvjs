# @opencvjs/web

[OpenCV.js](https://docs.opencv.org/4.x/d0/d84/tutorial_js_usage.html) for browser.

## Installation

```bash
npm install @opencvjs/web
```

## Usage

`@opencvjs/web` exports a `load` function that returns a Promise that resolves to the OpenCV.js API.

```ts
import { load } from "@opencvjs/web";

async function main() {
  // Wait for the OpenCV.js library to load
  const cv = await load();

  const imgSrc = document.getElementById("img_src");
  const imgDst = document.getElementById("img_dst");

  // Wait for the image to load
  await imgSrc.decode();

  // Read the image
  let src = cv.imread(imgSrc);

  // Convert the image to grayscale
  let dst = new cv.Mat();
  cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);

  // Show the grayscale image
  cv.imshow(imgDst, dst);

  // Release the memory
  src.delete();
  dst.delete();
}

main();
```

## TypeScript

`@opencvjs/web` exports a type definition for the OpenCV.js API.

```ts
import type { OpenCV } from "@opencvjs/web";
import { load } from "@opencvjs/web";

const cv = await load();
const src: OpenCV.Mat = cv.imread(imgSrc);
```

## Example

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/ocavue/opencvjs/tree/master/examples/web-vite)

## Credits

TypeScript definitions are based on the [@techstark/opencv-js](https://github.com/TechStark/opencv-js) and [mirada](https://github.com/cancerberoSgx/mirada) projects.

## License

Apache-2.0
