import { theme } from "@src/styles/theme";
import React, { PropsWithChildren } from "react";
import { StyleSheet, Text as RNText, TextProps } from "react-native";

interface ITextProps extends TextProps {
  variant: keyof typeof theme.fonts 
}

const Text: React.FC<PropsWithChildren<ITextProps>> = ({
  children,
  style = {},
  ...props
}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <RNText
      style={[styles.defaultText, { ...passedStyles }]}
      {...props}
    ></RNText>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    color: theme.colors.primary,
    fontSize: 16,
  },
});

export default Text;
