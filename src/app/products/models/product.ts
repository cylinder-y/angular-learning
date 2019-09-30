export enum Category {
    Laptops = 'Laptop',
    Tablets = 'Tablet',
    SmartPhones = 'Smarphone'
}

export interface Product {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvaliable: boolean;
}
