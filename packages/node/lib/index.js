
let promise;

async function loadOpenCV() {
  const cv = require("./opencv_js.js");

  console.log("cv::", cv);

  const result = cv();
  return result;

  // if (!promise) {
  //   promise = cv();
  // }
  // return promise;
}

module.exports = { loadOpenCV };
