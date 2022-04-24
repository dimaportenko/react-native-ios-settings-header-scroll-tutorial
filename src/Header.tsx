import { FC } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../colors";

export const Header: FC<{
  titleShowOffset: number;
  headerHeight: number;
}> = ({ headerHeight, titleShowOffset }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: top,
        },
      ]}
    >
      <View
        style={[
          styles.textContainer,
          {
            height: headerHeight,
          },
        ]}
      >
        <Text style={styles.text}>Settings</Text>
      </View>
      <View style={styles.border} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.gray["600"],
  },
  border: {
    width: "100%",
    height: 1,
    backgroundColor: "#ddd",
  },
  text: {
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: -0.41,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
