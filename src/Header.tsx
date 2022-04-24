import { FC } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { colors } from "../colors";

export const Header: FC<{
  titleShowOffset: number;
  headerHeight: number;
}> = ({ headerHeight, titleShowOffset }) => {
  const { top } = useSafeAreaInsets();

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
        <Text
          style={[
            {
              fontSize: 17,
              fontWeight: "600",
              letterSpacing: -0.41,
            },
          ]}
        >
          Settings
        </Text>
      </View>
      <View
        style={[
          {
            width: "100%",
            height: 1,
            backgroundColor: "#ddd",
          },
        ]}
      />
    </View>
  );
};
