import { StoriesApi } from "@src/API/StoriesApi";
import { QUERY_KEYS } from "@src/data/constants";
import { theme } from "@src/styles/theme";
import { useQuery } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { HomeStackScreenProps, SCREENS } from "..";
import FeedList from "./FeedList/FeedList";
import StoriesList from "./StoriesList/StoriesList";

const HomeScreen: React.FC<
  PropsWithChildren<HomeStackScreenProps<SCREENS.HomeMain>>
> = () => {
  const data = useQuery([QUERY_KEYS.stories_list], async () => {
    return await StoriesApi.getStoriesList()
  })

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
