import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalStyles = defineGlobalStyles({
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
	},

	body: {
		fontSmoothing: "antialiased",
		bgColor: "gray.900",
		color: "gray.100",
	},
	"body,input,textarea,button": {
		fontFamily: "Roboto",
		fontWeight: 400,
	},
});

export default defineConfig({
	preflight: true,
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	theme: {
		extend: {
			tokens: {
				colors: {
					white: { value: "#FFF" },

					"gray.100": { value: "#e1e1e6" },
					"gray.300": { value: "#c4c4cc" },
					"gray.800": { value: "#202024" },
					"gray.900": { value: "#121214" },

					"green.300": { value: "#00b37e" },
					"green.500": { value: "#00875f" },
				},
			},
		},
	},
	jsxFramework: "react",
	outdir: "(styled-system)",
	globalCss: globalStyles,
});
