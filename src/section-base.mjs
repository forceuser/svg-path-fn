import {round, pow, sqrt} from "./math.mjs";
import {line, lineIntersection, default as lineFn} from "./line.mjs";
import svgPathFn from "./svg-path.mjs";

let id = 0;
export default function (type, params, fn, transformFn) {
	const section = {
		id: ++id,
		type,
		slices: [],
		params,
		val (t) {
			const section = this;
			let res = fn.call(section, t, section);
			if (transformFn && section.type !== "path") {
				const transRes = transformFn({x: res.x, y: res.y});
				if (transRes) {
					res = transRes;
				}
			}

			return res;
		},
		// transform (transformFn) {
		// 	const section = Object.create(this);
		// 	return section.init(transformFn);
		// },
		debugSlices: [],
		intersectX (x) {
			return this.intersect(lineFn({x1: x, x2: x, y1: 0, y2: 1, infinite: true}));
		},
		intersectY (y) {
			return this.intersect(lineFn({x1: 0, x2: 1, y1: y, y2: y, infinite: true}));
		},
		intersectLine (params) {
			return this.intersect(lineFn(params));
		},
		intersect (sectionB) {
			if (typeof sectionB === "string") {
				sectionB = svgPathFn(sectionB);
			}
			const sectionA = this;
			const makeSlices = (fn, from, to, count = 7, zoom) => {
				const slices = [];
				const inc = (to - from) / count;
				let t = from;
				let lt;
				let i = 0;
				let l;
				while (i <= count) {
					// Math.max(0, Math.min(1, round(t)))
					const p = fn.val(t);
					if (l) {
						slices.push({
							ay: l.y,
							ax: l.x,
							by: p.y,
							bx: p.x,
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
			const createSliceForLine = (lineSection, limitSlice) => {
				const l = lineSection.params;
				const s = limitSlice;
				const from = {x: Math.min(s.ax, s.bx), y: Math.min(s.ay, s.by)};
				const to = {x: Math.max(s.ax, s.bx), y: Math.max(s.ay, s.by)};
				const points = [
					lineIntersection(l.x1, l.y1, l.x2, l.y2, from.x, from.y, to.x, from.y), // top edge
					lineIntersection(l.x1, l.y1, l.x2, l.y2, to.x, from.y, to.x, to.y), // right edge
					lineIntersection(l.x1, l.y1, l.x2, l.y2, from.x, to.y, to.x, to.y), // bottom edge
					lineIntersection(l.x1, l.y1, l.x2, l.y2, from.x, from.y, from.x, to.y), // left edge
				].filter(i => i && i.x >= from.x && i.x <= to.x && i.y >= from.y && i.y <= to.y);
				return {
					ax: points[0].x,
					ay: points[0].y,
					bx: points[1].x,
					by: points[1].y,
					from: l.x1 === l.x2 ? line(points[0].y, {x1: l.y1, x2: l.y2}) : line(points[0].x, {x1: l.x1, x2: l.x2}),
					to: l.x1 === l.x2 ? line(points[1].y, {x1: l.y1, x2: l.y2}) : line(points[1].x, {x1: l.x1, x2: l.x2}),
				};
			};

			const compareSlices = (slicesA, slicesB, {sectionA, sectionB}, zoom = 3) => {
				const intersections = [];
				for (let i = 0; i < slicesA.length; i++) {
					for (let j = 0; j < slicesB.length; j++) {
						let sliceA = slicesA[i];
						let sliceB = slicesB[j];
						let ipoint = lineIntersection(
							sliceA.ax, sliceA.ay, sliceA.bx, sliceA.by,
							sliceB.ax, sliceB.ay, sliceB.bx, sliceB.by
						);
						if (ipoint && (ipoint.a || (sectionA.line && sectionA.params.infinite)) && (ipoint.b || (sectionB.line && sectionB.params.infinite))) {// && !intersects.some(i => i.x === ipoint.x && i.y === ipoint.y)) {
							// intersects.push(ipoint);
							if (zoom > 1 && (!sectionA.line || !sectionB.line)) { // zoom in
								const _slicesA = sectionA.line ? [sliceA] : makeSlices(sectionA, sliceA.from, sliceA.to, 10, zoom);
								const _slicesB = sectionB.line ? [sliceB] : makeSlices(sectionB, sliceB.from, sliceB.to, 10, zoom);
								sectionA.debugSlices.push.apply(sectionA.debugSlices, _slicesA);
								sectionB.debugSlices.push.apply(sectionB.debugSlices, _slicesB);
								intersections.push.apply(intersections, compareSlices(
									_slicesA,
									_slicesB,
									{sectionA, sectionB},
									zoom - 1
								));
							}
							else {
								let a;
								let b;
								if (sectionA.line && sectionB.line) {
									const pa = sectionA.params;
									const pb = sectionB.params;
									a = pa.x1 === pa.x2 ? line(ipoint.y, {x1: pa.y1, x2: pa.y2}) : line(ipoint.x, {x1: pa.x1, x2: pa.x2});
									b = pb.x1 === pb.x2 ? line(ipoint.y, {x1: pb.y1, x2: pb.y2}) : line(ipoint.x, {x1: pb.x1, x2: pb.x2});
								}
								else {
									if (sectionA.line) {
										sliceA = createSliceForLine(sectionA, sliceB);
									}
									if (sectionB.line) {
										sliceB = createSliceForLine(sectionB, sliceA);
									}

									a = (sliceA.from + sliceA.to) / 2;
									b = (sliceB.from + sliceB.to) / 2;

									let da = a;
									let db = b;
									let maxCount = 20;
									const accuracy = 1 / 10000000;
									const iter = (isX) => {
										da = da / 2;
										db = db / 2;
										const vav = [a, a + da, a - da];
										const vbv = [b, b + db, b - db];

										const va = (isX || isX == null) ? vav.map(i => sectionA.val(i).x) : vav.map(i => sectionA.val(i).y);
										const vb = (isX || isX == null) ? vbv.map(i => sectionB.val(i).x) : vbv.map(i => sectionB.val(i).y);

										if (isX === null) {
											isX = !((va[0] === va[1] && va[0] === va[2]) || (vb[0] === vb[1] && vb[0] === vb[2]));
										}
										let min;
										let minAidx;
										let minBidx;
										va.forEach((vai, vaidx) => {
											vb.forEach((vbi, vbidx) => {
												const v = Math.abs(vai - vbi);
												if (min == null || v < min) {
													min = v;
													minAidx = vaidx;
													minBidx = vbidx;
												}
											});
										});
										a = vav[minAidx];
										b = vbv[minBidx];

										if (min > accuracy && maxCount > 0) {
											maxCount--;
											iter(isX);
										}
									};
									iter();
									ipoint = sectionA.val(a);
								}

								intersections.push({
									x: ipoint.x,
									y: ipoint.y,
									t: {a, b},
									abs: {
										a: line(a, {y1: sectionA.from, y2: sectionA.to}),
										b: line(b, {y1: sectionB.from, y2: sectionB.to}),
									},
									sliceA,
									sliceB,
									sectionA,
									sectionB,
									zoom,
								});
							}

						}
					}
				}
				return intersections;
			};
			const sectionsA = sectionA.type === "path" ? sectionA.sections : [sectionA];
			const sectionsB = sectionB.type === "path" ? sectionB.sections : [sectionB];
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
		init (transformFn) {
			const sectionThis = this;
			sectionThis.transformFn = transformFn;
			if (typeof sectionThis.params.onInit === "function") {
				sectionThis.params.onInit(sectionThis);
			}

			let length = 0;
			if (sectionThis.type === "line") {
				length = sqrt(
					pow(sectionThis.params.x2 - sectionThis.params.x1) +
					pow(sectionThis.params.y2 - sectionThis.params.y1)
				);
				sectionThis.line = true;

				sectionThis.rect = {
					top: Math.min(sectionThis.params.y1, sectionThis.params.y2),
					left: Math.min(sectionThis.params.x1, sectionThis.params.x2),
					bottom: Math.max(sectionThis.params.y1, sectionThis.params.y2),
					right: Math.max(sectionThis.params.x1, sectionThis.params.x2),
				};

				sectionThis.slices.push({
					ay: sectionThis.params.y1,
					ax: sectionThis.params.x1,
					by: sectionThis.params.y2,
					bx: sectionThis.params.x2,
					from: 0,
					to: 1,
				});
			}
			else if (sectionThis.type === "path") {
				const sections = sectionThis.sections;
				sections.forEach(section => {
					length += section.length;
				});
				let t = 0;
				sections.forEach(section => {
					section.from = round(t);
					section.size = section.length / length;
					section.path = sectionThis;
					t += section.size;
					section.to = round(t);
				});
			}
			else {
				const accuracy = 7;
				let l = sectionThis.val(0);
				let lt = 0;
				for (let i = 1; i <= accuracy; i++) {
					const t = i / accuracy;
					const p = sectionThis.val(t);
					if (!sectionThis.rect) {
						sectionThis.rect = {
							top: p.y,
							left: p.x,
							bottom: p.y,
							right: p.x,
						};
					}

					if (p.y < sectionThis.rect.top) {
						sectionThis.rect.top = p.y;
					}
					if (p.x < sectionThis.rect.left) {
						sectionThis.rect.left = p.x;
					}
					if (p.y > sectionThis.rect.bottom) {
						sectionThis.rect.bottom = p.y;
					}
					if (p.x > sectionThis.rect.right) {
						sectionThis.rect.right = p.x;
					}

					sectionThis.slices.push({
						ay: l.y,
						ax: l.x,
						by: p.y,
						bx: p.x,
						from: lt,
						to: t,
					});

					length += sqrt(pow(p.x - l.x) + pow(p.y - l.y));
					l = p;
					lt = t;
				}
			}
			length = round(length);
			sectionThis.length = length;
			return sectionThis;
		},
	};

	return section.init(transformFn);
}
