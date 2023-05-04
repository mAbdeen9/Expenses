import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";

const Card = ({ name, date, price, id }) => {
  const navigation = useNavigation();
  const pressCardHandler = () => {
    navigation.navigate("ManageExpense", { id });
  };

  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [style.btn, style.pressed] : style.btn
      }
      onPress={pressCardHandler}
    >
      <View>
        <Text style={style.text}>{name}</Text>
        <Text style={style.date}>{date}</Text>
      </View>
      <View style={style.price}>
        <Text style={style.priceText}>{price}</Text>
      </View>
    </Pressable>
  );
};

export default Card;

const style = StyleSheet.create({
  text: {
    color: "white",
    marginBottom: 4,
    fontSize: 17,
    fontWeight: "bold",
  },
  date: {
    color: "white",
    opacity: 0.9,
  },
  price: {
    backgroundColor: "white",
    minWidth: 70,
    height: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    overflow: "hidden",
  },
  priceText: {
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.8,
  },
  btn: {
    backgroundColor: "#2A2A2B",
    width: "95%",
    marginBottom: 14,
    marginTop: 14,
    borderRadius: 7,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
