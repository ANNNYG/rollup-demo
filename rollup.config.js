// rollup.config.js
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.js",
  // output可为对象或者数组
  // 数组的话包含多个output对象
  output: [
    {
      file: "./build/bundle.js",
      format: "module",
    },
    {
      file: "./build/bundle.min.js",
      format: "iife",
      name: "version",
      plugins: [terser()],
    },
  ],

  // 使用插件
  plugins: [json()],
};
