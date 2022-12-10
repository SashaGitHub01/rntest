import React, { PropsWithChildren } from "react";
import { SCREENS, Tab } from "../screens";
import HomeScreen from "@screens/HomeScreen/HomeScreen";
import { theme } from "@src/styles/theme";
import { TabMain, TabProfile } from "@assets/index";

interface AppNavigationProps {}

const AppNavigation: React.FC<PropsWithChildren<AppNavigationProps>> = ({}) => {
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
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabMain width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.Profile}
        component={HomeScreen}
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
