import { View, Text, StyleSheet, Pressable } from "react-native";

const Card = ({ name, date, price, id }) => {
  const pressCardHandler = () => {
    console.log(id);
  };

  return (
    <View style={style.box}>
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
    </View>
  );
};

export default Card;

const style = StyleSheet.create({
  box: {
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
    width: 70,
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
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.2,
  },
});
