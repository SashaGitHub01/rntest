import React, { PropsWithChildren } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@src/data/constants";
import { StoriesApi } from "@src/API/StoriesApi";
import { generateBoxShadowStyle } from "@src/styles/shadow";
import { theme } from "@src/styles/theme";
import { useNavigation } from "@react-navigation/native";
import { HomeStackScreenProps, SCREENS } from "@src/screens";
import StoryCircle from "./StoryCircle/StoryCircle";

interface StoriesListProps {}

const StoriesList: React.FC<PropsWithChildren<StoriesListProps>> = () => {
  const { navigate } =
    useNavigation<HomeStackScreenProps<SCREENS.HomeMain>['navigation']>();
  const { data } = useQuery([QUERY_KEYS.stories], async () => {
    return await StoriesApi.getStories();
  });

  const handleNav = (id: number) => {
    navigate(SCREENS.Stories, {
      storyId: id,
    });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[
        styles.wrapper,
        generateBoxShadowStyle({
          offset: { width: 0, height: 2 },
          elevation: 7,
          shadowOpacity: 0.27,
          shadowRadius: 2.8,
          shadowColorAndroid: "#000",
          shadowColorIos: "#000",
        }),
      ]}
    >
      {!!data &&
        data?.map((item) => {
          return <StoryCircle handleNav={handleNav} key={item.id} {...item} />;
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: theme.space.sm,
    backgroundColor: theme.colors.white,
  },
});

export default StoriesList;
