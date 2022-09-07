import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function CustomApp() {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState([] as string[]);

  const handleInput = (newInput: string) => {
    setInput(newInput);
  };

  const handleAdd = () => {
    setGoals((prev) => prev.concat(input));
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          // `onChangeText` is the standard prop you use for receiving values from TextInput
          // the callback receives only the input STRING as the argument
          onChangeText={handleInput}
          placeholder="Your course goal"
        />
        <Button
          title="Add Goal"
          // use `onPress` for <Button>
          onPress={handleAdd}
        />
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <Text style={styles.goalItem.text}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
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
  goalsContainer: {
    flex: 4,
    paddingVertical: 15,
  },
  goalItem: {
    marginVertical: 10,
    padding: 10,
    // borderRadius for <Text> is not supported in iOS, but supported for <View>
    borderRadius: 5,
    backgroundColor: "purple",

    // 'child' style objects are allowed
    text: {
      // Native has no text 'color' inheritance like CSS so you need to specify text color in <Text>
      color: "white",
    },
  },
});
