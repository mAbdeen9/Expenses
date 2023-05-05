import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, View } from "react-native";
//

export const IconButton = ({ color, fontSize, onPress, name }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && style.pressed}
      onPress={onPress}
    >
      <View style={style.container}>
        <Ionicons
          name={name}
          style={{
            marginHorizontal: 10,
            color: color,
            fontSize: fontSize,
            fontWeight: "bold",
          }}
        />
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.6,
  },
});
