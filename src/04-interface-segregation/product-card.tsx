import {Product} from "./Product.ts";
import React from "react";
import {PreviewImage} from "./preview-image.tsx";
import {ProductName} from "./product-name.tsx";
import {ProductPrice} from "./product-price.tsx";

interface Props {
  product: Product
}

export const ProductCard: React.FC<Props> = ({product}) => {
  return (
    <div className="flex flex-col gap-2">
      <PreviewImage productVideo={product.video} />
      <ProductName product={product} />
      <ProductPrice product={product} />
    </div>
  )
}