import React, { PropsWithChildren } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@src/data/constants";
import { StoriesApi } from "@src/API/StoriesApi";
import { Text } from "react-native-svg";

interface StoriesListProps {}

const StoriesList: React.FC<PropsWithChildren<StoriesListProps>> = () => {
  const { data } = useQuery([QUERY_KEYS.stories], async () => {
    return await StoriesApi.getStories();
  });

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {!!data &&
        data?.map((item) => {
          return (
            <View key={item.id}>
              <Text>{item.username}</Text>
            </View>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default StoriesList;
