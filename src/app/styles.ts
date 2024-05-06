import { styled } from "@/panda/jsx";

export const Container = styled("main", {
	base: {
		display: "flex",
		width: "100%",
		maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
		marginLeft: "auto",
		minHeight: "656px",
	},
});
