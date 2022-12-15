import CustomInput from "@src/components/CustomInput/CustomInput";
import { theme } from "@src/styles/theme";
import { IStoryDetails } from "@src/types/stories.types";
import React, { PropsWithChildren, useState } from "react";
import { View, Image, StyleSheet } from "react-native";

interface StoryProps {
  story: IStoryDetails;
}

const Story: React.FC<PropsWithChildren<StoryProps>> = ({ story }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <View style={styles.image_cont}>
          <Image source={{ uri: story.list[activeImg] }} style={styles.image} />
        </View>
      </View>
      <View style={styles.footer}>
        <CustomInput color="black" placeholder="Comment" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  content: {
    flex: 1,
  },

  footer: {
    paddingHorizontal: theme.space.sm,
    paddingVertical: theme.space.md,
  },

  image_cont: {
   flex: 1,
  },

  image: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    borderRadius: 7,
    flex: 1,
  }
});

export default Story;
