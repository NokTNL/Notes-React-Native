import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

type PropType = {
  handleAdd: (input: string) => void;
};

export function GoalInput({ handleAdd }: PropType) {
  const [input, setInput] = useState("");

  const handleInput = (newInput: string) => {
    setInput(newInput);
  };

  const handlePress = () => {
    handleAdd(input);
    setInput("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={handleInput}
        placeholder="Your course goal"
        value={input}
      />
      <Button title="Add Goal" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 5,
    width: "60%",
  },
});
