import {round, pow, sqrt} from "./math.mjs";

export const line = (x, {x1 = 0, y1 = 0, x2 = 1, y2 = 1, easingFn}) => {
	if (easingFn) {
		return line(easingFn(line(x, {x1, y1: 0, x2, y2: 1})), {x1: 0, y1, x2: 1, y2});
	}
	return round(x2 === x1 ? y1 : ((x - x1) / (x2 - x1)) * (y2 - y1) + y1);
};

export const lineLimit = (x, {x1 = 0, y1 = 0, x2 = 1, y2 = 1, easingFn}) => {
	const min = Math.min(x1, x2);
	const max = Math.max(x1, x2);
	const limitedX = Math.max(min, Math.min(max, x));
	return line(limitedX, {x1, y1, x2, y2, easingFn});
};

export default function (x1, y1, x2, y2) {
	let length;
	return {
		type: "line",
		val (t) {
			return {
				x: line(t, {y1: x1, y2: x2}),
				y: line(t, {y1, y2}),
			};
		},
		get length () {
			if (length == null) {
				length = sqrt(pow(x2 - x1) + pow(y2 - y1));
			}
			return length;
		},
	};
}
