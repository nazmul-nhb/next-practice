import { IProductResponse, IProductsResponse } from "@/types/interfaces";

export const productUrl =
	"https://rtk-product-management-server.vercel.app/products";

export const getProducts = async (): Promise<IProductsResponse> => {
	const response = await fetch(productUrl);
	const data: IProductsResponse = await response.json();
	return data;
};

export const getProductById = async (id: string): Promise<IProductResponse> => {
	const response = await fetch(`${productUrl}/${id}`);
	const data: IProductResponse = await response.json();
	return data;
};
