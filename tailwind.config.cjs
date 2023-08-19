/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			intro: ['"Alata", sans-serif'],
			display: ['"Inconsolata", monospace']
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
