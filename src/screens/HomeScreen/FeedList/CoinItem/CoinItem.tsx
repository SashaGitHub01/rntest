import Typography from "@src/components/Typography/Typography";
import { numeralHelpers } from "@src/helpers";
import { generateBoxShadowStyle } from "@src/styles/shadow";
import { theme } from "@src/styles/theme";
import { ICoin } from "@src/types/coins.types";
import React, { PropsWithChildren } from "react";
import { Image, StyleSheet, View } from "react-native";
import { SvgUri } from "react-native-svg";
import Antd from "react-native-vector-icons/AntDesign";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  HomeStackScreenProps,
  SCREENS,
} from "@src/screens";

interface CoinItemProps extends ICoin {}

const CoinItem: React.FC<PropsWithChildren<CoinItemProps>> = ({
  uuid,
  name,
  color,
  iconUrl,
  price,
  rank,
  change,
}) => {
  const { navigate } = useNavigation<HomeStackScreenProps<SCREENS.HomeMain>["navigation"]>();
  const isPositive = +change > 0;
  const isSvg = iconUrl?.split(".").includes("svg");

  const handleNav = () => {
    navigate(SCREENS.App, {
      screen: SCREENS.Home,
      params: {
        screen: SCREENS.Coin,
        params: {
          coinId: uuid
        }
      },
    });
  };

  return (
    <RectButton
      rippleColor={`${color}`}
      onPress={handleNav}
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
          <SvgUri
            width="50"
            height="50"
            uri={String(iconUrl)}
            style={styles.icon}
          />
        ) : (
          <Image source={{ uri: iconUrl }} style={styles.icon} />
        )}
      </View>
      <View style={styles.right}>
        <View style={styles.info}>
          <View style={styles.title_row}>
            <View style={[styles.circle, { backgroundColor: color }]} />
            <View style={styles.title_cont}>
              <Typography variant="h2">
                #{rank} {name}
              </Typography>
            </View>
          </View>
          <View>
            <Typography color="secondary" variant="body">
              {numeralHelpers.formatNumber(price)}
            </Typography>
          </View>
        </View>
        <View style={styles.change}>
          <View style={styles.change_row}>
            <Antd
              name={isPositive ? "caretup" : "caretdown"}
              color={isPositive ? "green" : "red"}
            />
            <Typography
              style={{ color: isPositive ? "green" : "red", paddingLeft: 5 }}
            >
              {String(change)}
            </Typography>
          </View>
        </View>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginBottom: theme.space.md,
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    paddingHorizontal: theme.space.sm,
    paddingVertical: theme.space.md,
  },

  left: {
    justifyContent: "center",
    marginRight: theme.space.sm,
  },

  right: {
    flex: 1,
    flexDirection: "row",
  },

  info: {
    flex: 1,
    marginRight: 5,
  },

  change: {
    alignItems: "center",
    justifyContent: "center",
  },

  change_row: {
    flexDirection: "row",
    alignItems: "center",
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
