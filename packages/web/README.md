# @opencvjs/web

[OpenCV.js](https://docs.opencv.org/4.x/d0/d84/tutorial_js_usage.html) for browser.

## Installation

```bash
npm install @opencvjs/web
```

## Usage

`@opencvjs/web` exports a `loadOpenCV` function that returns a Promise that resolves to the OpenCV.js API.

```ts
import { loadOpenCV } from "@opencvjs/web";

const cv = await loadOpenCV();
const mat = new cv.Mat();
```

## TypeScript

`@opencvjs/web` exports a type `OpenCV` for the OpenCV.js API.

```ts
import type { OpenCV } from "@opencvjs/web";

const mat: OpenCV.Mat = new cv.Mat();
```

## Example

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/ocavue/opencvjs/tree/master/examples/web-vite)

## Credits

TypeScript definitions are based on the [@techstark/opencv-js](https://github.com/TechStark/opencv-js) and [mirada](https://github.com/cancerberoSgx/mirada) projects.

## License

Apache-2.0
