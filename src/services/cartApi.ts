export const addToCartApi =
  async () => {
    await new Promise(
      (resolve) =>
        setTimeout(resolve, 1000)
    );

    if (Math.random() < 0.2) {
      throw new Error(
        "Failed to add item"
      );
    }

    return true;
  };