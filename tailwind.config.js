/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#2af73b",

					secondary: "#bf8601",

					accent: "#5fd3dd",

					neutral: "#211c27",

					"base-100": "#2c2f44",

					info: "#4967d4",

					success: "#1ec28c",

					warning: "#d28f14",

					error: "#ea4b48",
				},
			},
		],
	},
};
