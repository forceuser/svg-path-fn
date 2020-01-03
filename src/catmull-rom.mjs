import {round} from "./math.mjs";

export function catmullRomToSvgPath (data, k = 1) {
	const size = data.length;
	if (!size) {
		return;
	}

	let path = "M" + [round(data[0].x), round(data[0].y)].join(",") + "\n";
	const last = size - 2;
	for (let i = 0; i < size - 1; i++) {

		const r0 = i ? data[i - 1] : data[0];
		const r1 = data[i];
		const r2 = data[i + 1];
		const r3 = i !== last ? data[i + 2] : r2;

		const h1 = {
			x: r1.x + (r2.x - r0.x) / 6 * k,
			y: r1.y + (r2.y - r0.y) / 6 * k,
		};

		const h2 = {
			x: r2.x - (r3.x - r1.x) / 6 * k,
			y: r2.y - (r3.y - r1.y) / 6 * k,
		};

		path += "C" + [
			round(h1.x), round(h1.y),
			round(h2.x), round(h2.y),
			round(r2.x), round(r2.y),
		].join(",") + "\n";
	}

	return path;
}
