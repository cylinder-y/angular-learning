import { Category } from 'src/app/shared/models/product';

export interface Product {
    name: string;
    description: string;
    price: number;
    category: Category;
}
