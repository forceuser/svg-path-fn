import {round, pow, sqrt} from "./math.mjs";
import sectionBase from "./section-base.mjs";


export function lineIntersection (line1StartX, line1StartY, line1EndX, line1EndY, line2StartX, line2StartY, line2EndX, line2EndY) {
	// if the lines intersect, the result contains the x and y of the intersection (treating the lines as infinite) and booleans for whether line segment 1 or line segment 2 contain the point
	const result = {
		x: null,
		y: null,
		a: false,
		b: false,
	};
	const denominator = ((line2EndY - line2StartY) * (line1EndX - line1StartX)) - ((line2EndX - line2StartX) * (line1EndY - line1StartY));
	if (denominator === 0) {
		return false;
	}
	let a = line1StartY - line2StartY;
	let b = line1StartX - line2StartX;
	const numerator1 = ((line2EndX - line2StartX) * a) - ((line2EndY - line2StartY) * b);
	const numerator2 = ((line1EndX - line1StartX) * a) - ((line1EndY - line1StartY) * b);
	a = numerator1 / denominator;
	b = numerator2 / denominator;

	// if we cast these lines infinitely in both directions, they intersect here:
	result.x = round(line1StartX + (a * (line1EndX - line1StartX)));
	result.y = round(line1StartY + (a * (line1EndY - line1StartY)));

	// if line1 is a segment and line2 is infinite, they intersect if:
	if (a > 0 && a < 1) {
		result.a = true;
	}
	// if line2 is a segment and line1 is infinite, they intersect if:
	if (b > 0 && b < 1) {
		result.b = true;
	}
	// if line1 and line2 are segments, they intersect if both of the above are true
	return result;
}

export const line = (x, {x1 = 0, y1 = 0, x2 = 1, y2 = 1}) => {
	return round(x2 === x1 ? y1 : ((x - x1) / (x2 - x1)) * (y2 - y1) + y1);
};

export default function (params, transformParams) {
	params.x1 = round(params.x1);
	params.x2 = round(params.x2);
	params.y1 = round(params.y1);
	params.y2 = round(params.y2);
	return sectionBase("line", params, t => {
		return {
			x: line(t, {y1: params.x1, y2: params.x2}),
			y: line(t, {y1: params.y1, y2: params.y2}),
		};
	}, transformParams);
}
