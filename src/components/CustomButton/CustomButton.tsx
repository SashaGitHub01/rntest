import { theme } from "@src/styles/theme";
import React, { PropsWithChildren } from "react";
import { StyleSheet, Pressable, PressableProps } from "react-native";
import Typography from "../Typography/Typography";

interface CustomButtonProps extends PressableProps {}

const CustomButton: React.FC<PropsWithChildren<CustomButtonProps>> = ({
  style = {},
  children,
  ...props
}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.button,
        { opacity: pressed ? 0.7 : 1 },
        { ...passedStyles },
      ]}
    >
      <Typography style={styles.text}>{children}</Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 3,
    backgroundColor: theme.colors.blue,
    paddingHorizontal: 10,
    paddingVertical: 7,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: theme.colors.white,
  },
});

export default CustomButton;
