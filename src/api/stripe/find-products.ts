import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";

export interface Product {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
}

export async function findStripeProducts(): Promise<Product[]> {
	const response = await stripe.products.list({
		expand: ["data.default_price"],
	});

	const productsMapping: Product[] = response.data.map((product) => {
		const price = product.default_price as Stripe.Price;

		return {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price: Number(price.unit_amount) / 100,
		};
	});

	return productsMapping;
}
