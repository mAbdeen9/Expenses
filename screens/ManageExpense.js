import { useLayoutEffect, useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import { IconButton } from "../components/UI/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { expensesActions } from "../store/expenseSlice";
import { getFormattedDate } from "../util/data";
import CustomBtn from "../components/UI/CustomBtn";
import ExpenseForm from "../components/ExpenseForm";

const ManageExpense = ({ route, navigation }) => {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenseSlice.expenses);
  const expensesId = route.params?.id;
  const isEditing = !!expensesId;

  const expense = {
    name: inputValues.description,
    date: getFormattedDate(new Date(inputValues.date)),
    price: inputValues.amount,
    key: Date.now() + Math.random(),
  };

  const confirmHandler = () => {
    const amountIsValid = !isNaN(expense.price) && expense.price > 0;
    const dateIsValid = expense.date !== "NaN-NaN-NaN";
    const descriptionIsValid = expense.name.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("Invalid input", "Please check your input values");
      return;
    }

    if (isEditing) {
      const data = {
        updatedExpense: expense,
        key: expensesId,
      };
      dispatch(expensesActions.updateExpense(data));
    }
    if (!isEditing) {
      dispatch(expensesActions.addExpense(expense));
    }

    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const deleteHandler = () => {
    dispatch(expensesActions.deleteExpense(expensesId));
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });

    if (expensesId) {
      const formData = expenses.find((e) => e.key === expensesId);
      setInputValues({
        amount: formData.price,
        date: formData.date,
        description: formData.name,
      });
    }
  }, [expensesId, navigation]);

  return (
    <View style={style.container}>
      <ExpenseForm id={expensesId} data={(data) => setInputValues(data)} />
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
