import { View, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderBox from "../components/HeaderBox";
import Card from "../components/Card";

const AllExpensesScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      setData([
        {
          name: "A Book",
          date: "2023-4-15",
          price: "43.99",
          key: "A book",
        },
        {
          name: "Some Bananas",
          date: "2022-4-15",
          price: "32.99",
          key: "Some Bananas",
        },
        {
          name: "iPhone 14",
          date: "2021-2-18",
          price: "1200.99",
          key: "iPhone",
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
              date={item.date}
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
    margin: 10,
    alignItems: "center",
    gap: 20,
  },
  flatList: {
    width: "100%",
  },
});
