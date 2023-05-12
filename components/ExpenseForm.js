import { View } from "react-native";
import Input from "./Input";
import { useState } from "react";

const ExpenseForm = () => {
  const [amount, setAmount] = useState("");

  return (
    <View>
      <Input
        label={"Amount"}
        textInputConfig={{
          onChangeText: (text) => console.log(text),
          keyboardType: "decimal-pad",
        }}
      />

      <Input
        label={"Date"}
        textInputConfig={{
          onChangeText: (text) => console.log(text),
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
        }}
      />

      <Input
        label={"description"}
        textInputConfig={{
          onChangeText: (text) => console.log(text),
          multiline: true,
        }}
      />
    </View>
  );
};

export default ExpenseForm;
