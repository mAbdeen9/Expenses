import { useLayoutEffect, useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import { IconButton } from "../components/UI/IconButton";
import { useDispatch } from "react-redux";
import { expensesActions } from "../store/expenseSlice";
import { getFormattedDate } from "../util/data";
import CustomBtn from "../components/UI/CustomBtn";

const ManageExpense = ({ route, navigation }) => {
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();
  const expensesId = route.params?.id;
  const isEditing = !!expensesId;

  const confirmHandler = () => {
    if (isEditing) {
    }
    if (!isEditing) {
      dispatch(
        expensesActions.addExpense({
          name: inputValue,
          date: getFormattedDate(new Date()),
          price: "22",
          key: Date.now() + Math.random(),
        })
      );
    }

    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const deleteHandler = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [expensesId, navigation]);

  return (
    <View style={style.container}>
      <TextInput
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        style={style.input}
      />
      <View style={style.btnContainer}>
        <CustomBtn onPress={cancelHandler} color={"#F54C3F"}>
          Cancel
        </CustomBtn>
        <CustomBtn onPress={confirmHandler} color={"#3F51B5"}>
          {isEditing ? "Update" : "Add"}
        </CustomBtn>
      </View>
      {isEditing && (
        <View style={style.deleteContainer}>
          <IconButton
            onPress={deleteHandler}
            color={"black"}
            fontSize={35}
            name="trash"
          />
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
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    backgroundColor: "red",
    padding: 16,
    borderRadius: 7,
    backgroundColor: "#CCCCCC",
    margin: 17,
    fontSize: 20,
    fontWeight: "600",
    color: "black",
  },
});
