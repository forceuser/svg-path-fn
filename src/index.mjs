import svgPathParser from "svg-path-parser";
const {parseSVG, makeAbsolute} = svgPathParser;
import {default as line, line as lineFn} from "./line.mjs";
import cubicBezier from "./cubic-bezier.mjs";
import quadraticBezier from "./quadratic-bezier.mjs";
import arc from "./arc.mjs";
import {round} from "./math.mjs";
import sectionBase from "./section-base.mjs";

export const mirrorPoint = (p, z) => {
	return {
		x: z.x - p.x + z.x,
		y: z.y - p.y + z.y,
	};
};

export default function svgPath (pathString) {
	const list = typeof pathString === "string" ? makeAbsolute(parseSVG(pathString)) : pathString;
	const sections = [];
	let lastHandle;
	list.forEach(item => {
		switch (item.code) {
			case "L":
			case "V":
			case "H":
			case "Z": {
				sections.push(line({x1: item.x0, y1: item.y0, x2: item.x, y2: item.y}));
				break;
			}
			case "A": {
				sections.push(arc({x1: item.x0, y1: item.y0, x2: item.x, y2: item.y, fa: item.largeArc, fs: item.sweep, rx: item.rx, ry: item.ry, phiDeg: item.xAxisRotation}));
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

				sections.push(quadraticBezier({x1: item.x0, y1: item.y0, x2: item.x, y2: item.y, hx: item.x1, hy: item.y1}));
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
				const section = cubicBezier({x1: item.x0, y1: item.y0, x2: item.x, y2: item.y, h1x: item.x1, h1y: item.y1, h2x: item.x2, h2y: item.y2});
				sections.push(section);
				lastHandle = {x: item.x2, y: item.y2};
				break;
			}
		}
	});

	return sectionBase("path", {pathString, sections}, t => {
		const item = sections.find(item => t >= item.from && t <= item.to);
		return item.val(lineFn(t, {x1: item.from, x2: item.to}));
	});
}
