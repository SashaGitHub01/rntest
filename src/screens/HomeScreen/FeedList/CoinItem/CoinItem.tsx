import Typography from "@src/components/Typography/Typography";
import { generateBoxShadowStyle } from "@src/styles/shadow";
import { theme } from "@src/styles/theme";
import { ICoin } from "@src/types/coins.types";
import React, { PropsWithChildren } from "react";
import { Image, StyleSheet, View } from "react-native";
import { SvgUri } from "react-native-svg";

interface CoinItemProps extends ICoin {}

const CoinItem: React.FC<PropsWithChildren<CoinItemProps>> = ({
  uuid,
  symbol,
  name,
  color,
  iconUrl,
  price,
  rank,
}) => {
  const isSvg = iconUrl?.split(".").includes("svg");

  return (
    <View
      style={[
        styles.wrapper,
        generateBoxShadowStyle({
          offset: { width: 0, height: 2 },
          elevation: 6,
          shadowOpacity: 0.2,
          shadowRadius: 2.8,
          shadowColorAndroid: "#000",
          shadowColorIos: "#000",
        }),
      ]}
    >
      <View style={styles.left}>
        {isSvg ? (
          <SvgUri width="50" height="50" uri={iconUrl} style={styles.icon} />
        ) : (
          <Image source={{ uri: iconUrl }} style={styles.icon} />
        )}
      </View>
      <View style={styles.right}>
        <View style={styles.title_row}>
          <View style={[styles.circle, { backgroundColor: color }]} />
          <View style={styles.title_cont}>
            <Typography variant="h2">
              #{rank} {name}
            </Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginBottom: theme.space.md,
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    padding: theme.space.sm,
  },

  left: {
    justifyContent: "center",
    marginRight: theme.space.sm,
  },

  right: {
    flex: 1,
  },

  icon: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: "#00000039",
    borderStyle: "solid",
    borderWidth: 1,
    marginRight: 5,
  },

  title_row: {
    flexDirection: "row",
    alignItems: "center",
  },

  title_cont: {},

  title: {},
});

export default CoinItem;
