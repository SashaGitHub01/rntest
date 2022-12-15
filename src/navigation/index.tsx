import { RootStack, SCREENS } from "@src/screens";
import StoriesScreen from "@src/screens/StoriesScreen/StoriesScreen";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import AppNavigation from "./AppNavigation";

const RootNavigation: React.FC<PropsWithChildren> = () => {
  return (
    <RootStack.Navigator initialRouteName={SCREENS.App}>
      <RootStack.Screen
        name={SCREENS.App}
        component={AppNavigation}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={SCREENS.Stories}
        component={StoriesScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
