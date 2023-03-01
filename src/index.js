import { foo } from "./foo";
import { bar } from "./bar";
import { version } from "../package.json";

console.log("index文件" + "--" + version);
foo();
bar();
