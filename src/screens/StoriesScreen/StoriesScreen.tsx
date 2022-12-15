/* eslint-disable react/style-prop-object */
import { StoriesApi } from "@src/API/StoriesApi";
import Typography from "@src/components/Typography/Typography";
import { QUERY_KEYS, WINDOW } from "@src/data/constants";
import { theme } from "@src/styles/theme";
import { useQuery } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Platform,
} from "react-native";
import { SCREENS, RootStackScreenProps } from "..";
import Story from "./Story/Story";

const StoriesScreen: React.FC<
  PropsWithChildren<RootStackScreenProps<SCREENS.Stories>>
> = ({ route }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { storyId } = route.params;

  const { data } = useQuery([QUERY_KEYS.stories_list], async () => {
    return await StoriesApi.getStoriesList();
  });
  const value = useRef(new Animated.Value(0)).current;
  const translateX = value.interpolate({
    inputRange: [0, (data?.length || 0) - 1],
    outputRange: [0, WINDOW.width * (data?.length || 0)],
  });

  useEffect(() => {
    if (data) {
      setActiveIndex(data.findIndex((st) => st.id === storyId) || 0);
    }
  }, [data]);

  useEffect(() => {
    Animated.timing(value, {
      toValue: activeIndex,
      useNativeDriver: true,
      duration: 500,
    }).start();
  }, [activeIndex]);

  const handleForward = () => {
    if (data) {
      setActiveIndex((prev) => {
        if (prev === data.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }
  };

  const handleBack = () => {
    if (data) {
      setActiveIndex((prev) => {
        if (prev === 0) {
          return data.length - 1;
        } else {
          return prev - 1;
        }
      });
    }
  };
  console.log(translateX);
  return (
    <>
      <View style={styles.wrapper}>
     
      </View>
      <StatusBar style="dark" />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
});

export default StoriesScreen;
