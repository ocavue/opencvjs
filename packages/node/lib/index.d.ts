import type { OpenCV } from "@opencvjs/types";

/**
 * Compile the WASM library and return a promise that resolves to the
 * OpenCV.js library.
 */
declare function loadOpenCV(): Promise<typeof OpenCV>;

export type { OpenCV };
export { loadOpenCV };
