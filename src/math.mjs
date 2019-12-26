export const round = (val, accuracy = 10000000) => {
	return Math.round(val * accuracy) / accuracy;
};

export const deg = rad => round(rad * 180 / Math.PI);
export const rad = deg => round(deg * Math.PI / 180);
export const pow = (val, p = 2) => round(Math.pow(round(val), p));
export const abs = val => round(Math.abs(round(val)));
export const sin = val => round(Math.sin(round(val)));
export const cos = val => round(Math.cos(round(val)));
export const sqrt = val => round(Math.sqrt(round(val)));
export const acos = val => round(Math.acos(round(val)));


