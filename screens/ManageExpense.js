import { useLayoutEffect } from "react";
import { View, Text } from "react-native";

const ManageExpense = ({ route, navigation }) => {
  const expensesId = route.params?.id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: expensesId ? "Edit Expense" : "Add Expense",
    });
  }, [expensesId, navigation]);

  return (
    <View>
      <Text>ManageExpense</Text>
    </View>
  );
};

export default ManageExpense;
