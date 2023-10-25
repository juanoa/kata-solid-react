import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {LiskovSubstitutionPage} from "./liskov-substitution-page.tsx";
import {userEvent} from "@testing-library/user-event";
import {faker} from "@faker-js/faker";

describe("When render the Liskov substitution page", () => {
  it("should render the input", () => {
    render(<LiskovSubstitutionPage />)

    const input = screen.getByRole("textbox")

    expect(input).toBeInTheDocument()
  });

  describe("and the user type in the input", () => {
    it("should update the input text", async () => {
      const text = faker.lorem.word()
      render(<LiskovSubstitutionPage/>)

      const input = screen.getByRole("textbox")
      await userEvent.type(input, text)

      screen.debug()

      expect(screen.getByDisplayValue(text)).toBeInTheDocument()
    });
  });
});