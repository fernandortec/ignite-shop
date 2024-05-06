import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	preflight: true,
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	theme: {
		extend: {
			tokens: {
				colors: {
					rocketseat: { value: "#8257e6" },
				},
			},
		},
	},
	jsxFramework: "react",
	outdir: "(styled-system)",
});
