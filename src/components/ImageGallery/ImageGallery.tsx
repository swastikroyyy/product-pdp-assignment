import { useState } from "react";
import styles from "./ImageGallery.module.scss";

interface Props {
  images: string[];
}

const ImageGallery = ({ images }: Props) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageWrapper}>
        <img
        
          src={images[activeImage]}
          alt="Product"
          className={styles.mainImage}
           width="600"
           height="600"
        />
      </div>

      <div className={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <img
           loading="lazy"
            key={index}
            src={image}
            alt={`Product thumbnail ${index + 1}`}
            className={`${styles.thumbnail} ${
              activeImage === index ? styles.active : ""
            }`}
            onClick={() => setActiveImage(index)}
          />
        ))}
      </div>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              activeImage === index ? styles.activeDot : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;