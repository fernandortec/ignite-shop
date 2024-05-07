import Link from "next/link";

import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";

import type { Metadata } from "next";
import Image from "next/image";
import * as s from "./styles";

export const metadata: Metadata = {
	title: "Sucesso | Ignite shop",
	description: "Parabéns por ter efetuado a compra",
	robots: "noindex"
};

interface SuccessPage {
	params: unknown;
	searchParams: { session_id: string };
}

export default async function SuccessPage({
	searchParams,
}: SuccessPage): Promise<JSX.Element> {
	if (!searchParams.session_id) return <p>Produto não identificado</p>;

	const session = await stripe.checkout.sessions.retrieve(
		searchParams.session_id,
		{
			expand: ["line_items", "line_items.data.price.product"],
		},
	);

	const customerName = session.customer_details?.name;
	const product = session.line_items?.data[0].price?.product as Stripe.Product;

	return (
		<main className={s.successContainer}>
			<h1>Compra efetuada</h1>

			<div className={s.imageContainer}>
				<Image alt="" src={product.images[0]} width={120} height={110} />
			</div>

			<p>
				Uhull <b>{customerName}</b>, sua <b>{product.name}</b> já está a caminho
				da sua casa.{" "}
			</p>

			<Link href="/">Voltar para o catálogo</Link>
		</main>
	);
}
