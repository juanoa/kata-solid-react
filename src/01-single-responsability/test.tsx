import {describe, expect, it, vitest} from "vitest";
import {render, screen} from "@testing-library/react";
import {LoginPage} from "./login-page.tsx";
import {userEvent} from "@testing-library/user-event";

describe("when login", () => {
  describe("and no user nor password", () => {
    it("should log and error", async () => {
      console.error = vitest.fn();
      render(<LoginPage/>)

      const loginButton = screen.getByRole("button");
      await userEvent.click(loginButton)

      expect(console.error).toHaveBeenCalledWith("Enter an email and a password")
    });
  });
  describe("and password too short", () => {
    it("should log and error", async () => {
      console.error = vitest.fn();
      render(<LoginPage/>)

      const emailInput = screen.getByPlaceholderText("Email")
      await userEvent.type(emailInput, "email@domain.com")
      const passwordInput = screen.getByPlaceholderText("Password")
      await userEvent.type(passwordInput, "sh$")
      const loginButton = screen.getByRole("button");
      await userEvent.click(loginButton)

      expect(console.error).toHaveBeenCalledWith(["Password too short"])
    });
  });
  describe("and no special characters", () => {
    it("should log and error", async () => {
      console.error = vitest.fn();
      render(<LoginPage/>)

      const emailInput = screen.getByPlaceholderText("Email")
      await userEvent.type(emailInput, "email@domain.com")
      const passwordInput = screen.getByPlaceholderText("Password")
      await userEvent.type(passwordInput, "passwordLongWithoutSpecial")
      const loginButton = screen.getByRole("button");
      await userEvent.click(loginButton)

      expect(console.error).toHaveBeenCalledWith(["Password should contain a special character"])
    });
  });
  describe("and username and password are OK", () => {
    it("should log and error", async () => {
      console.log = vitest.fn();
      render(<LoginPage/>)

      const emailInput = screen.getByPlaceholderText("Email")
      await userEvent.type(emailInput, "email@domain.com")
      const passwordInput = screen.getByPlaceholderText("Password")
      await userEvent.type(passwordInput, "3sp3c14l-p4ssw0rd")
      const loginButton = screen.getByRole("button");
      await userEvent.click(loginButton)

      expect(console.log).toHaveBeenCalledWith("Session started")
    });
  });
});