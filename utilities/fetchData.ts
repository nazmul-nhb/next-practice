import { IProductResponse, IProductsResponse } from "@/types/interfaces";
import axios from "axios";

export const productUrl =
	"https://rtk-product-management-server.vercel.app/products";

// export const getProducts = async (): Promise<IProductsResponse> => {
// 	const response = await fetch(productUrl);
// 	const data: IProductsResponse = await response.json();
// 	return data;
// };

// export const getProductById = async (id: string): Promise<IProductResponse> => {
// 	const response = await fetch(`${productUrl}/${id}`);
// 	const data: IProductResponse = await response.json();
// 	return data;
// };

// Using Axios
export const getProducts = async (): Promise<IProductsResponse> => {
	const { data } = await axios.get<IProductsResponse>(productUrl);
	return data;
};

export const getProductById = async (id: string): Promise<IProductResponse> => {
	const { data } = await axios.get<IProductResponse>(`${productUrl}/${id}`);
	return data;
};
