import { getByRole, render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("test Greeting Component", () => {
  test("render Hello World text", () => {
    // A -> Arrange
    render(<Greeting />);

    // A -> Act
    // Nothing here

    // A -> Assert
    const text = screen.getByText("Hello World!"); // It has optional arg as well which tells us
    expect(text).to; // whether we want an exact match or partial match as well
  }); // with exact object, by default is exact
  // get Method returns an error when we did not find it so taken it in a variable

  test('render "good to see you text"', () => {
    render(<Greeting />);

    const text = screen.getByText("good to see you", { exact: false });

    expect(text).toBeInTheDocument();
  });

  test('render "Text Changed"', () => {
    render(<Greeting />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const button = screen.getByRole("button", {
      // name can be used to differentiate if more than
      name: /click to changed/i, //    1 button
    });
    userEvent.click(button);

    const text = screen.getByText("Text Changed");

    expect(text).toBeInTheDocument();
  });
});
