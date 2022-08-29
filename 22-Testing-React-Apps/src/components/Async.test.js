import { render, screen } from "@testing-library/react";
import Async from "./async";

describe("Async component", () => {
  test("renders posts if requests succeeds", async () => {
    // this is how we create a mock function, it replaces the original fetch func and we simulate a fake request
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);
    // findallbyrole contrary to get, runs a couple times, so it waits for the async func.
    // We can transform the second arg into a async func
    const listItemEl = await screen.findAllByRole("listitem");
    expect(listItemEl).not.toHaveLength(0);
    // This solution is not good, because it sends to many requests. One alternative is mock func.
  });
});
