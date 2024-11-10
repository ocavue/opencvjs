import type { OpenCV } from "@opencvjs/types";

/**
 * Compile the WASM library and return a promise that resolves to the
 * OpenCV.js library.
 */
export declare function load(): Promise<OpenCV>;

export type { OpenCV };
