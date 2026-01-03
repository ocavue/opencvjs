# opencvjs

A collection of [OpenCV.js](https://docs.opencv.org/4.x/d5/d10/tutorial_js_root.html) builds for different environments, to reduce the bundle size and improve the compatibility.

Please check the links below for more details.

## Packages

| Package              | Version             | Example                                                      |
| -------------------- | ------------------- | ------------------------------------------------------------ |
| [@opencvjs/web][]    | ![web-version][]    | [![Open in StackBlitz][stackblitz_svg]][example-web-vite]    |
| [@opencvjs/worker][] | ![worker-version][] | [![Open in StackBlitz][stackblitz_svg]][example-worker-vite] |
| [@opencvjs/node][]   | ![node-version][]   | [![Open in StackBlitz][stackblitz_svg]][example-node]        |
| [@opencvjs/types][]  | ![types-version][]  |                                                              |

## Build and Publish

When a new [OpenCV](https://github.com/opencv/opencv/releases) version drops, work through this checklist.

1. Checkout to a branch.
2. Set up a Linux machine with Docker installed. Builds are time-consuming, so prefer high-performance hardware.
3. Update the `OPENCV_VERSION` value in `build.sh` to match the upstream release.
4. Build each target:

   ```bash
   ./build.sh web
   ./build.sh worker
   ./build.sh node
   ```

5. Bump the `version` field in every `package.json` inside `packages`.
6. Push your branch and open a PR. Once it lands on `master`, CI publishes the packages to npm.

<!-- GitHub Links -->

[@opencvjs/web]: https://github.com/ocavue/opencvjs/tree/master/packages/web
[@opencvjs/worker]: https://github.com/ocavue/opencvjs/tree/master/packages/worker
[@opencvjs/node]: https://github.com/ocavue/opencvjs/tree/master/packages/node
[@opencvjs/types]: https://github.com/ocavue/opencvjs/tree/master/packages/types

<!-- Shields Links -->

[web-version]: https://img.shields.io/npm/v/@opencvjs/web
[worker-version]: https://img.shields.io/npm/v/@opencvjs/worker
[node-version]: https://img.shields.io/npm/v/@opencvjs/node
[types-version]: https://img.shields.io/npm/v/@opencvjs/types

<!-- Example Links -->

[stackblitz_svg]: https://developer.stackblitz.com/img/open_in_stackblitz_small.svg
[example-web-vite]: https://stackblitz.com/fork/github/ocavue/opencvjs/tree/master/examples/web-vite
[example-worker-vite]: https://stackblitz.com/fork/github/ocavue/opencvjs/tree/master/examples/worker-vite
[example-node]: https://stackblitz.com/fork/github/ocavue/opencvjs/tree/master/examples/node
