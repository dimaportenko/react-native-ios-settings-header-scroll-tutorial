import React, { FC } from "react";
import { StyleSheet, Text, useWindowDimensions } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

export const Title: FC<{
  position: SharedValue<number>;
  titleHeight: number;
  searchHeight: number;
}> = ({ position, titleHeight, searchHeight }) => {
  const { width } = useWindowDimensions();
  const containerStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      position.value,
      [-300, 0, searchHeight, searchHeight + titleHeight],
      [300, 0, 0, -titleHeight],
      Extrapolation.CLAMP
    );
    const scale = interpolate(
      position.value,
      [-200, 0],
      [1.1, 1],
      Extrapolation.CLAMP
    );
    return {
      transform: [
        { translateY: translateY + titleHeight * (scale - 1) * 0.5 },
        { translateX: (width - 32) * (scale - 1) * 0.5 },
        { scale },
      ],
    };
  }, [position, titleHeight, searchHeight]);

  return (
    <Animated.View
      style={[
        {
          height: titleHeight,
          paddingHorizontal: 16,
        },
        containerStyle,
      ]}
    >
      <Text style={styles.title}>Settings</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 34,
    lineHeight: 41,
  },
});
