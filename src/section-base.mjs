import {round, pow, sqrt} from "./math.mjs";
import {line} from "./line.mjs";

export default function (type, params, fn) {
	let length;


	const ctrl = {
		type,
		slices: [],
		params,
		val (t) {
			return fn(t);
		},
		debugSlices: [],
		intersect (section) {
			const intersect = (rect1, rect2) => !(
				rect1.right < rect2.left ||
				rect1.left > rect2.right ||
				rect1.bottom < rect2.top ||
				rect1.top > rect2.bottom
			);

			const makeSlices = (fn, from, to, count = 10, zoom) => {
				const slices = [];
				const inc = (to - from) / count;
				let t = from;
				let lt;
				let i = 0;
				let l;
				while (i <= count) {
					const p = fn.val(Math.max(0, Math.min(1, round(t))));
					if (l) {
						slices.push({
							top: p.y < l.y ? p.y : l.y,
							left: p.x < l.x ? p.x : l.x,
							bottom: p.y > l.y ? p.y : l.y,
							right: p.x > l.x ? p.x : l.x,
							from: lt,
							to: t,
							zoom,
						});
					}
					l = p;
					lt = t;
					t += inc;
					i++;
				}
				return slices;
			};
			const compareSlices = (slicesA, slicesB, {sectionA, sectionB}, zoom = 2) => {
				const intersections = [];
				const intersects = [];
				for (let i = 0; i < slicesA.length; i++) {
					for (let j = 0; j < slicesB.length; j++) {
						const sliceA = slicesA[i];
						const sliceB = slicesB[j];
						if (!intersects.includes(sliceA) && !intersects.includes(sliceB) && intersect(sliceA, sliceB)) {
							intersects.push(sliceA, sliceB);
							// if (zoom > 1 && (!sliceA.simple || !sliceB.simple)) {
							// 	const _slicesA = sliceA.simple ? [sliceA] : makeSlices(this, sliceA.from, sliceA.to, 10, zoom);
							// 	const _slicesB = sliceB.simple ? [sliceB] : makeSlices(section, sliceB.from, sliceB.to, 10, zoom);
							// 	sectionA.debugSlices.push.apply(sectionA.debugSlices, _slicesA);
							// 	sectionB.debugSlices.push.apply(sectionB.debugSlices, _slicesB);
							// 	intersections.push.apply(intersections, compareSlices(
							// 		_slicesA,
							// 		_slicesB,
							// 		{sectionA, sectionB},
							// 		zoom - 1
							// 	));
							// }
							// else {
							const a = (sliceA.from + sliceA.to) / 2;
							const b = (sliceB.from + sliceB.to) / 2;
							intersections.push({
								x: (Math.min(sliceA.left, sliceB.left) + Math.max(sliceA.right, sliceB.right)) / 2,
								y: (Math.min(sliceA.top, sliceB.top) + Math.max(sliceA.bottom, sliceB.bottom)) / 2,
								t: {a, b},
								abs: {
									a: line(a, {x1: sectionA.from, x2: sectionA.to}),
									b: line(b, {x1: sectionB.from, x2: sectionB.to}),
								},
								sliceA,
								sliceB,
								sectionA,
								sectionB,
								zoom,
							});
							// }

						}
					}
				}
				return intersections;
			};
			const sectionsA = this.type === "path" ? this.params.sections : [this];
			const sectionsB = section.type === "path" ? section.params.sections : [section];
			const intersections = [];

			for (let i = 0; i < sectionsA.length; i++) {
				for (let j = 0; j < sectionsB.length; j++) {
					const sectionA = sectionsA[i];
					const sectionB = sectionsB[j];
					intersections.push.apply(intersections,
						compareSlices(sectionA.slices, sectionB.slices, {sectionA, sectionB})
					);
				}
			}
			return intersections;
		},
	};

	if (length == null) {
		length = 0;
		// if (this.type === "line") {
		// 	length = sqrt(
		// 		pow(this.params.x2 - this.params.x1) +
		// 		pow(this.params.y2 - this.params.y1)
		// 	);

		// 	this.rect = {
		// 		top: Math.min(this.params.y1, this.params.y2),
		// 		left: Math.min(this.params.x1, this.params.x2),
		// 		bottom: Math.max(this.params.y1, this.params.y2),
		// 		right: Math.max(this.params.x1, this.params.x2),
		// 		from: 0,
		// 		to: 1,
		// 		simple: true,
		// 	};
		// 	this.slices.push(this.rect);
		// 	return length;
		// }
		// else
		if (ctrl.type === "path") {
			const {sections} = this.params;
			let length = 0;
			sections.forEach(item => {
				length += item.length;
			});
			let t = 0;
			sections.forEach(section => {
				section.from = round(t);
				section.size = section.length / length;
				t += section.size;
				section.to = round(t);
			});
		}

		const accuracy = 20;
		let l = ctrl.val(0);
		let lt = 0;
		for (let i = 1; i <= accuracy; i++) {
			const t = i / accuracy;
			const p = ctrl.val(t);
			if (!ctrl.rect) {
				ctrl.rect = {
					top: p.x,
					left: p.y,
					bottom: p.x,
					right: p.y,
					from: 0,
					to: 1,
				};
			}

			if (p.y < ctrl.rect.top) {
				ctrl.rect.top = p.y;
			}
			if (p.x < ctrl.rect.left) {
				ctrl.rect.left = p.x;
			}
			if (p.y > ctrl.rect.bottom) {
				ctrl.rect.bottom = p.y;
			}
			if (p.x > ctrl.rect.right) {
				ctrl.rect.right = p.x;
			}

			ctrl.slices.push({
				top: p.y < l.y ? p.y : l.y,
				left: p.x < l.x ? p.x : l.x,
				bottom: p.y > l.y ? p.y : l.y,
				right: p.x > l.x ? p.x : l.x,
				from: lt,
				to: t,
			});

			length += sqrt(pow(p.x - l.x) + pow(p.y - l.y));
			l = p;
			lt = t;
		}
		length = round(length);
	}

	if (type === "path") {
		params.sections.forEach(section => {
			section.path = ctrl;
		});
	}
	ctrl.length = length;

	return ctrl;
}
