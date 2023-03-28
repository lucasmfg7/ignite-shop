import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const { query } = useRouter();

  return <div>ProductItem: {JSON.stringify(query)}</div>;
};

export default ProductItem;
