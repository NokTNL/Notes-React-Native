import "@testing-library/jest-native/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react-native";
import CustomApp from "./customApp";

const typeAndPressOnce = () => {
  fireEvent.changeText(
    screen.getByPlaceholderText("Your course goal"),
    "Learn React"
  );
  fireEvent.press(screen.getByText(/add goal/i));
};

describe("customApp", () => {
  beforeEach(() => {
    render(<CustomApp />);
  });

  test("Input box displays correct input when typing", () => {
    const textInput = screen.getByPlaceholderText("Your course goal");
    fireEvent.changeText(textInput, "Learn React");
    expect(textInput).toHaveProp("value", "Learn React");
  });

  test("When 'Add Goal' is pressed, displays new goal and reset input", () => {
    const textInput = screen.getByPlaceholderText("Your course goal");

    typeAndPressOnce();

    // Find the new goal item
    expect(screen.getByText("Learn React")).toBeDefined();
    // Make sure the input field is reset
    expect(textInput).toHaveProp("value", "");
  });

  test("Show extra goal when pressing 'Add Goal' again", () => {
    typeAndPressOnce();
    typeAndPressOnce();

    expect(screen.getAllByText("Learn React")).toHaveLength(2);
  });
});
