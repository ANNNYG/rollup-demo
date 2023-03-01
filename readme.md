# rollup 的入门使用

根据官网文档使用 rollup
自己学习记录使用
后续可能使用 rollup 来打包一个 monorepo 项目

## 安装

`npm install rollup --save-dev`
或者
`yarn -D add rollup`

## 初步使用

安装后，Rollup 可以在项目的根目录中运行：
`npx rollup --config`
或者
`yarn rollup --config`
或者自己配置**package.json**的 script

需要文件根目录下有**rollup.config.js**文件，否则报错

### 注意事项

如果使用 es6 模块化，需要在**package.json**配置 **"type": "module"**,

## 安装插件

安装 @rollup/plugin-json 作为开发依赖：
`npm install --save-dev @rollup/plugin-json`

## 使用输出插件

一些插件也可以专门应用于某些输出。有关输出特定插件可以做什么的技术细节，请参阅[build hooks](https://rollupjs.org/plugin-development/#build-hooks)

使用 @rollup/plugin-terser
`npm install --save-dev @rollup/plugin-terser`

## 代码拆分

对于代码拆分，有些情况下 Rollup 会自动将代码拆分成几块，比如动态加载或多个入口点，也有办法通过 output.manualChunks 选项明确告诉 Rollup 哪些模块要拆成独立的几块。

## 持续更新...
