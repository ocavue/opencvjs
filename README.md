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

## Publish a new version

1. Prepare a Linux environment with Docker installed. Since building is time consuming, it's recommended to use a powerful machine.
2. Update the `OPENCV_VERSION` in the `build.sh` file to the new version.
3. Run the following command to build the packages:
```bash
bash build.sh web
bash build.sh worker
bash build.sh node
```
4. Update `version` field in the all `package.json` files under the `packages` directory.
5. Push the changes to the `master` branch. The CI will automatically publish the packages to the npm registry.

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
