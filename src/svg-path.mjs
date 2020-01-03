import svgPathParser from "svg-path-parser";
import {default as lineFn, line} from "./line.mjs";
import {mirrorPoint} from "./utils.mjs";
import {catmullRomToSvgPath} from "./catmull-rom.mjs";
import cubicBezierFn from "./cubic-bezier.mjs";
import quadraticBezierFn from "./quadratic-bezier.mjs";
import arcFn from "./arc.mjs";
import sectionBase from "./section-base.mjs";

const {parseSVG, makeAbsolute} = svgPathParser;


export function fromData (data, k, transformFn) {
	const pathString = catmullRomToSvgPath(data, k);
	return svgPath(pathString, transformFn);
}

export default function svgPath (pathString, transformFn) {

	return sectionBase("path", {pathString, onInit: (sectionThis) => {
		const list = typeof pathString === "string" ? makeAbsolute(parseSVG(pathString)) : pathString;
		const sections = [];
		let lastHandle;
		sectionThis.sections = sections;
		list.forEach(item => {
			switch (item.code) {
				case "L":
				case "V":
				case "H":
				case "Z": {
					sections.push(lineFn({x1: item.x0, y1: item.y0, x2: item.x, y2: item.y}, transformFn));
					break;
				}
				case "A": {
					sections.push(arcFn({x1: item.x0, y1: item.y0, x2: item.x, y2: item.y, fa: item.largeArc, fs: item.sweep, rx: item.rx, ry: item.ry, phiDeg: item.xAxisRotation}, transformFn));
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

					sections.push(quadraticBezierFn({x1: item.x0, y1: item.y0, x2: item.x, y2: item.y, hx: item.x1, hy: item.y1}, transformFn));
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
					const section = cubicBezierFn({x1: item.x0, y1: item.y0, x2: item.x, y2: item.y, h1x: item.x1, h1y: item.y1, h2x: item.x2, h2y: item.y2}, transformFn);
					sections.push(section);
					lastHandle = {x: item.x2, y: item.y2};
					break;
				}
			}
		});
	}}, (t, sectionThis) => {
		const item = sectionThis.sections.find(item => t >= item.from && t <= item.to);
		const result = item.val(line(t, {x1: item.from, x2: item.to}));
		return result;
	});
}

svgPath.fromData = fromData;
