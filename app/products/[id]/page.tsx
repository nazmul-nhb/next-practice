// "use client"
// import { products } from "@/data/products";
// import { IProduct } from "@/types/interfaces";
import { getProductById } from "@/utilities/fetchData";
import { AxiosError } from "axios";
import Image from "next/image";

import React from "react";

interface DetailsProps {
	params: {
		id: string;
	};
}
const ProductDetails: React.FC<DetailsProps> = async ({ params }) => {
	// const product = products.find((p) => p._id === params.id);
	const { id } = params;
	const response = await getProductById(id);

	// Check if result is an AxiosError
	if (response instanceof AxiosError) {
		return (
			<section className="text-center">
				<h2 className="text-xl font-semibold">
					Failed to Load Products
				</h2>
				<p className="text-red-500">Error: {response.message}</p>
			</section>
		);
	}

	const { productImage, title, productId, price } = response.product;

	// const imageLoader = ({
	// 	src,
	// 	width,
	// 	quality,
	// }: {
	// 	src: string;
	// 	width: number;
	// 	quality?: number;
	// }):string => {
	// 	return `${src}?w=${width}&q=${quality || 80}`;
	// };

	return (
		<div>
			<h3>{title}</h3>
			<h4>{productId}</h4>
			<h4>{price}</h4>
			<Image
				width={640}
				height={640}
				src={productImage}
				// loader={imageLoader}
				loading="eager"
				alt={title}
				placeholder="empty"
			/>
		</div>
	);
};

export default ProductDetails;
