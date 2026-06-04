import { useEffect, useMemo, useState } from "react";
import {
  useParams,
  useSearchParams,
} from "react-router-dom";
import type { Product } from "../types/product";
import { getProduct } from "../services/productApi";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import ProductTabs from "../components/ProductTabs/ProductTabs";
import Header from "../components/Header/Header";



const ProductPage = () => {
  const { id } = useParams();

  const [searchParams, setSearchParams] =
    useSearchParams();

  const [product, setProduct] =
    useState<Product | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [selectedColor, setSelectedColor] =
    useState(
      searchParams.get("color") || "Black"
    );

  const [selectedSize, setSelectedSize] =
    useState(
      searchParams.get("size") || "S"
    );

  const [quantity, setQuantity] =
    useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id || "1");
        setProduct(data);
      } catch {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    setSearchParams({
      color: selectedColor,
      size: selectedSize,
    });
  }, [
    selectedColor,
    selectedSize,
    setSearchParams,
  ]);


const galleryImages = useMemo(() => {
  if (!product) return [];

  return [
    product.image,
    product.image,
    product.image,
    product.image,
  ];
}, [product]);





  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!product) {
    return <h2>No Product Found</h2>;
  }


  return (
    <>
      <Header />
    <div className="productLayout">
      <div>
        <ImageGallery images={galleryImages} />
      </div>

      <div>
        <ProductInfo
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          quantity={quantity}
          setQuantity={setQuantity}
          setSelectedColor={setSelectedColor}
          setSelectedSize={setSelectedSize}
        />
      </div>
    </div>
    <ProductTabs
      description={
        product.description
      }
    />
    </>
  );
};

export default ProductPage;