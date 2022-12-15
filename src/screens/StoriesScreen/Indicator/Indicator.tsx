import { theme } from "@src/styles/theme";
import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

interface IndicatorProps {}

const Indicator: React.FC<PropsWithChildren<IndicatorProps>> = () => {
  return <View>

  </View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    paddingHorizontal: theme.space.sm
  }
});

export default Indicator;
