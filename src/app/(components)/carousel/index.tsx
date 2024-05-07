"use client";

import Image from "next/image";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { priceFormatter } from "@/helpers/formatter";
import type { Product } from "@/api/get-stripe-products";

import * as S from "./styles";

interface CarouselProps {
	products: Product[];
}

export  function Carousel({ products }: CarouselProps) {
	const [sliderRef] = useKeenSlider({ slides: { perView: 3, spacing: 48 } });

	return (
		<S.Container ref={sliderRef} className="keen-slider">
			{products.map((product) => (
				<S.Product href={`/products/${product.id}`} key={product.id} className="keen-slider__slide">
					<Image alt="" src={product.imageUrl} width="520" height="480" />

					<footer>
						<strong>{product.name}</strong>
						<span>{priceFormatter.format(product.price)}</span>
					</footer>
				</S.Product>
			))}
		</S.Container>
	);
}
