import styles from "./Header.module.scss";

import { useCart } from "../../context/CartContext";

const Header = () => {
  const { cartItems } = useCart();

  const totalQuantity =
    cartItems.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );

  return (
    <header className={styles.header}>
      <h2>Outdoor Gear</h2>

      <div className={styles.cart}>
        Cart ({totalQuantity})
      </div>
    </header>
  );
};

export default Header;