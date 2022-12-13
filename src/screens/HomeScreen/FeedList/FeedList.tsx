import { CoinsApi } from "@src/API/CoinsApi";
import Typography from "@src/components/Typography/Typography";
import { QUERY_KEYS } from "@src/data/constants";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import * as Progress from "react-native-progress";
import CoinItem from "./CoinItem/CoinItem";

interface FeedListProps {}

const LIMIT = 10;

const FeedList: React.FC<PropsWithChildren<FeedListProps>> = () => {
  const { data, isFetchingNextPage, fetchNextPage, isLoading, hasNextPage } =
    useInfiniteQuery(
      [QUERY_KEYS.coins],
      async ({ pageParam }) => {
        return await CoinsApi.getCoins({ limit: LIMIT, offset: pageParam });
      },
      {
        getNextPageParam: (lastPage, pages) => {
          const total = lastPage?.stats?.total;
          const hasMore = pages.length * LIMIT < total;

          if (hasMore) {
            return Number(pages.length) + 1;
          }
          return undefined;
        },
      },
    );

  return (
    <View style={styles.wrapper}>
      {isLoading && (
        <View style={styles.loader}>
          <Progress.Circle size={40} thickness={210} indeterminate />
        </View>
      )}
      {data && (
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, i) => `${i}`}
          data={data.pages}
          renderItem={({ item }) => {
            return (
              <View>
                {item.coins.map((coin) => (
                  <CoinItem key={coin.uuid} {...coin} />
                ))}
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FeedList;
