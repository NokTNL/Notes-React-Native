import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GoalItemType } from "../models/goalItem";

type PropType = {
  item: GoalItemType;
  handleDelete: (deleteId: string) => void;
};

export function GoalItem({ item, handleDelete }: PropType) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#3e153a" }}
        onPress={() => {
          handleDelete(item.id);
        }}
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
