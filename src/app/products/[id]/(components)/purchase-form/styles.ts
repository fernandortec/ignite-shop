import { css } from "@/panda/css";

export const formButton = css({
	cursor: "pointer",
	border: 0,
	padding: "1.25rem",
	fontSize: "md",
	marginTop: "auto",
	fontWeight: "bold",
	transition: "all 0.5s",
	borderRadius: 8,
	backgroundColor: "green.500",
	width: "100%",

	_hover: {
		backgroundColor: "green.300",
	},
});

export const form = css({
	width: "100%",
	height: "100%",
	display: "flex",
	justifyContent: "end",
});
