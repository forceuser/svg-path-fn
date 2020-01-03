import {round, pow, sqrt} from "./math.mjs";
import sectionBase from "./section-base.mjs";

export function createCubicBezier ({p1, p2, h1, h2}) {
	return function (t) {
		return {
			x: round(pow(1 - t, 3) * p1.x +
				3 * pow(1 - t, 2) * t * h1.x +
				3 * (1 - t) * pow(t, 2) * h2.x +
				pow(t, 3) * p2.x),
			y: round(pow(1 - t, 3) * p1.y +
				3 * pow(1 - t, 2) * t * h1.y +
				3 * (1 - t) * pow(t, 2) * h2.y +
				pow(t, 3) * p2.y),
		};
	};
}

export default function (params, transformParams) {
	const {x1, y1, x2, y2, h1x, h1y, h2x, h2y} = params;
	const fn = createCubicBezier({
		p1: {x: x1, y: y1},
		p2: {x: x2, y: y2},
		h1: {x: h1x, y: h1y},
		h2: {x: h2x, y: h2y},
	});
	return sectionBase("cubic-bezier", params, fn, transformParams);
}

