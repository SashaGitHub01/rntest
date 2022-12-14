import CoinScreen from "@src/screens/CoinScreen/CoinScreen";
import HomeScreen from "@src/screens/HomeScreen/HomeScreen";
import React, { PropsWithChildren } from "react";
import { Image, StyleProp, View, ViewProps, ViewStyle } from "react-native";
import logo from "@assets/icon.png";
import { SCREENS, HomeStack, TabScreenProps } from "../screens";

const HomeNavigation: React.FC<
  PropsWithChildren<TabScreenProps<SCREENS.Home>>
> = () => {
  return (
    <HomeStack.Navigator initialRouteName={SCREENS.HomeMain}>
      <HomeStack.Screen
        name={SCREENS.HomeMain}
        component={HomeScreen}
        options={{
          headerShown: false,
          // header: (props) => {
          //   return (
          //     <View
          //       {...(props as ViewProps)}
          //       style={[
          //         {
          //           justifyContent: "center",
          //           alignItems: "center",
          //         },
          //       ]}
          //     >
          //       <View style={{ width: 50, height: 50 }}>
          //         <Image
          //           source={logo}
          //           resizeMode="contain"
          //           style={{
          //             width: undefined,
          //             height: undefined,
          //             aspectRatio: 1,
          //           }}
          //         />
          //       </View>
          //     </View>
          //   );
          // },
        }}
      />
      <HomeStack.Screen name={SCREENS.Coin} component={CoinScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
