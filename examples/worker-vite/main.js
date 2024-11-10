import { load } from "@opencvjs/web";

const worker = new Worker(new URL("./worker.js", import.meta.url), {
  type: "module",
});

// Add worker message handler
worker.onmessage = (e) => {
  // Handle processed data from worker
  console.log("Received from worker:", e.data);

  const imgDst = document.getElementById("img_dst");
};

async function main() {
  // Wait for the OpenCV.js library to load
  const cv = await load();

  const imgSrc = document.getElementById("img_src");


  // Wait for the image to load
  await imgSrc.decode();

  // Create a canvas to get ImageData
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = imgSrc.width;
  canvas.height = imgSrc.height;
  ctx.drawImage(imgSrc, 0, 0);
  const imageData = ctx.getImageData(0, 0, img.width, img.height);

  // Send ImageData to worker
  worker.postMessage(imageData, [imageData.data.buffer]); // Transfer ownership of the buffer
}

main();
