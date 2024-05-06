import Image from "next/image";
import * as S from "./page-styles";

export default function Home() {
	return (
		<S.Container>
			<S.Product>
				<Image alt="" src="/assets/first-shirt.png" width="520" height="480" />

				<footer>
					<strong>Camiseta X</strong>
					<span>R$ 79,90</span>
				</footer>
			</S.Product>
			<S.Product>
				<Image alt="" src="/assets/first-shirt.png" width="520" height="480" />

				<footer>
					<strong>Camiseta X</strong>
					<span>R$ 79,90</span>
				</footer>
			</S.Product>
		</S.Container>
	);
}
