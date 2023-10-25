import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {OpenClosedPage} from "./open-closed-page.tsx";

describe("when render the page", () => {
  it("should show the header", () => {
    render(<OpenClosedPage/>)

    const logoText = screen.getByText(/logo/i)
    const otherHeaderStuff = screen.getByText(/other header stuff/i)
    const singleResponsibilityLink = screen.getByText(/single responsibility/i)
    const openClosedLink = screen.getByText(/open closed/i)

    expect(logoText).toBeInTheDocument()
    expect(otherHeaderStuff).toBeInTheDocument()
    expect(singleResponsibilityLink).toBeInTheDocument()
    expect(openClosedLink).toBeInTheDocument()
  });

  it("should show both buttons", () => {
    render(<OpenClosedPage/>)

    const firstButton = screen.getByText(/first button/i)
    const secondButton = screen.getByText(/second button/i)

    expect(firstButton).toBeInTheDocument()
    expect(secondButton).toBeInTheDocument()
  });

  it("the second button should have red text", () => {
    render(<OpenClosedPage/>)

    const secondButton = screen.getByText(/second button/i)

    expect(secondButton).toHaveStyle({color:  "rgb(255, 0, 0)"})
  });
});