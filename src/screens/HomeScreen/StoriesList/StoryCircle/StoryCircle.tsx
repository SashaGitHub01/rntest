import Typography from "@src/components/Typography/Typography";
import { IStoryPreview } from "@src/types/stories.types";
import React, { PropsWithChildren } from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface StoryCircleProps extends IStoryPreview {}

const StoryCircle: React.FC<PropsWithChildren<StoryCircleProps>> = ({
  id,
  image,
}) => {
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({ pressed }) => ({
          opacity: pressed ? 0.4: 1,
        })}
      >
        <LinearGradient
          colors={["#ebc804", "#cc2b5e", "#753a88"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <View>
            <Image source={{ uri: image }} style={styles.img} />
          </View>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    marginRight: 15,
  },

  gradient: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
  },

  circle: {},

  img: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 25,
  },
});

export default StoryCircle;
