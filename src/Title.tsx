import React, { FC } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

export const Title: FC<{
  titleHeight: number;
  searchHeight: number;
}> = ({ titleHeight, searchHeight }) => {
  return (
    <View
      style={[
        styles.container,
        {
          height: titleHeight,
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
  container: {
    paddingHorizontal: 16,
  },
});
