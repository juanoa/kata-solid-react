import {ProductCard} from "./product-card.tsx";
import {Product} from "./Product.ts";
import React from "react";

interface Props {
  products: Array<Product>
}

export const ProductsGrid: React.FC<Props> = ({products}) => {
  return (
    <div className="p-20 grid grid-cols-8 gap-4">
      {products.map((product, i) => <ProductCard product={product} key={i} />)}
    </div>
  )
}