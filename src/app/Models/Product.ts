export class Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  category: string;
  gender: string;
  color: string[];
  size: number[];
  price: number;
  discountPrice?: number;
  is_in_inventory: boolean;
  items_left: number;
  imageURL: string;
  slug: string;
}
