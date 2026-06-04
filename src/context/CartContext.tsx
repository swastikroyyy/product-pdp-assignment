import {
  createContext,
  useContext,
} from "react";

import type { ReactNode } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import type { CartItem } from "../types/cart";



interface CartContextType {
  cartItems: CartItem[];

  addToCart: (
    item: CartItem
  ) => void;
}

const CartContext = createContext<
  CartContextType | undefined
>(undefined);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] =
    useLocalStorage<CartItem[]>(
      "cart",
      []
    );

 const addToCart = (item: CartItem) => {
  const existingItem = cartItems.find(
    (cartItem) =>
      cartItem.productId === item.productId &&
      cartItem.color === item.color &&
      cartItem.size === item.size
  );

  if (existingItem) {
    const updatedCart = cartItems.map(
      (cartItem) =>
        cartItem.productId === item.productId &&
        cartItem.color === item.color &&
        cartItem.size === item.size
          ? {
              ...cartItem,
              quantity:
                cartItem.quantity +
                item.quantity,
            }
          : cartItem
    );

    setCartItems(updatedCart);

    return;
  }

  setCartItems([
    ...cartItems,
    item,
  ]);
};

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within CartProvider"
    );
  }

  return context;
}