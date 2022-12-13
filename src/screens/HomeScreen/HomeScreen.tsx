import { theme } from "@src/styles/theme";
import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { HomeScreenProps, SCREENS } from "..";
import FeedList from "./FeedList/FeedList";
import StoriesList from "./StoriesList/StoriesList";

const HomeScreen: React.FC<PropsWithChildren<HomeScreenProps>> = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <StoriesList />
      </View>
      <View style={styles.body}>
        <FeedList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  header: {},

  body: {
    flex: 1,
    padding: theme.space.sm,
  },
});

export default HomeScreen;
