/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: { center: true }
		}
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')],
	daisyui: {
		logs: false
	}
};
