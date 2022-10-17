import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GoalType } from "../models/goalType";

type PropType = {
  item: GoalType;
};

export function GoalItem({ item }: PropType) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItem.text}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "purple",

    text: {
      color: "white",
    },
  },
});
