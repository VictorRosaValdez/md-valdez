import { Product } from "./product.model";
export interface ShoppingCart{
    shoppingCartId: number;
    date: string;
    totalPrice: number;
    products: Product[];
}