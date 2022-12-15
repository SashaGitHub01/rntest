import { Dimensions } from "react-native";

export const WINDOW = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

export const QUERY_KEYS = {
  stories: "stories",
  stories_list: "stories_list",
  coins: "coins",
}