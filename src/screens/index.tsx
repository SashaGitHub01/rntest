import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import type { CompositeScreenProps } from "@react-navigation/native";

export enum SCREENS {
  App = "App",
  Coin = "Coin",
  HomeMain = "HomeMain",
  Stories = "Stories",
  Home = "Home",
  Profile = "Profile",
}

export type TabParamList = {
  [SCREENS.Home]: undefined;
  [SCREENS.Profile]: undefined;
};

export type RootStackParamList = {
  [SCREENS.App]: NavigatorScreenParams<TabParamList>;
  [SCREENS.Stories]: { storyId: string };
};

export type HoomStackParamList = {
  [SCREENS.Coin]: { coinId: string };
  [SCREENS.HomeMain]: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();
export const Tab = createBottomTabNavigator<TabParamList>();

export interface AppScreenProps
  extends CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList, SCREENS.App>,
    NativeStackScreenProps<RootStackParamList>
  > {}

export interface StoriesScreenProps
  extends NativeStackScreenProps<RootStackParamList, SCREENS.Stories> {}

export interface HomeScreenProps
  extends CompositeScreenProps<
    BottomTabScreenProps<TabParamList, SCREENS.Home>,
    NativeStackScreenProps<RootStackParamList>
  > {}

export interface CoinScreenProps
  extends CompositeScreenProps<
    NativeStackScreenProps<HoomStackParamList, SCREENS.Coin>,
    CompositeScreenProps<
      BottomTabScreenProps<TabParamList, SCREENS.Home>,
      NativeStackScreenProps<RootStackParamList>
    >
  > {}

export interface ProfileScreenProps
  extends CompositeScreenProps<
    BottomTabScreenProps<TabParamList, SCREENS.Profile>,
    NativeStackScreenProps<RootStackParamList>
  > {}
