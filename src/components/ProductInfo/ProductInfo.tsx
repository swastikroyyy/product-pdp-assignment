import { useState } from "react";

import styles from "./ProductInfo.module.scss";

import type { Product } from "../../types/product";

import { productVariants } from "../../data/productVariants";

import QuantityPicker from "../QuantityPicker/QuantityPicker";

import { useCart } from "../../context/CartContext";

import { addToCartApi } from "../../services/cartApi";

interface Props {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;

  setQuantity: (value: number) => void;
  setSelectedColor: (value: string) => void;
  setSelectedSize: (value: string) => void;
}

const ProductInfo = ({
  product,
  selectedColor,
  selectedSize,
  quantity,
  setQuantity,
  setSelectedColor,
  setSelectedSize,
}: Props) => {
  const { addToCart } = useCart();

  const [isAddingToCart, setIsAddingToCart] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const selectedVariant =
    productVariants.sizes.find(
      (item) => item.size === selectedSize
    );

  const stock =
    selectedVariant?.stock || 0;

  const handleAddToCart = async () => {
    try {
      setIsAddingToCart(true);

      await addToCartApi();

      addToCart({
        productId: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        color: selectedColor,
        size: selectedSize,
        quantity,
      });

      setMessage(
        "Item added to cart successfully"
      );
    } catch {
      setMessage(
        "Failed to add item to cart"
      );
    } finally {
      setIsAddingToCart(false);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const salePrice = (
    product.price * 0.8
  ).toFixed(2);

  return (
    <div className={styles.container}>
      <p className={styles.brand}>
        Outdoor Pro
      </p>

      <h1 className={styles.title}>
        {product.title}
      </h1>

      <div className={styles.priceSection}>
        <span
          className={styles.originalPrice}
        >
          ${product.price}
        </span>

        <span className={styles.salePrice}>
          ${salePrice}
        </span>
      </div>

      <div className={styles.section}>
        <h3>Color</h3>

        <div className={styles.colors}>
          {productVariants.colors.map(
            (color) => (
              <button
                key={color}
                aria-label={`Select ${color} color`}
                aria-pressed={
                  selectedColor === color
                }
                className={`${styles.colorBtn}
                ${
                  selectedColor === color
                    ? styles.active
                    : ""
                }`}
                onClick={() =>
                  setSelectedColor(color)
                }
              >
                {color}
              </button>
            )
          )}
        </div>
      </div>

      <div className={styles.section}>
        <h3>Size</h3>

        <div className={styles.sizes}>
          {productVariants.sizes.map(
            (item) => (
              <button
                key={item.size}
                aria-label={`Select size ${item.size}`}
                aria-pressed={
                  selectedSize === item.size
                }
                disabled={
                  item.stock === 0
                }
                className={`${styles.sizeBtn}
                ${
                  selectedSize ===
                  item.size
                    ? styles.active
                    : ""
                }
                ${
                  item.stock === 0
                    ? styles.soldOut
                    : ""
                }`}
                onClick={() =>
                  setSelectedSize(
                    item.size
                  )
                }
              >
                {item.size}

                {item.stock > 0 &&
                  item.stock <= 2 &&
                  ` (Only ${item.stock} left)`}
              </button>
            )
          )}
        </div>
      </div>

      <QuantityPicker
        quantity={quantity}
        setQuantity={setQuantity}
        maxQuantity={stock}
      />

      <button
        className={styles.cartBtn}
        disabled={
          stock === 0 ||
          isAddingToCart
        }
        onClick={handleAddToCart}
      >
        {isAddingToCart
          ? "Adding..."
          : "Add To Cart"}
      </button>

      {message && (
        <p className={styles.message}>
          {message}
        </p>
      )}

      {stock > 0 && (
        <p className={styles.delivery}>
          Delivery by Aug 15-18
        </p>
      )}
    </div>
  );
};

export default ProductInfo;