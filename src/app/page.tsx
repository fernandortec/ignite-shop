import { styled } from "@/panda/jsx";

const ConstButton = styled("button", {
	base: { bgColor: "gray.300", cursor: "pointer", padding: "40" },
});

export default function Home() {
	return (
		<div>
			<ConstButton> heoooolo </ConstButton>
		</div>
	);
}
