import { View, StyleSheet, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import React, { useLayoutEffect, useState } from "react";
import HeaderBox from "../components/HeaderBox";
import Card from "../components/Card";
import { getDateMinusDays } from "../util/data";

const RecentScreen = () => {
  const [data, setData] = useState([]);
  const expenses = useSelector((state) => state.expenseSlice.expenses);

  let noExpenses = <Text style={style.msg}>No Expense in last 7 days 🧐</Text>;

  useLayoutEffect(() => {
    const getData = () => {
      const today = new Date();
      const date7DaysAgo = getDateMinusDays(today, 7);
      const recent = expenses.filter((e) => new Date(e.date) > date7DaysAgo);
      setData(recent);
    };
    getData();
  }, [expenses]);

  return (
    <View style={style.container}>
      <HeaderBox leftText={"Last 7 Days"} rightText={data} />
      {expenses.length > 0 ? (
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
      ) : (
        noExpenses
      )}
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
  msg: {
    color: "white",
    fontSize: 18,
    padding: 7,
    margin: 5,
    fontWeight: "600",
  },
});
