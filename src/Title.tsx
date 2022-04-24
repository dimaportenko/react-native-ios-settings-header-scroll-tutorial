import React, { FC } from "react";
import {StyleSheet, Text, useWindowDimensions, View} from "react-native";

export const Title: FC<{
  titleHeight: number;
  searchHeight: number;
}> = ({ titleHeight, searchHeight }) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        {
          height: titleHeight,
          paddingHorizontal: 16,
        },
      ]}
    >
      <Text style={styles.title}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 34,
    lineHeight: 41,
  },
});
