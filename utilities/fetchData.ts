import { IProductResponse, IProductsResponse } from "@/types/interfaces";
import axios, { AxiosError } from "axios";

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
export const getProducts = async (): Promise<
	IProductsResponse | AxiosError
> => {
	try {
		const { data } = await axios.get<IProductsResponse>(productUrl);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			// console.error(error.message);
			return error;
		} else {
			console.error("Unexpected Error:", error);
			return error as AxiosError;
		}
	}
};

export const getProductById = async (
	id: string
): Promise<IProductResponse | AxiosError> => {
	try {
		const { data } = await axios.get<IProductResponse>(
			`${productUrl}/${id}`
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			// console.error(error.message);
			return error;
		} else {
			console.error("Unexpected Error:", error);
			return error as AxiosError;
		}
	}
};
