/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure paths are correct
	theme: {
	  extend: {},
	},
	plugins: [
	  require('daisyui'), // This is the correct way to add daisyUI
	],
  
	daisyui: {
	  themes: [
		"light",
		{
		  black: {
			primary: "rgb(29, 155, 240)",
			secondary: "rgb(24, 24, 24)",
		  },
		},
	  ],
	},
  };
  