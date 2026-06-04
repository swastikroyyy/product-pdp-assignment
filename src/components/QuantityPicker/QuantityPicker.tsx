import styles from "./QuantityPicker.module.scss";

interface Props {
  quantity: number;
  setQuantity: (
    quantity: number
  ) => void;

  maxQuantity: number;
}

const QuantityPicker = ({
  quantity,
  setQuantity,
  maxQuantity,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <button
      aria-label="Increase quantity"
        onClick={() =>
          setQuantity(
            Math.max(
              quantity - 1,
              1
            )
          )
        }
      >
        -
      </button>

      <span>{quantity}</span>

      <button
      aria-label="Decrease quantity"
        onClick={() =>
          setQuantity(
            Math.min(
              quantity + 1,
              maxQuantity
            )
          )
        }
      >
        +
      </button>
    </div>
  );
};

export default QuantityPicker;