import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, NavigatorScreenParams } from "@react-navigation/native";
import type { CompositeScreenProps } from "@react-navigation/native";

export enum SCREENS {
  App = "App",
  Coin = "Coin",
  HomeMain = "HomeMain",
  Stories = "Stories",
  Home = "Home",
  Profile = "Profile",
}

export type HomeStackParamList = {
  [SCREENS.Coin]: { coinId: string };
  [SCREENS.HomeMain]: undefined;
};

export type TabParamList = {
  [SCREENS.Home]: NavigatorScreenParams<HomeStackParamList>;
  [SCREENS.Profile]: undefined;
};

export type RootStackParamList = {
  [SCREENS.App]: NavigatorScreenParams<TabParamList>;
  [SCREENS.Stories]: { storyId: string };
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();
export const Tab = createBottomTabNavigator<TabParamList>();
export const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type TabScreenProps<T extends keyof TabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
  
  export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeStackParamList, T>,
    TabScreenProps<keyof TabParamList>
  >;