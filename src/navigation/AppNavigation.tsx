import React, { PropsWithChildren } from "react";
import HomeScreen from "@screens/HomeScreen/HomeScreen";
import { theme } from "@src/styles/theme";
import { TabMain, TabProfile } from "@assets/index";
import ProfileScreen from "@src/screens/ProfileScreen/ProfileScreen";
import { Image, StyleProp, View, ViewProps, ViewStyle } from "react-native";
import logo from "@assets/icon.png";
import { AppScreenProps, SCREENS, Tab } from "../screens";

const AppNavigation: React.FC<PropsWithChildren<AppScreenProps>> = () => {
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
          headerLeftContainerStyle: {
            flex: 1,
            flexDirection: "row",
          },
          headerTitle: (props) => (
            <View
              {...(props as ViewProps)}
              style={[
                (props.style || {}) as StyleProp<ViewStyle>,
                {
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <View style={{ width: 50, height: 50 }}>
                <Image source={logo} resizeMode='contain' style={{width: undefined, height: undefined, aspectRatio: 1}} />
              </View>
            </View>
          ),
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
