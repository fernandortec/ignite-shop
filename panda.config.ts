import { globalStyles } from "@/styles/global";
import { defineConfig } from "@pandacss/dev";

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

				fontSizes: {
					md: { value: "1.125rem" },
					lg: { value: "1.25rem" },
					xl: { value: "1.5rem" },
					"2xl": { value: "2rem" },
				},
			},
		},
	},
	jsxFramework: "react",
	outdir: "(styled-system)",
	globalCss: globalStyles,
});
