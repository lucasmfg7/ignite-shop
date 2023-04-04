import React from "react";
import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import Image from "next/image";

const ProductItem = () => {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>
        {/* <Image
          src=""
          alt=""
          /> */}
      </ImageContainer>
      <ProductDetails>
        <h1>Camisa X</h1>
        <span>R$ 99,99</span>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat sed
          corrupti ab natus autem eum asperiores vel minima totam blanditiis
          modi laborum dolores voluptates, nulla quisquam quam culpa. Quia,
          nostrum.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
};

export default ProductItem;
