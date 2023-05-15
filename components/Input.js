import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = ({ label, textInputConfig }) => {
  const inputStyle = [style.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(style.inputMultiline);
  }

  return (
    <View style={style.inputContainer}>
      <Text style={style.label}>{label}</Text>
      <TextInput style={inputStyle} {...textInputConfig}></TextInput>
    </View>
  );
};

export default Input;

const style = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 6,
    minWidth: 150,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    backgroundColor: "silver",
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
