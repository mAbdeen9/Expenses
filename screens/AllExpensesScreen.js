import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import HeaderBox from "../components/HeaderBox";
import Card from "../components/Card";

const AllExpensesScreen = () => {
  const [data, setData] = useState([]);
  const expenses = useSelector((state) => state.expenseSlice.expenses);

  useEffect(() => {
    const getData = () => {
      setData(expenses);
    };

    getData();
  }, [expenses]);

  return (
    <View style={style.container}>
      <HeaderBox leftText={"Total"} rightText={data} />
      <FlatList
        style={style.flatList}
        data={data}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Card
              name={item.name}
              date={item.date.toString()}
              price={item.price}
              id={item.key}
            />
          </View>
        )}
      />
    </View>
  );
};

export default AllExpensesScreen;

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
