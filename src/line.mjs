import {round, pow, sqrt} from "./math.mjs";
import sectionBase from "./section-base.mjs";

export const line = (x, {x1 = 0, y1 = 0, x2 = 1, y2 = 1}) => {
	return round(x2 === x1 ? y1 : ((x - x1) / (x2 - x1)) * (y2 - y1) + y1);
};

export default function (params) {
	const {x1, y1, x2, y2} = params;
	return sectionBase("line", params, t => {
		return {
			x: line(t, {y1: x1, y2: x2}),
			y: line(t, {y1, y2}),
		};
	});
}
