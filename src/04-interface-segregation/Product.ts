import {faker} from "@faker-js/faker";

export type Product = {
  name: string
  price: string
  video: ProductVideo
}

export type ProductVideo = {
  src: string
  previewImageUrl: string;
}

// ⬇️ Only for test propose. Don't use faker in domain 🙃

export const aProduct = (): Product => ({
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  video: {src: "https://src.com/video.mp4", previewImageUrl: "https://picsum.photos/108/192"}
})