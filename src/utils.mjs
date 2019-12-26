
export const cycle = (value, max = 1, min = 0) => {
	value = value - min;
	return (value < 0 ? ((max + (value % max)) % max) : value % max) + min;
};

export const clamp = (value, min, max) => {
	if (min > max) {
		[max, min] = [min, max];
	}
	const cl = Math.max(min, Math.min(max, value));
	return cl;
};

export const mirrorPoint = (p, z) => {
	return {
		x: z.x - p.x + z.x,
		y: z.y - p.y + z.y,
	};
};
