import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { IconButton } from "../components/UI/IconButton";

const ManageExpense = ({ route, navigation }) => {
  const expensesId = route.params?.id;
  const isEditing = !!expensesId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [expensesId, navigation]);

  return (
    <View style={style.container}>
      {isEditing && (
        <View style={style.deleteContainer}>
          <IconButton color={"black"} fontSize={35} name="trash" />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  deleteContainer: {
    borderTopWidth: 2,
    textAlign: "center",
    paddingVertical: 14,
    marginTop: 10,
  },
});
