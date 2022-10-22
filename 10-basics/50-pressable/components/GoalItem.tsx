import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GoalItemType } from "../models/goalItem";

type PropType = {
  item: GoalItemType;
  handleDelete: (deleteId: string) => void;
};

// <Pressable> is a React Native wrapper that emits press events when its children are pressed.
// <Pressable> is the new API that replaces the old <Touchable*> components in RN

export function GoalItem({ item, handleDelete }: PropType) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        // Android only: ripple effect
        android_ripple={{ color: "#3e153a" }}
        onPress={() => {
          handleDelete(item.id);
        }}
        // `style` of <Pressable> can also receive a CALLBACK that receives the `pressed` boolean state of the component
        style={({ pressed }) => pressed && styles.pressedGoalItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "purple",
  },
  pressedGoalItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 10,
    color: "white",
  },
});
