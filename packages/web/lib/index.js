import cv from "./opencv_js.js";

let promise;

export function load() {
  if (!promise) {
    promise = cv();
  }
  return promise;
}
