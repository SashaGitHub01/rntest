import { theme } from "@src/styles/theme";
import React, { PropsWithChildren } from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";

interface CustomInputProps extends TextInputProps {}

const CustomInput: React.FC<PropsWithChildren<CustomInputProps>> = ({
  style,
  ...props
}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return <TextInput {...props} style={[styles.input, { ...passedStyles }]} />;
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 3,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.gray,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
});

export default CustomInput;
