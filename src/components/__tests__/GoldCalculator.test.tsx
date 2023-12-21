import GoldCalculator from "../calculator/GoldCalculator";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Calculations", () => {
  beforeEach(() => {
    render(<GoldCalculator />);
  });

  afterEach(() => {
    cleanup();
  });

  it("displays the result of the gold calculations", () => {
    const goldOutput = screen.getByTestId("valid-text");
    expect(goldOutput).toBeInTheDocument();
  });

  it("displays error message when input is not valid", () => {
    const goldInput: HTMLInputElement = screen.getByTestId("gold-input");
    var valueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    )?.set;
    valueSetter?.call(goldInput, "-1");

    var ev2 = new Event("input", { bubbles: true });
    goldInput.dispatchEvent(ev2);

    const errorMessage = screen.getByTestId("not-valid-text");
    expect(errorMessage).toBeInTheDocument();
  });

  it("calculates the right amount of gold", async () => {
    const user = userEvent.setup();
    const goldInput: HTMLInputElement = screen.getByTestId("gold-input");
    const silverInput: HTMLInputElement = screen.getByTestId("silver-input");
    const copperInput: HTMLInputElement = screen.getByTestId("copper-input");
    const multiplierInput: HTMLInputElement =
      screen.getByTestId("multiplier-input");

    await user.type(goldInput, "2");
    await user.type(silverInput, "257");
    await user.type(copperInput, "465");
    await user.clear(multiplierInput);
    await user.type(multiplierInput, "3");

    const result = screen.getByTestId("valid-text");
    expect(result.textContent).toBe("13g 84s 95c");
  });

  it("resets all input values after clicking the reset-button", async () => {
    const user = userEvent.setup();
    const goldInput: HTMLInputElement = screen.getByTestId("gold-input");
    const silverInput: HTMLInputElement = screen.getByTestId("silver-input");
    const copperInput: HTMLInputElement = screen.getByTestId("copper-input");
    const multiplierInput: HTMLInputElement =
      screen.getByTestId("multiplier-input");
    const resetButton: HTMLButtonElement = screen.getByTestId("wow-btn");

    await user.type(goldInput, "25");
    await user.type(silverInput, "25");
    await user.type(copperInput, "25");
    await user.type(multiplierInput, "25");
    await user.click(resetButton);

    const result = screen.getByTestId("valid-text");
    expect(result.textContent).toBe("0g 0s 0c");
  });
});
