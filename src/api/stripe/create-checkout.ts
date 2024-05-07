"use server";

import { env } from "@/env";
import { stripe } from "@/lib/stripe";

export default async function createCheckout(
	priceId: string,
): Promise<string | null> {
	const successUrl = `${env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
	const cancel = env.NEXT_URL;

	const checkout = await stripe.checkout.sessions.create({
		success_url: successUrl,
		cancel_url: cancel,
		mode: "payment",
		line_items: [{ price: priceId, quantity: 1 }],
	});
	
	return checkout.url;
}
