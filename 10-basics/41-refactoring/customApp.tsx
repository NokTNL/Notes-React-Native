import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./GoalInput";
import { GoalType } from "./types/goalType";

export default function CustomApp() {
  const [goals, setGoals] = useState([] as GoalType[]);

  const handleAdd = (input: string) => {
    setGoals((prev) =>
      prev.concat({
        text: input,
        id: Math.random().toString(),
      })
    );
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput handleAdd={handleAdd} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => <GoalItem item={item} />}
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
  goalsContainer: {
    flex: 4,
    paddingVertical: 15,
  },
});
