import {line} from "./line.mjs";
import {round, deg, rad, pow, abs, sin, cos, sqrt, acos} from "./math.mjs";
import sectionBase from "./section-base.mjs";

const ellipse = (rx, ry, cx, cy, phi, a) => {
	const x = rx * cos(a);
	const y = ry * sin(a);
	// apply rotation
	return {
		x: round(x * cos(phi) - y * sin(phi) + cx),
		y: round(x * sin(phi) + y * cos(phi) + cy),
	};
};

function getCenterParameters (x1, y1, x2, y2, fa, fs, rx, ry, phi) {
	rx = abs(rx);
	ry = abs(ry);
	fa = fa ? 1 : 0;
	fs = fs ? 1 : 0;

	const sinphi = sin(phi);
	const cosphi = cos(phi);

	// Step 1: simplify through translation/rotation
	const x = round(cosphi * (x1 - x2) / 2 + sinphi * (y1 - y2) / 2);
	const y = round(-sinphi * (x1 - x2) / 2 + cosphi * (y1 - y2) / 2);

	const px = pow(x);
	const py = pow(y);
	let prx = pow(rx);
	let pry = pow(ry);

	// correct of out-of-range radii
	const L = round(px / prx + py / pry);
	if (L > 1) {
		rx = sqrt(L) * rx;
		ry = sqrt(L) * ry;
		prx = pow(rx);
		pry = pow(ry);
	}

	// Step 2 + 3: compute center
	const sign = fa === fs ? -1 : 1;
	const M = sqrt((prx * pry - prx * py - pry * px) / (prx * py + pry * px)) * sign;

	const _cx = round(M * (rx * y) / ry);
	const _cy = round(M * -((ry * x) / rx));

	const cx = round(cosphi * _cx - sinphi * _cy + (x1 + x2) / 2);
	const cy = round(sinphi * _cx + cosphi * _cy + (y1 + y2) / 2);

	// Step 4: compute θ and dθ
	const theta = vectorAngle(
		[1, 0],
		[(x - _cx) / rx, (y - _cy) / ry]
	);

	let _dTheta = deg(vectorAngle(
		[(x - _cx) / rx, (y - _cy) / ry],
		[(-x - _cx) / rx, (-y - _cy) / ry]
	)) % 360;

	if (fs === 0 && _dTheta > 0) {
		_dTheta -= 360;
	}
	if (fs === 1 && _dTheta < 0) {
		_dTheta += 360;
	}

	return {cx, cy, rx, ry, theta, dTheta: rad(_dTheta)};
}

function vectorAngle ([ux, uy], [vx, vy]) {
	const sign = ux * vy - uy * vx < 0 ? -1 : 1;
	const ua = sqrt(ux * ux + uy * uy);
	const va = sqrt(vx * vx + vy * vy);
	const dot = round(ux * vx + uy * vy);
	const res = sign * acos(dot / (ua * va));
	return res;
}

export default function (params) {
	const {x1, y1, x2, y2, fa, fs, rx, ry, phiDeg} = params;
	let length;
	if (!rx || !ry) {
		// return {
		// 	type: "arc",
		// 	val (t) {
		// 		return {
		// 			x: line(t, {y1: x1, y2: x2}),
		// 			y: line(t, {y1, y2}),
		// 		};
		// 	},
		// 	get length () {
		// 		if (length == null) {
		// 			length = sqrt(pow(x2 - x1) + pow(y2 - y1));
		// 		}
		// 		return length;
		// 	},
		// };
	}

	const ellipseParams = getCenterParameters(x1, y1, x2, y2, fa, fs, rx, ry, rad(phiDeg));

	return sectionBase("arc", params, t => {
		const a = line(t, {y1: ellipseParams.theta, y2: ellipseParams.theta + ellipseParams.dTheta});
		return ellipse(ellipseParams.rx, ellipseParams.ry, ellipseParams.cx, ellipseParams.cy, rad(phiDeg), a);
	});
}
