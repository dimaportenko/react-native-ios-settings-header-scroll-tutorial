import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { colors } from "../colors";
import { Spacer } from "./Spacer";
import { Search } from "./Search";
import { Header } from "./Header";
import { Title } from "./Title";
import {SettingsImage} from "./SettingsImage";

export const HEADER_HEIGHT = 40;
export const TITLE_HEIGHT = 42;
export const SEARCH_HEIGHT = 36;
export const OFFSET = 8;

export const SettingsScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: colors.gray["600"] }}>
      <ScrollView
        scrollEventThrottle={4}
        style={styles.container}
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

        <SettingsImage />
      </ScrollView>
      <View
        style={styles.absoluteContainer}
      >
        <Search searchHeight={SEARCH_HEIGHT} />

        <Spacer size={OFFSET} />

        <Title
          searchHeight={SEARCH_HEIGHT + OFFSET}
          titleHeight={TITLE_HEIGHT}
        />

        <Header
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
  absoluteContainer: {
    position: "absolute",
    width: "100%",
    top: 0,
    flexDirection: "column-reverse",
  }
});
