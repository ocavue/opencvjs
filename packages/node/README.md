# @opencvjs/node

[OpenCV.js](https://docs.opencv.org/4.x/d0/d84/tutorial_js_usage.html) for Node.js.

## Installation

```bash
npm install @opencvjs/node
```

## Usage

`@opencvjs/node` exports a `loadOpenCV` function that returns a Promise that resolves to the OpenCV.js API.

```js
const { loadOpenCV } = require("@opencvjs/node");

const cv = await loadOpenCV();
const mat = new cv.Mat();
```

## TypeScript

`@opencvjs/node` exports a type `OpenCV` for the OpenCV.js API.

```ts
import { loadOpenCV, type OpenCV } from "@opencvjs/node";

const cv: typeof OpenCV = await loadOpenCV();
const mat: OpenCV.Mat = new cv.Mat();
```

## Example

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/ocavue/opencvjs/tree/master/examples/web-vite)

## Credits

TypeScript definitions are based on the [@techstark/opencv-js](https://github.com/TechStark/opencv-js) and [mirada](https://github.com/cancerberoSgx/mirada) projects.

## License

Apache-2.0
