import React, { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { SetState } from "../models/react";

type PropType = {
  handleAdd: (input: string) => void;
  isModalOpen: boolean;
  setModalOpen: SetState<boolean>;
};

export function GoalInput({ handleAdd, isModalOpen, setModalOpen }: PropType) {
  const [input, setInput] = useState("");

  const handleInput = (newInput: string) => {
    setInput(newInput);
  };

  const handlePress = () => {
    handleAdd(input);
    setInput("");
    setModalOpen(false);
  };

  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.inputContainer}>
        {/* Need CommonJS import expression to import image object */}
        <Image source={require("../../assets/goal.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="white"
          onChangeText={handleInput}
          placeholder="Your course goal"
          value={input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handlePress} color="#9b80be" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => {
                setModalOpen(false);
              }}
              color="#f312a2"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#311b6b",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    color: "white",
    padding: 10,
    width: "80%",
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  buttonContainer: {
    padding: 10,
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 20,
  },
});
