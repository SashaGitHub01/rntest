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
  Home = "Home",
  Profile = 'Profile'
}

export type RootTabParamList = {
  [SCREENS.Home]: undefined;
  [SCREENS.Profile]: { userId: string };
};

export const Tab = createBottomTabNavigator<RootTabParamList>();

export interface HomeScreenProps
  extends BottomTabScreenProps<RootTabParamList, SCREENS.Home> {}

  