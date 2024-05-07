import { Carousel } from "@/app/(components)/carousel";
import { unstable_cache } from "next/cache";
import { getStripeProducts } from "@/api/get-stripe-products";

import * as S from "./styles";

export default async function Home() {
	const products = await unstable_cache(getStripeProducts)();

	return (
		<S.Container>
			<Carousel products={products} />
		</S.Container>
	);
}
