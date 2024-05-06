"use client";

import { useKeenSlider } from "keen-slider/react";
import * as S from "./styles";
import Image from "next/image";

export default function Carousel() {
	const [sliderRef] = useKeenSlider({ slides: { perView: 3, spacing: 48 } });

	return (
		<S.Container ref={sliderRef} className="keen-slider">
			<S.Product className="keen-slider__slide">
				<Image alt="" src="/assets/first-shirt.png" width="520" height="480" />

				<footer>
					<strong>Camiseta X</strong>
					<span>R$ 79,90</span>
				</footer>
			</S.Product>
			<S.Product className="keen-slider__slide">
				<Image alt="" src="/assets/first-shirt.png" width="520" height="480" />

				<footer>
					<strong>Camiseta X</strong>
					<span>R$ 79,90</span>
				</footer>
			</S.Product>
			<S.Product className="keen-slider__slide">
				<Image alt="" src="/assets/first-shirt.png" width="520" height="480" />

				<footer>
					<strong>Camiseta 3</strong>
					<span>R$ 79,90</span>
				</footer>
			</S.Product>

			<S.Product className="keen-slider__slide">
				<Image alt="" src="/assets/first-shirt.png" width="520" height="480" />

				<footer>
					<strong>Camiseta 4</strong>
					<span>R$ 79,90</span>
				</footer>
			</S.Product>
		</S.Container>
	);
}
