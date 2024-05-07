import { css } from "@/panda/css";

export const productContainer = css({
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	alignItems: "stretch",
	gap: "4rem",

	maxWidth: "1180px",
	margin: "0 auto",
});

export const imageContainer = css({
	width: "100%",
	maxWidth: "576px",
	height: "calc(656px - 0.5rem)",
	background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
	borderRadius: "8px",
	padding: "0.25rem",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",

	"& img": {
		objectFit: "cover",
	},
});

export const productDetails = css({
	display: "flex",
	flexDirection: "column",

	"& h1": {
		fontSize: "2xl",
		fontWeight: "bold",
		color: "gray.300",
	},

	"& span": {
		marginTop: "1rem",
		display: "block",
		fontSize: "2xl",
		color: "green.300",
	},

	"& p": {
		marginTop: "2.5rem",
		fontSize: "md",
		lineHeight: 1.6,
		color: "gray.300",
	},

	"& button": {
		marginTop: "auto",
		backgroundColor: "green.500",
		border: 0,
		borderRadius: 8,
		padding: "1.25rem",
		cursor: "pointer",
		fontWeight: "bold",
		transition: "all 0.5s",
		fontSize: "md",

		_hover: {
			backgroundColor: "green.300",
		},
	},
});
