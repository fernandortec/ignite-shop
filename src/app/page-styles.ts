import { styled } from "@/panda/jsx";

export const Container = styled("main", {
	base: {
		display: "flex",
		gap: "3rem",
		width: "100%",
		maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
		marginLeft: "auto",
		minHeight: "656px",
	},
});

export const Product = styled("div", {
	base: {
		background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
		borderRadius: "8px",
		padding: "0.25rem",
		cursor: "pointer",
		position: "relative",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden",

		_hover: {
			"& footer": {
				transform: "translateY(0%)",
				opacity: 1,
			},
		},

		"& img": {
			objectFit: "cover",
		},

		"& footer": {
			position: "absolute",
			bottom: "0.25rem",
			left: "0.25rem",
			right: "0.25rem",

			transform: "translateY(110%)",
			opacity: 0,
			transition: "all 0.2s ease-in-out",

			padding: "2rem",
			borderRadius: "6px",

			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",

			bgColor: "rgba(0, 0, 0, 0.6)",

			"& strong": {
				fontSize: "xl",
			},

			"& span": {
				fontSize: "xl",
				fontWeight: "bold",
				color: "green.300",
			},
		},
	},
});
