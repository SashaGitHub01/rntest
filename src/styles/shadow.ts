import { ViewStyle, Platform, ShadowStyleIOS } from "react-native";

interface IGenShadowParams {
  offset: ShadowStyleIOS["shadowOffset"];
  shadowColorIos: string;
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
  shadowColorAndroid: string;
}

interface IGenerateBoxShadowStyle {
  (params: Partial<IGenShadowParams>): ViewStyle | undefined;
}

export const generateBoxShadowStyle: IGenerateBoxShadowStyle = ({
  offset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
}) => {
  if (Platform.OS === "ios") {
    return {
      shadowColor: shadowColorIos,
      shadowOffset: offset,
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === "android") {
    return {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};
