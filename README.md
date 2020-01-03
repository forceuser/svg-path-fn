# svg-path-fn

[![npm repository](https://img.shields.io/npm/v/svg-path-fn.svg)](https://www.npmjs.com/package/svg-path-fn)
[![Build Status](https://travis-ci.org/forceuser/svg-path-fn.svg?branch=master)](https://travis-ci.org/forceuser/svg-path-fn)
[![Coverage Status](https://img.shields.io/codecov/c/github/forceuser/svg-path-fn/master.svg)](https://codecov.io/gh/forceuser/svg-path-fn)
[![Known Vulnerabilities](https://snyk.io/test/github/forceuser/svg-path-fn/badge.svg)](https://snyk.io/test/github/forceuser/svg-path-fn)

Library for creating functions based on svg path

## Installation

#### Install as npm package

```shell
npm i svg-path-fn --save
```

#### Or simply download \*.js file

[svg-path-fn.js@0.0.162](https://github.com/forceuser/svg-path-fn/releases/download/0.0.162/svg-path-fn.js)

[svg-path-fn.modern.js@0.0.162](https://github.com/forceuser/svg-path-fn/releases/download/0.0.162/svg-path-fn.modern.js) *for modern browsers only (see [.browserlistrc](https://github.com/forceuser/svg-path-fn/blob/master/.browserslistrc))*

#### Or just load from CDN

```html
<script src="//cdn.jsdelivr.net/npm/svg-path-fn@0.0.162/dist/svg-path-fn.js"
    integrity="sha512-GY0NCUz5G7AyFmCcMuO895+kCifh4KohvwJlDupAGskOIhQJttux7goRCUfQdDT3GUCRl7oTP0xnUbUnTC5msQ==" crossorigin="anonymous">
</script>
```

*if you need only modern browsers then use script below:*

```html
<script src="//cdn.jsdelivr.net/npm/svg-path-fn@0.0.162/dist/svg-path-fn.modern.js"
    integrity="sha512-mNBx+Uw9RKFzlpmy9YnP060YLoWtOvj2Fc+7wC+gSq6jCRyMLBNurpKRmBCDtLJsHLZ2VjQJEjjpK49hFvbd9g==" crossorigin="anonymous">
</script>
```

And then use **svgPathFn** as global variable
```html
<script>
	console.log(svgPathFn);
</script>
```

## Example

Run example with [runkit](https://npm.runkit.com/svg-path-fn)

```js
const svgPathFn = require("svg-path-fn");
const path1 = svgPathFn(`M 213.1,6.7
c -32.4-14.4-73.7,0-88.1,30.6
C 110.6,4.9,67.5-9.5,36.9,6.7
C 2.8,22.9-13.4,62.4,13.5,110.9
C 33.3,145.1,67.5,170.3,125,217
c 59.3-46.7,93.5-71.9,111.5-106.1
C 263.4,64.2,247.2,22.9,213.1,6.7
z`);

console.log(path1.val(0.42), path1.length);

const path2 = svgPathFn(`M 10 80 Q 52.5 10, 95 80 T 180 80`);

console.log(path2.val(0.2), path2.length);

const path3 = svgPathFn(`M 10 315
L 110 215
A 30 50 0 0 1 162.55 162.45
L 172.55 152.45
A 30 50 -45 0 1 215.1 109.9
L 315 10`);

console.log(path3.val(0.6), path3.length);

```
