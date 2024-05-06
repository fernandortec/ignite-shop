import { css } from "@/panda/css";
import { styled } from "@/panda/jsx";

const ConstButton = styled("button", { base: { bgColor: "rocketseat" } });

export default function Home() {
	return (
		<div>
			<p className={css({ color: "rocketseat" })}>helo world</p>
		</div>
	);
}
