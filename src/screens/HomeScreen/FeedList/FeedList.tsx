/* eslint-disable react/jsx-no-useless-fragment */
import { CoinsApi } from "@src/API/CoinsApi";
import { QUERY_KEYS } from "@src/data/constants";
import { theme } from "@src/styles/theme";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { PropsWithChildren, useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View, FlatList } from "react-native";
import * as Progress from "react-native-progress";
import { IFormValues } from "../types/HomeScreen.types";
import CoinItem from "./CoinItem/CoinItem";
import SearchBar from "./SearchBar/SearchBar";

const renderFooter = (isFetchingNextPage: boolean) => {
  return (
    <>
      {isFetchingNextPage && (
        <View style={styles.loader}>
          <Progress.Circle size={30} thickness={5} indeterminate />
        </View>
      )}
    </>
  );
};

interface FeedListProps {}

const LIMIT = 15;

const FeedList: React.FC<PropsWithChildren<FeedListProps>> = () => {
  const { control, handleSubmit, getValues } = useForm<IFormValues>({
    mode: "onSubmit",
    defaultValues: {
      search: "",
    },
  });

  const { data, isFetchingNextPage, fetchNextPage, isLoading, hasNextPage } =
    useInfiniteQuery(
      [QUERY_KEYS.coins, getValues().search],
      async ({ pageParam }) => {
        return await CoinsApi.getCoins({ limit: LIMIT, offset: pageParam, ...getValues() });
      },
      {
        getNextPageParam: (lastPage, pages) => {
          const total = lastPage?.stats?.total;
          const hasMore = pages.length * LIMIT < total;

          if (hasMore) {
            return Number(pages.length) * LIMIT;
          }
          return undefined;
        },
      },
    );

  const onSubmit = (values: IFormValues) => {
    fetchNextPage()
  };

  return (
    <View style={styles.wrapper}>
      <SearchBar control={control} onSubmit={handleSubmit(onSubmit)} />
      {isLoading && (
        <View style={[styles.loader, { flex: 1 }]}>
          <Progress.Circle size={30} thickness={5} indeterminate />
        </View>
      )}
      {data && (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, i) => `${i}`}
            data={data.pages}
            ListFooterComponent={() => renderFooter(isFetchingNextPage)}
            onEndReached={() => fetchNextPage()}
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
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  loader: {
    paddingVertical: theme.space.sm,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FeedList;
