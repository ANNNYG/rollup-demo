import { foo } from "./foo";
import { version } from "../package.json";

console.log("index文件" + "--" + version);
foo();
