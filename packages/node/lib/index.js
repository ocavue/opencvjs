const cv = require("./opencv_js.js");

let promise;

function loadOpenCV() {
  if (!promise) {
    promise = cv();
  }
  return promise;
}

module.exports = { loadOpenCV };
