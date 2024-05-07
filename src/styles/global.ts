import { defineGlobalStyles } from "@pandacss/dev";

export const globalStyles = defineGlobalStyles({
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
		fontWeight: 400,
	},
});
