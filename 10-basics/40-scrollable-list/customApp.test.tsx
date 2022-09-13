import "@testing-library/jest-native/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react-native";
import CustomApp from "./customApp";

describe("customApp", () => {
  beforeEach(() => {
    render(<CustomApp />);
  });

  test("Show new goal when 'Add Goal' pressed", () => {
    fireEvent.changeText(
      screen.getByPlaceholderText("Your course goal"),
      "Learn React"
    );
    fireEvent.press(screen.getByText(/add goal/i));

    // Note that getByText only finds for <Text> components so the TextInput field will not be queried
    expect(screen.getByText("Learn React")).toBeDefined();
  });

  test("Add another goal when pressing 'Add Goal' again", () => {
    fireEvent.changeText(
      screen.getByPlaceholderText("Your course goal"),
      "Learn React"
    );
    fireEvent.press(screen.getByText(/add goal/i));
    fireEvent.press(screen.getByText(/add goal/i));

    expect(screen.getAllByText("Learn React")).toHaveLength(2);
  });
});
