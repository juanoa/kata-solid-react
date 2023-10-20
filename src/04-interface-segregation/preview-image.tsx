import React from "react";
import {ProductVideo} from "./Product.ts";

interface Props {
  productVideo: ProductVideo
}

export const PreviewImage: React.FC<Props> = ({productVideo}) => {
  return <img src={productVideo.previewImageUrl} alt="Preview image" />
}