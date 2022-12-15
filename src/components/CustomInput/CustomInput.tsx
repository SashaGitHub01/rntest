import { theme } from "@src/styles/theme";
import React, { PropsWithChildren } from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";

interface CustomInputProps extends TextInputProps {
  color: "white" | "black";
}

const CustomInput: React.FC<PropsWithChildren<CustomInputProps>> = ({
  style,
  color = "white",
  ...props
}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <TextInput
      {...props}
      style={[styles.input, styles[color], { ...passedStyles }]}
      placeholderTextColor={theme.colors.secondary}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 3,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.gray,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },

  black: {
    backgroundColor: theme.colors.black,
    color: theme.colors.white,
  },

  white: {
    backgroundColor: theme.colors.white,
    color: theme.colors.primary,
  },
});

export default CustomInput;
