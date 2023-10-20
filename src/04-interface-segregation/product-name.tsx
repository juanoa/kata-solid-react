import {Product} from "./Product.ts";
import React from "react";

interface Props {
  product: Product
}

export const ProductName: React.FC<Props> = ({product}) => {
  return <span className="text-zinc-700 font-bold truncate">{product.name}</span>
}