import type { OpenCV } from "@opencvjs/types";

export function translateException(cv: typeof OpenCV, err: any) {
  if (typeof err === "number") {
    try {
      const exception = cv.exceptionFromPtr(err);
      return exception;
    } catch (error) {
      // ignore
    }
  }
  return err;
}
