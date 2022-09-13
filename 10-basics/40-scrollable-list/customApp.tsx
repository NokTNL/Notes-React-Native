import React, { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type goalType = {
  text: string;
  id: string;
};

export default function CustomApp() {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState([] as goalType[]);

  const handleInput = (newInput: string) => {
    setInput(newInput);
  };

  const handleAdd = () => {
    setGoals((prev) =>
      prev.concat({
        text: input,
        id: Math.random().toString(),
      })
    );
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
        {/* <View> is not scrollable by default, it will just let the content overflow
         * Use <ScrollView>. You need its parents to have a defined height for it to work
         */}
        {/* <ScrollView>
          {goals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalItem.text}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        {/* Alternatively, use the more performant <FlatList> which has lazy loading
         * `data` = the array of data
         * `renderItem({ item, index, separators } => JSX )` = the JSX you want it to render from each array item
         *    - the above syntax means that the callback receives an OBJECT that has a property `item` = the item in
         *      your `data` array
         */}
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalItem.text}>{item.text}</Text>
            </View>
          )}
          // Like mapping ordinary arrays into JSX, each rendered item should have its own key
          // you can specify the key in the `keyExtractor` prop
          // By default, if a keyExtractor is not specified, it will search for `item.key` --> `item.id` --> fall back to `index`
          keyExtractor={(item) => item.id}
        />
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
