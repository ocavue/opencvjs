import cv from "./opencv_js.js";

let promise;

export function loadOpenCV() {
  if (!promise) {
    promise = cv();
  }
  return promise;
}
