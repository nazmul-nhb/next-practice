export interface IProduct {
	_id: string;
	title: string;
	productImage: string;
	price: number;
	productId: string;
	createdAt: string;
}

export interface IProductsResponse {
	success: boolean;
	totalProducts: number;
	products: IProduct[];
}

export interface IProductResponse {
	success: boolean;
	product: IProduct;
}
