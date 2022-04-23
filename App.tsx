import React, { FC } from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import { colors } from "./colors";
import { Spacer } from "./src/Spacer";
import { Search } from "./src/Search";
import { Header } from "./src/Header";
import { Title } from "./src/Title";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );
}

export const HEADER_HEIGHT = 40;
export const TITLE_HEIGHT = 42;
export const SEARCH_HEIGHT = 36;
export const OFFSET = 8;

export const AppContainer = () => {
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const position = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      position.value = event.contentOffset.y;
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray["600"] }}>
      <Animated.ScrollView
        scrollEventThrottle={4}
        style={styles.container}
        onScroll={scrollHandler}
        contentOffset={{x: 0, y: SEARCH_HEIGHT + OFFSET}}
      >
        <Spacer
          size={
            OFFSET +
            HEADER_HEIGHT +
            SEARCH_HEIGHT +
            TITLE_HEIGHT +
            top +
            2 * OFFSET
          }
        />

        <Image
          source={require("./assets/settings.jpg")}
          style={{ width, height: width * 3.1 }}
          resizeMode="contain"
        />
      </Animated.ScrollView>
      <View
        style={{
          position: "absolute",
          width: "100%",
          top: 0,
          flexDirection: "column-reverse",
        }}
      >
        <Search position={position} searchHeight={SEARCH_HEIGHT} />

        <Spacer size={OFFSET} />

        <Title
          position={position}
          searchHeight={SEARCH_HEIGHT + OFFSET}
          titleHeight={TITLE_HEIGHT}
        />


        <Header
          position={position}
          titleShowOffset={TITLE_HEIGHT + SEARCH_HEIGHT + OFFSET}
          headerHeight={HEADER_HEIGHT}
        />
      </View>
    </View>
  );
};

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
