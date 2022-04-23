import { FC } from "react";
import { Image, TextInput } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

export const Search: FC<{
  position: SharedValue<number>;
  searchHeight: number;
}> = ({ position, searchHeight }) => {
  const titleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(position.value, [-10, 0, 4], [1, 1, 0]);
    return {
      opacity,
    };
  }, [position]);

  const containerStyle = useAnimatedStyle(() => {
    const height = interpolate(
      position.value,
      [0, searchHeight, 100],
      [searchHeight, 0, 0],
      Extrapolation.CLAMP
    );
    return {
      height,
    };
  }, [position]);

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          height: searchHeight,
          borderRadius: 10,
          backgroundColor: "#E3E3E8",
          marginHorizontal: 16,
        },
        containerStyle,
      ]}
    >
      <Animated.View
        style={[
          {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          },
          titleStyle,
        ]}
      >
        <Image
          source={require("../assets/magnifyingglass.png")}
          style={{ width: 16, height: 16, marginLeft: 8, marginRight: 6 }}
          resizeMode="contain"
        />
        <TextInput
          style={{
            fontSize: 17,
          }}
          placeholder="Search"
        />
      </Animated.View>
    </Animated.View>
  );
};
