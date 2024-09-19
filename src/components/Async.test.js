import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if results succeed", async () => {
    const fetch = jest.spyOn(window.fetch, "json");
    fetch.mockImplementation(() => {
      Promise.resolve([{ id: "a1", title: "aOne" }]);
    });

    render(<Async />);

    const items = await screen.findAllByRole("listitem");
    expect(items).toBeInTheDocument();

    // listitem basically the items loaded by li
    expect(items).not.toHaveLength(0);
  });
});
