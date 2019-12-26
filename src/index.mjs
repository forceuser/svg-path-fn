import svgPathParser from "svg-path-parser";
const {parseSVG, makeAbsolute} = svgPathParser;
import {default as line, line as lineFn} from "./line.mjs";
import cubicBezier from "./cubic-bezier.mjs";
import quadraticBezier from "./quadratic-bezier.mjs";
import arc from "./arc.mjs";
import {round} from "./math.mjs";

export const mirrorPoint = (p, z) => {
	return {
		x: z.x - p.x + z.x,
		y: z.y - p.y + z.y,
	};
};

export default function svgPath (pathString) {
	const list = typeof pathString === "string" ? makeAbsolute(parseSVG(pathString)) : pathString;
	const pathList = [];
	let lastHandle;
	list.forEach(item => {
		switch (item.code) {
			case "L":
			case "V":
			case "H":
			case "Z": {
				pathList.push(line(item.x0, item.y0, item.x, item.y));
				break;
			}
			case "A": {
				pathList.push(arc(item.x0, item.y0, item.x, item.y, item.largeArc, item.sweep, item.rx, item.ry, item.xAxisRotation));
				break;
			}
			case "Q":
			case "T": {
				if (!("x1" in item)) {
					if (!lastHandle) {
						item.x1 = item.x0;
						item.y1 = item.y0;
					}
					else {
						const mirrored = mirrorPoint(lastHandle, {x: item.x0, y: item.y0});
						item.x1 = mirrored.x;
						item.y1 = mirrored.y;
					}
				}

				pathList.push(quadraticBezier(item.x0, item.y0, item.x, item.y, item.x1, item.y1));
				lastHandle = {x: item.x1, y: item.y1};
				break;
			}
			case "C":
			case "S": {
				if (!("x1" in item)) {
					if (!lastHandle) {
						item.x1 = item.x0;
						item.y1 = item.y0;
					}
					else {
						const mirrored = mirrorPoint(lastHandle, {x: item.x0, y: item.y0});
						item.x1 = mirrored.x;
						item.y1 = mirrored.y;
					}
				}

				pathList.push(cubicBezier(item.x0, item.y0, item.x, item.y, item.x1, item.y1, item.x2, item.y2));
				lastHandle = {x: item.x2, y: item.y2};
				break;
			}
		}
	});
	let length = 0;
	pathList.forEach(item => {
		length += item.length;
	});
	let start = 0;
	pathList.forEach(item => {
		item.start = round(start);
		item.size = item.length / length;
		start += item.size;
		item.end = round(start);
	});
	return {
		val (t) {
			const item = pathList.find(item => t >= item.start && t <= item.end);
			return item.val(lineFn(t, {x1: item.start, x2: item.end}));
		},
		get length () {
			return length;
		},
	};
}
