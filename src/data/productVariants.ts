import type { ProductVariant } from "../types/variant";


export const productVariants: ProductVariant = {
  colors: ["Black", "Blue", "Red"],

  sizes: [
    {
      size: "S",
      stock: 10,
    },
    {
      size: "M",
      stock: 2,
    },
    {
      size: "L",
      stock: 0,
    },
    {
      size: "XL",
      stock: 7,
    },
  ],
};