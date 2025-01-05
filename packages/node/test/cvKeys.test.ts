import path from "node:path";
import fs from "node:fs";
import { loadOpenCV } from "../lib";
import { describe, it } from "vitest";

describe("CV keys", () => {
  function getObjectKeys(obj: any) {
    const keys: string[] = [];
    for (let key in obj) {
      if (!key.startsWith("dynCall")) {
        keys.push(key);
      }
    }
    // console.log(keys);
    return keys;
  }

  it("output CV keys", async () => {
    let cv = await loadOpenCV();

    const objectNameMap: { [key: string]: any } = {
      cv: cv,
      "cv.Mat": new cv.Mat(),
    };

    const objectKeyMap: { [key: string]: string[] } = {
      buildInformation: cv.getBuildInformation(),
    };

    for (const objName in objectNameMap) {
      const obj = objectNameMap[objName];
      const keys = getObjectKeys(obj);
      objectKeyMap[objName] = keys;
    }

    // write the objectKeyMap to JSON file
    const jsonString = JSON.stringify(objectKeyMap, null, 2);
    const fileName = "../../../doc/cvKeys.json";
    const filePath = path.join(__dirname, fileName);
    fs.writeFileSync(filePath, jsonString);
  });
});
