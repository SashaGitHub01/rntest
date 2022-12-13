import { ICoin } from "@src/types/coins.types";
import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

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
  return <View></View>;
};

const styles = StyleSheet.create({});

export default CoinItem;
