import { View, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderBox from "../components/HeaderBox";
import Card from "../components/Card";
import { getFormattedDate } from "../util/data";

const AllExpensesScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      setData([
        {
          name: "A Book",
          date: getFormattedDate(new Date("2023-4-15")),
          price: "43.99",
          key: "A book",
        },
        {
          name: "Some Bananas",
          date: getFormattedDate(new Date("2016-7-8")),
          price: "32.99",
          key: "Some Bananas",
        },

        {
          name: "Pixel 4A",
          date: getFormattedDate(new Date("2015-7-8")),
          price: "400.99",
          key: "Pixel",
        },
      ]);
    };

    getData();
  }, []);

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
