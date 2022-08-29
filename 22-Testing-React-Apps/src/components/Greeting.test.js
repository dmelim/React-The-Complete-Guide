import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// describe groups tests by test suite's, first arg is a description, the second arg is the tests
// we can see that the describe description and the test description complete each other, 
// form a unique sentence, this is a good practice to follow
describe("Greeting component", () => {
  // Logic of testing, the 3 a's. Arrange, act and assert.
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);
    // Act
    // ... nothing in this example
    //Assert
    const helloWorldEl = screen.getByText("Hello World");
    expect(helloWorldEl).toBeInTheDocument();
  });
  test("renders good to see if btn not clicked", () => {
    //Arrange
    render(<Greeting />);
    // Act
    // ... nothing in this example
    //Assert
    const outputEl = screen.getByText("good to see", { exact: false });
    expect(outputEl).toBeInTheDocument();
  });
  test("renders Changed! ifthe button was clicked", () => {
    //Arrange
    render(<Greeting />);
    // Act
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);
    //Assert
    const outputEl = screen.getByText("Changed!");
    expect(outputEl).toBeInTheDocument();
  });
  test("does not render good to see if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    // Act
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);
    //Assert
    // getBytext will always fail in this case, because if it doesen't find the ele it fails imediately.
    //So we use query by text, because it returns null. And the test proceeds
    const outputEl = screen.queryByText("good to see", { exact: false });
    expect(outputEl).toBeNull();
  });
});
