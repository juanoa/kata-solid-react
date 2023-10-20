import {aProduct, Product} from "./Product.ts";
import {ProductsGrid} from "./products-grid.tsx";

export const GridPage = () => {

  const products: Array<Product> = Array.from(Array(21).keys()).map(() => aProduct())

  return <ProductsGrid products={products} />
}