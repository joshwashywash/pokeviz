export const createLoopPath = (x: number, y: number, diameter: number) => {
	const l = Math.hypot(x, y);
	const [tx, ty] = [x, y].map((s) => (diameter * s) / l);

	const r = Math.max(tx, ty) / 2;

	const prefix = `${r} ${r} 0 0 0`;
	return `M${x} ${y} a${prefix} ${tx} ${ty} ${prefix} ${-tx} ${-ty}`;
};

export const circlePath = (sx: number, sy: number, dx: number, dy: number) => {
	const diffX = dx - sx;
	const diffY = dy - sy;
	const r = Math.hypot(diffX, diffY);
	return `M${sx} ${sy}a${r} ${r} 0 0 0 ${diffX} ${diffY}`;
};
