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
