import GoldCalculator from "../calculator/GoldCalculator";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

let goldInput: HTMLInputElement;
let silverInput: HTMLInputElement;
let copperInput: HTMLInputElement;
let multiplierInput: HTMLInputElement;

describe("Calculations", () => {
  beforeEach(() => {
    render(<GoldCalculator />);
    goldInput = screen.getByTestId("gold-input");
    silverInput = screen.getByTestId("silver-input");
    copperInput = screen.getByTestId("copper-input");
    multiplierInput = screen.getByTestId("multiplier-input");
  });

  afterEach(() => {
    cleanup();
  });

  it("displays the result of the gold calculations", () => {
    const goldOutput = screen.getByTestId("valid-text");
    expect(goldOutput).toBeInTheDocument();
  });

  it("displays error message when input is not valid", async () => {
    const user = userEvent.setup();

    await user.clear(goldInput);
    await user.type(goldInput, "-1");

    const errorMessage = screen.getByTestId("not-valid-text");
    expect(errorMessage).toBeInTheDocument();
  });

  it("calculates the right amount of gold", async () => {
    const user = userEvent.setup();

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
