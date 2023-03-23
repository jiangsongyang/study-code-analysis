import { join } from "node:path";
import glob from "glob";

const tsxFilesPath = glob.sync(
  join(process.cwd(), "/project-demo/src/**/*.tsx")
);
const tsFilesPath = glob.sync(join(process.cwd(), "/project-demo/src/**/*.ts"));

console.log(tsFilesPath, tsxFilesPath);
