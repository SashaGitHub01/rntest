import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { HomeScreenProps, SCREENS } from "..";
import StoriesList from "./StoriesList/StoriesList";

const HomeScreen: React.FC<PropsWithChildren<HomeScreenProps>> = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <StoriesList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},

  header: {},
});

export default HomeScreen;
