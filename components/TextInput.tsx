import React from "react";
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";

type Props = TextInputProps;

export function TextInput({ ...rest }: Props) {
  return (
    <RNTextInput
      placeholderTextColor="#ddd"
      style={styles.TextInput}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    height: 50,
    width: 250,
    marginTop: 10,
    paddingHorizontal: 10,
    color: "#550ab1",
    fontWeight: "bold",
    fontSize: 18,
  },
});
