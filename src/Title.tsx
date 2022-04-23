import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
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
  const containerStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      position.value,
      [0, searchHeight, searchHeight + titleHeight],
      [0, 0, -titleHeight],
      Extrapolation.CLAMP,
    );
    return {
      transform:[{translateY}]
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
