import { View, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import HeaderBox from "../components/HeaderBox";
import Card from "../components/Card";

const RecentScreen = () => {
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
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
        {
          name: "Pixel 4A",
          date: "2019-4-2",
          price: "400.99",
          key: "Pixel",
        },
      ]);
    };

    getData();
  }, []);

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
              date={item.date}
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
    margin: 10,
    alignItems: "center",
    gap: 20,
  },
  flatList: {
    width: "100%",
  },
});
