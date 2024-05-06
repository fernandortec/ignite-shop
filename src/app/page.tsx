"use client";

import Carousel from "@/app/(components)/carousel";
import * as S from "./styles"
import "keen-slider/keen-slider.min.css";

export default function Home() {
	return (
		<S.Container>
			<Carousel />
		</S.Container>
	);
}
