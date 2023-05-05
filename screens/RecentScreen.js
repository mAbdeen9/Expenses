import { View, StyleSheet, FlatList } from "react-native";
import { getFormattedDate } from "../util/data";
import React, { useLayoutEffect, useState } from "react";
import HeaderBox from "../components/HeaderBox";
import Card from "../components/Card";

const RecentScreen = () => {
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
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
        {
          name: "Keyboard",
          date: getFormattedDate(new Date("2012-7-8")),
          price: "400.99",
          key: "Keybo51ard",
        },
        {
          name: "A Book",
          date: getFormattedDate(new Date("2023-4-15")),
          price: "43.99",
          key: "A boo4k",
        },
        {
          name: "Some Bananas",
          date: getFormattedDate(new Date("2016-7-8")),
          price: "32.99",
          key: "Some Ban3anas",
        },
        {
          name: "Pixel 4A",
          date: getFormattedDate(new Date("2015-7-8")),
          price: "400.99",
          key: "Pixel 23",
        },
        {
          name: "Keyboard",
          date: getFormattedDate(new Date("2012-7-8")),
          price: "400.99",
          key: "Keyboard1",
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
