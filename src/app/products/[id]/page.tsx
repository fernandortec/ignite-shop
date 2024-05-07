import * as cls from "@/app/products/[id]/styles";

interface Params {
	params: { id: string };
}

export default function ProductPage({ params }: Params): JSX.Element {
	return (
		<main className={cls.productContainer}>
			<div className={cls.imageContainer}>
				<p>opa</p>
			</div>

			<div className={cls.productDetails}>
				<h1>Camiseta 01</h1>
				<span> R$ 79.90</span>

				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
					obcaecati nostrum nemo porro illum, quaerat harum quis perferendis
					sunt similique est dolorem maiores voluptas expedita sint debitis odit
					ipsam in quidem tempore laudantium. Eligendi fuga adipisci eveniet
					numquam? Sint cum aspernatur omnis harum dolorum dignissimos a sed
					recusandae tempore error.
				</p>

				<button type="button">Comprar agora</button>
			</div>
		</main>
	);
}
