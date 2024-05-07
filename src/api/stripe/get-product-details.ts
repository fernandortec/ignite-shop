import type { Product } from "@/api/stripe/product";
import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";

interface ProductDetailed extends Product {
	description: string | null;
  priceId: string
}

export async function getProductDetails(
	productId: string,
): Promise<ProductDetailed> {
	const product = await stripe.products.retrieve(productId, {
		expand: ["default_price"],
	});

	const price = product.default_price as Stripe.Price;

	console.log(product)

	const mappedProduct: ProductDetailed = {
		id: product.id,
		name: product.name,
		imageUrl: product.images[0],
		price: Number(price.unit_amount) / 100,
		description: product.description,
    priceId: price.id
	};

	return mappedProduct;
}
