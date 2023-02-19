const swap = <T>(t: T[], i: number, j: number) => {
	[t[i], t[j]] = [t[j], t[i]];
};

export const shuffle = <T>(t: T[]) => {
	for (let i = t.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		swap(t, i, j);
	}
};
