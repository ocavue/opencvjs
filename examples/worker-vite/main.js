const worker = new Worker(new URL("./worker.js", import.meta.url), {
  type: "module",
});

async function main() {
  const imgSrc = document.getElementById("img_src");

  // Wait for the image to load
  await imgSrc.decode();

  // Create a canvas to get ImageData
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = imgSrc.width;
  canvas.height = imgSrc.height;
  ctx.drawImage(imgSrc, 0, 0);
  const imageData = ctx.getImageData(0, 0, imgSrc.width, imgSrc.height);

  // Send ImageData to worker
  worker.postMessage(imageData, [imageData.data.buffer]); // Transfer ownership of the buffer
}

// Add worker message handler
worker.onmessage = (event) => {
  const imageData = event.data;
  const imgDst = document.getElementById("img_dst");
  imgDst.getContext("2d").putImageData(imageData, 0, 0);
};

main();
