import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { colors } from "./colors";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );
}

export const HEADER_HEIGHT = 40;

export const Header: FC<{
  position: SharedValue<number>;
}> = ({ position }) => {
  const { top } = useSafeAreaInsets();

  const headerTitleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      position.value,
      [-10, HEADER_HEIGHT - 2, HEADER_HEIGHT],
      [0, 0, 1]
    );
    return {
      opacity,
    };
  });

  return (
    <View style={{ paddingTop: top, width: "100%" }}>
      <View
        style={{
          height: HEADER_HEIGHT,
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
        style={[{
          width: "100%",
          height: 1,
          backgroundColor: "#ddd",
        }, headerTitleStyle]}
      />
    </View>
  );
};

export const AppContainer = () => {
  const { width } = useWindowDimensions();

  const position = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      position.value = event.contentOffset.y;
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray["600"] }}>
      <Header position={position} />

      <Animated.ScrollView
        scrollEventThrottle={4}
        style={styles.container}
        onScroll={scrollHandler}
      >
        <View style={{ paddingHorizontal: 16 }}>
          <Text style={styles.title}>Settings</Text>
        </View>
        <Spacer size={8} />
        <Image
          source={require("./assets/settings.jpg")}
          style={{ width, height: width * 3.1 }}
          resizeMode="contain"
        />
      </Animated.ScrollView>
    </View>
  );
};

export const Spacer: FC<{ size: number }> = ({ size }) => (
  <View style={{ width: size, height: size }} />
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    backgroundColor: colors.gray["600"],
  },
  title: {
    fontWeight: "700",
    fontSize: 34,
    lineHeight: 41,
  },
});
