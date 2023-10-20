import {Product} from "./Product.ts";
import React from "react";

interface Props {
  product: Product
}

export const ProductPrice: React.FC<Props> = ({product}) => {
  return (
    <div className="flex gap-1 items-center text-sm text-blue-800">
      {product.price}
      <span className="text-xs">€</span>
    </div>
  )
}