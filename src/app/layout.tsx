import { Container, Header } from "@/styles/layout";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../../public/globals.css";
import Image from "next/image";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "Ignite Shop",
	description: "Compre as melhores camisas da rocketseat no Brasil!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<Container>
					<Header>
						<Image alt="" src="/assets/logo.svg" width={56} height={56} />
						<h1>Ignite shop</h1>
					</Header>
					{children}
				</Container>
			</body>
		</html>
	);
}
