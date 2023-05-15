import { View, Text, StyleSheet, ScrollView } from "react-native";
import Input from "./Input";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ExpenseForm = ({ data, id }) => {
  const expenses = useSelector((state) => state.expenseSlice.expenses);
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      const formData = expenses.find((e) => e.key === id);
      setInputValues({
        amount: formData.price,
        date: formData.date,
        description: formData.name,
      });
    }
  }, []);

  const inputChangeHandler = (identifier, enteredValue) => {
    setInputValues((currentState) => {
      return {
        ...currentState,
        [identifier]: enteredValue,
      };
    });
  };

  const sendData = () => {
    data(inputValues);
  };

  useEffect(() => {
    sendData();
  }, [inputValues]);

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Your Expense 💰 </Text>
      <ScrollView>
        <View style={styles.box}>
          <Input
            label={"Amount"}
            textInputConfig={{
              onChangeText: (text) => inputChangeHandler("amount", text),
              keyboardType: "decimal-pad",
              value: inputValues.amount,
            }}
          />

          <Input
            label={"Date"}
            textInputConfig={{
              onChangeText: (text) => inputChangeHandler("date", text),
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              value: inputValues.date,
            }}
          />
        </View>

        <Input
          label={"description"}
          textInputConfig={{
            onChangeText: (text) => inputChangeHandler("description", text),
            multiline: true,
            value: inputValues.description,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    gap: 15,
    marginTop: 20,
    padding: 16,
  },
  headingText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    opacity: 0.9,
  },
  box: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
});
