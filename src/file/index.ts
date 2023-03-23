import { join } from "node:path";
import glob from "glob";

export const scanFileTs = (scanPath) => {
  const tsFiles = glob.sync(join(process.cwd(), `${scanPath}/**/*.ts`));
  const tsxFiles = glob.sync(join(process.cwd(), `${scanPath}/**/*.tsx`));
  // console.log(tsFiles);
  // console.log(tsxFiles);
  return tsFiles.concat(tsxFiles);
};
