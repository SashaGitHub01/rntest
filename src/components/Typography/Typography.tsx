import { theme } from "@src/styles/theme";
import React, { PropsWithChildren } from "react";
import { StyleSheet, Text as RNText, TextProps } from "react-native";

interface ITypographyProps extends TextProps {
  variant?: keyof typeof theme.fonts;
  color?: ''
}

const Typography: React.FC<PropsWithChildren<ITypographyProps>> = ({
  children,
  style = {},
  variant = 'body',
  ...props
}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <RNText
      style={[styles.defaultText, styles[variant], { ...passedStyles }]}
      {...props}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    color: theme.colors.primary,
    fontSize: 16,
  },
  h1: { fontSize: theme.fonts.h1, lineHeight: 34 },
  h2: { fontSize: theme.fonts.h2, lineHeight: 28 },
  h3: { fontSize: theme.fonts.h3, lineHeight: 24 },
  subtitle: { fontSize: theme.fonts.subtitle, lineHeight: 22 },
  body: { fontSize: theme.fonts.body, lineHeight: 21 },
  small: { fontSize: theme.fonts.small, lineHeight: 18 },
});

export default Typography;
