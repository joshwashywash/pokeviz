export const difference = <T>(a: Set<T>, b: Set<T>): Set<T> => {
	const diff = new Set(a);
	for (const e of b) {
		diff.delete(e);
	}
	return diff;
};
