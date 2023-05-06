import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import React, { useLayoutEffect, useState } from "react";
import HeaderBox from "../components/HeaderBox";
import Card from "../components/Card";

const RecentScreen = () => {
  const [data, setData] = useState([]);
  const expenses = useSelector((state) => state.expenseSlice.expenses);

  useLayoutEffect(() => {
    const getData = () => {
      setData(expenses);
    };
    getData();
  }, [expenses]);

  return (
    <View style={style.container}>
      <HeaderBox leftText={"Last 7 Days"} rightText={data} />
      <FlatList
        style={style.flatList}
        data={data}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Card
              id={item.key}
              name={item.name}
              date={item.date.toString()}
              price={item.price}
            />
          </View>
        )}
      />
    </View>
  );
};

export default RecentScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
    gap: 20,
  },
  flatList: {
    width: "100%",
  },
});
