import { getStripeProducts } from "@/api/get-stripe-products";
import Carousel from "@/app/(components)/carousel";
import * as S from "./styles";
import { unstable_cache } from "next/cache";

export default async function Home() {
	const products = await unstable_cache(getStripeProducts)();

	return (
		<S.Container>
			<Carousel products={products} />
		</S.Container>
	);
}
