import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const HeaderBox = ({ leftText, rightText }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    if (rightText && rightText[0]?.price) {
      for (let i of rightText) {
        total += +i.price;
      }
    }
    setTotal(total.toFixed(2));
  }, [rightText]);

  return (
    <View style={style.headerBox}>
      <Text style={style.text}>{leftText}</Text>
      <Text style={style.text}>{total}</Text>
    </View>
  );
};

export default HeaderBox;

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  headerBox: {
    backgroundColor: "#4A4A4A",
    padding: 14,
    width: "95%",
    borderRadius: 7,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    opacity: 0.75,
  },
});
