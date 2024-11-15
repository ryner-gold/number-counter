import { fireEvent, render, screen } from "@testing-library/react";
import Home from "@/app/page";
import React from "react";

describe("number counter should have correct functionality and types", () => {
  beforeAll(() => {
    vi.mock("next/font/google", () => ({
      Doto: () => ({
        className: "mocked-font",
      }),
    }));
  });

  beforeEach(() => {
    render(<Home />);
  });

  test("when increase count button is pressed, count increases by 1", () => {
    const count = screen.getByTestId("count");
    expect(count.textContent).toBe("0");
    const increaseCountBtn = screen.getByTestId("add-btn");
    fireEvent.click(increaseCountBtn);
    expect(count.textContent).toBe("1");
  });

  test("when decrease count button is pressed, count decreases by 1", () => {
    const count = screen.getByTestId("count");
    expect(count.textContent).toBe("0");
    const decreaseCountBtn = screen.getByTestId("minus-btn");
    fireEvent.click(decreaseCountBtn);
    expect(count.textContent).toBe("-1");
  });

  test("count variable is of type number", () => {
    const { container } = render(<Home />);
    const countElement = container.querySelector("#count-container");
    const countValue = Number(countElement?.textContent);

    expectTypeOf(countValue).toBeNumber();
  });
});
