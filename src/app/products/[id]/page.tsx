import { getProductDetails } from "@/api/stripe/get-product-details";
import { PurchaseForm } from "@/app/products/[id]/(components)/purchase-form";
import * as S from "@/app/products/[id]/styles";
import { priceFormatter } from "@/helpers/formatter";
import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Produto | Ignite shop",
	description: "Veja os detalhes do produto",
};

interface Params {
	params: { id: string };
}

export default async function ProductPage({
	params,
}: Params): Promise<JSX.Element> {
	const { id } = params;

	const product = await unstable_cache(() => getProductDetails(id), [], {
		revalidate: 60 * 60,
	})();

	return (
		<main className={S.productContainer}>
			<div className={S.imageContainer}>
				<Image src={product.imageUrl} alt="" width={520} height={480} />
			</div>

			<div className={S.productDetails}>
				<h1>{product.name}</h1>
				<span>{priceFormatter.format(product.price)}</span>

				<p>{product.description}</p>

				<PurchaseForm priceId={product.priceId} />
			</div>
		</main>
	);
}
