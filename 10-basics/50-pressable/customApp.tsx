import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";
import { GoalItemType } from "./models/goalItem";

// GoalItem.tsx for Pressable

export default function CustomApp() {
  const [goals, setGoals] = useState([] as GoalItemType[]);

  const handleAdd = (input: string) => {
    setGoals((prev) =>
      prev.concat({
        text: input,
        id: Math.random().toString(),
      })
    );
  };

  const handleDelete = (deleteId: string) => {
    setGoals((prevGoals) =>
      prevGoals.filter((goalItem) => goalItem.id !== deleteId)
    );
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput handleAdd={handleAdd} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <GoalItem item={item} handleDelete={handleDelete} />
          )}
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
