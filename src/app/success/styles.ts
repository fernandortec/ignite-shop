import { css } from "@/panda/css";

export const successContainer = css({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	margin: "0 auto",
	height: 656,

	"& h1": {
		fontSize: "3xl",
		color: "gray.100",
		fontWeight: "bold",
	},

	"& p": {
		fontSize: "xl",
		color: "gray.300",
		maxWidth: 560,
		textAlign: "center",
		marginTop: "2rem",
    lineHeight: 1.4
	},

	"& a": {
		display: "block",
		marginTop: "5rem",
		color: "green.500",
		fontSize: "lg",
		textDecoration: "none",
		fontWeight: "bold",

		_hover: { color: "green.300" },
	},
});

export const imageContainer = css({
	width: "100%",
	maxWidth: 180,
	height: 154,
	background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
	borderRadius: 8,
	padding: "0.25rem",

	marginTop: "4rem",

	display: "flex",
	alignItems: "center",
	justifyContent: "center",

	"& img": {
		objectFit: "cover",
	},
});
