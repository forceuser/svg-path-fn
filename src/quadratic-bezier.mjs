import {round, pow, sqrt} from "./math.mjs";

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

export default function (x1, y1, x2, y2, hx, hy) {
	const bezier = createQuadraticBezier({
		p1: {x: x1, y: y1},
		p2: {x: x2, y: y2},
		h: {x: hx, y: hy},
	});
	let length;
	return {
		type: "quadratic-bezier",
		val (t) {
			return bezier(t);
		},
		get length () {
			if (length == null) {
				length = 0;
				const accuracy = 10;
				let l = this.val(0);
				for (let i = 1; i <= accuracy; i++) {
					const p = this.val(i / accuracy);
					length += sqrt(pow(p.x - l.x) + pow(p.y - l.y));
					l = p;
				}
				length = round(length);
			}
			return length;
		},
	};
}

