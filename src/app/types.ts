export interface ProductType {
  _id: string;
  name: string; // Required property
  title: string;
  image: any;
  price: number;
  oldPrice: number;
  color: string;
  category?: string;
  sizes?: string[]; // Required property
  width?: number;
  quantity?: number;
  selectedSize?:string[];
  height?: number;
}