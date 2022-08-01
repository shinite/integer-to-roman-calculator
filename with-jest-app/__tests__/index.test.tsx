import { fireEvent, render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import { CONSTANTS, TEST_CONSTANTS } from "@/pages/_constants";

describe("Home", () => {
  it("renders heading", () => {
    render(<Home />);
    const input = screen.getByText(CONSTANTS.HEADING);
    expect(input).toBeInTheDocument();
  });

  it("renders search bar", () => {
    render(<Home />);
    const input = screen.getByPlaceholderText(CONSTANTS.INPUT_PLACEHOLDER);
    expect(input).toBeInTheDocument();
  });

  it("renders convert button", () => {
    render(<Home />);
    const button = screen.getByText(CONSTANTS.CONVERT);
    expect(button).toBeInTheDocument();
  });

  it("check onChange method", async () => {
    const { getByTestId } = render(<Home />);
    fireEvent.change(getByTestId(TEST_CONSTANTS.INPUT_VALUE), {
      target: { value: "123" },
    });
    const input = getByTestId(TEST_CONSTANTS.INPUT_VALUE) as HTMLInputElement;
    expect(input.value).toBe("123");
  });

  test("check onClick method to render roman value", () => {
    const { getByTestId } = render(<Home />);
    fireEvent.change(getByTestId(TEST_CONSTANTS.INPUT_VALUE), {
      target: { value: "24" },
    });
    fireEvent.click(getByTestId(TEST_CONSTANTS.CONVERT_BUTTON));
    expect(
      screen.getByTestId(TEST_CONSTANTS.RESULT_CONTAINER)
    ).toHaveTextContent("XXIV");
  });
});
