import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomBtn = ({ children, onPress, color }) => {
  //

  return (
    <Pressable
      style={({ pressed }) => pressed && style.pressed}
      onPress={onPress}
    >
      <View style={[style.container, { backgroundColor: color || "white" }]}>
        <Text style={style.text}> {children}</Text>
      </View>
    </Pressable>
  );
};

export default CustomBtn;
const style = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.6,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    opacity: 0.9,
    color: "white",
    textAlign: "center",
  },
});
