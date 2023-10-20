import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {aProduct} from "./Product.ts";
import {ProductsGrid} from "./products-grid.tsx";

describe("when display a grid with products", () => {
  it("should show the product name", () => {
    const product = aProduct()
    render(<ProductsGrid products={[product]} />)

    const productName = screen.getByText(product.name)

    expect(productName).toBeInTheDocument()
  });

  it("should show the product price", () => {
    const product = aProduct()
    render(<ProductsGrid products={[product]} />)

    const productPrice = screen.getByText(product.price)

    expect(productPrice).toBeInTheDocument()
  });
});