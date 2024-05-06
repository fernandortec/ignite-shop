import { styled } from "@/panda/jsx";

export const Container = styled("div", {
	base: {
		display: "flex",
		flexDir: "column",
		alignItems: "center",
		minHeight: "100vh",
		justifyContent: "center",
	},
});

export const Header = styled("header", {
	base: {
		padding: "2rem 0",
		width: "100%",
		maxW: "1100px",
		margin: "0 auto",
	},
});
