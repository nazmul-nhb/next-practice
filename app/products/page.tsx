import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
	return (
		<section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{products.map((product) => {
				const { _id, productImage, title } = product;

				return (
					<Link className="hover:scale-105 transition-all duration-500 m-3 border p-1" href={`products/${_id}`} key={_id}>
						<h3>{title}</h3>
						<Image
							width={480}
							height={480}
							src={productImage}
							alt={title}
							placeholder="empty"
						/>
					</Link>
				);
			})}
		</section>
	);
};

export default ProductsPage;
