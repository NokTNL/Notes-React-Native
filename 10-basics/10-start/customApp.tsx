import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function CustomApp() {
  return (
    // <View> is the equivalent of <div>. Used for boxes, containers, etc.
    <View style={styles.container}>
      {/* RN does not have the concept of 'text node'. All texts must be rendered using <Text>. */}
      <View>
        <Text style={styles.dummyText}>
          Hello World in a {"<View>"} component!
        </Text>
      </View>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title="Tap me!" />
      <StatusBar style="auto" />
    </View>
  );
}

// Native environment has no CSS, instead you pass in a style object that LOOKS LIKE React DOM's inline CSS object
// `styles` can simply be a plain object, but using StyleSheet.create helps RN grab this and also provides autocompletion
const styles = StyleSheet.create({
  // There are different classes of styles in RN
  // - Layout props: any flex-related props, margin, padding, borderWidth, height, width, zIndex ...
  // - View style props: backgroundColor, borderRadius, ...
  // - Text style props: color, fontFamily, fontWeight, ...
  container: {
    // ALL componenets in RN are flexboxes with flex direction: column by default. You can use flex properties straight away.
    // https://reactnative.dev/docs/flexbox
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    // The `margin` property accepts string | number and will be converted to PIXELS internally
    margin: 16,
    borderWidth: 2,
    borderColor: "red",
    padding: 16,
  },
});
