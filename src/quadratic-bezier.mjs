import {round, pow, sqrt} from "./math.mjs";
import sectionBase from "./section-base.mjs";

export function createQuadraticBezier ({p1, p2, h}) {
	return function (t) {
		if (h) { // quadratic
			return {
				x: round(pow(1 - t) * p1.x + 2 * (1 - t) * t * h.x + pow(t) * p2.x),
				y: round(pow(1 - t) * p1.y + 2 * (1 - t) * t * h.y + pow(t) * p2.y),
			};
		}
	};
}

export default function (params) {
	const {x1, y1, x2, y2, hx, hy} = params;
	const fn = createQuadraticBezier({
		p1: {x: x1, y: y1},
		p2: {x: x2, y: y2},
		h: {x: hx, y: hy},
	});
	return sectionBase("quadratic-bezier", params, fn);
}

