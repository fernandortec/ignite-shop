"use client";

import createCheckout from "@/api/stripe/create-checkout";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import * as S from "./styles";

interface PurchaseFormProps {
	priceId: string;
}

export function PurchaseForm({ priceId }: PurchaseFormProps): JSX.Element {
  const router = useRouter();

	async function handlePurchase(): Promise<void> {
		const checkoutUrl = await createCheckout(priceId);
		if (!checkoutUrl) throw new Error("Checkout URL must be set");

		router.push(checkoutUrl);
	}

	return (
		<button onClick={handlePurchase} className={S.formButton} type="submit">
			Comprar agora
		</button>
	);
}
