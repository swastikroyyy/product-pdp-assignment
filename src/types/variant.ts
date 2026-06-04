export interface SizeVariant {
  size: string;
  stock: number;
}

export interface ProductVariant {
  colors: string[];
  sizes: SizeVariant[];
}