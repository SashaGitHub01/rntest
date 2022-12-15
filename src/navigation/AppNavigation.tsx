import React, { PropsWithChildren } from "react";
import { theme } from "@src/styles/theme";
import { TabMain, TabProfile } from "@assets/index";
import ProfileScreen from "@src/screens/ProfileScreen/ProfileScreen";
import { RootStackScreenProps, SCREENS, Tab } from "../screens";
import HomeNavigation from "./HomeNavigation";

const AppNavigation: React.FC<
  PropsWithChildren<RootStackScreenProps<SCREENS.App>>
> = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.Home}
      screenOptions={() => ({
        tabBarActiveTintColor: theme.colors.blue,
        tabBarInactiveTintColor: theme.colors.gray,
      })}
    >
      <Tab.Screen
        name={SCREENS.Home}
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TabMain width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.Profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabProfile width={size} height={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
