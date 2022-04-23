import { FC } from "react";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { colors } from "../colors";

export const Header: FC<{
  position: SharedValue<number>;
  titleShowOffset: number;
  headerHeight: number;
}> = ({ position, headerHeight, titleShowOffset }) => {
  const { top } = useSafeAreaInsets();

  const headerTitleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      position.value,
      [-10, titleShowOffset - 2, titleShowOffset],
      [0, 0, 1]
    );
    return {
      opacity,
    };
  }, [position, titleShowOffset]);

  return (
    <View
      style={{
        paddingTop: top,
        width: "100%",
        backgroundColor: colors.gray["600"],
      }}
    >
      <View
        style={{
          height: headerHeight,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animated.Text
          style={[
            {
              fontSize: 17,
              fontWeight: "600",
              letterSpacing: -0.41,
            },
            headerTitleStyle,
          ]}
        >
          Settings
        </Animated.Text>
      </View>
      <Animated.View
        style={[
          {
            width: "100%",
            height: 1,
            backgroundColor: "#ddd",
          },
          headerTitleStyle,
        ]}
      />
    </View>
  );
};
