// "use client"
// import { products } from "@/data/products";
import { IProduct } from "@/types/interfaces";
import { getProductById } from "@/utilities/fetchData";
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
	const { product } = await getProductById(id);
	const { productImage, title, productId, price } = product as IProduct;

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
				alt={title}
				placeholder="empty"
			/>
		</div>
	);
};

export default ProductDetails;
