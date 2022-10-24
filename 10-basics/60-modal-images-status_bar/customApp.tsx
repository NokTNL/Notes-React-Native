import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";
import { GoalItemType } from "./models/goalItem";
import { StatusBar } from "expo-status-bar";

// Modal, Images: GoalInput.tsx
// Status Bar: here

export default function CustomApp() {
  const [goals, setGoals] = useState([] as GoalItemType[]);
  const [isModalOpen, setModalOpen] = useState(false);

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
    <>
      {/* Expo Status Bar is an API that tells how the mobile's status bar shoule be displayed. E.g. setting style = "light" will change it to a lighter colour, contrasting from our darker app background */}
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#ab5cca"
          onPress={() => {
            setModalOpen(true);
          }}
        />

        <GoalInput
          handleAdd={handleAdd}
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: "#311b6b",
  },
  goalsContainer: {
    flex: 4,
    paddingVertical: 15,
  },
});
