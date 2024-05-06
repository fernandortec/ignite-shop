import Carousel from "@/app/(components)/carousel";
import * as S from "./styles";

export default async function Home() {
	return (
		<S.Container>
			<Carousel />
		</S.Container>
	);
}
