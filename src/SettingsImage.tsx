import { Image, useWindowDimensions } from "react-native";
import React from "react";

export const SettingsImage = () => {
  const { width } = useWindowDimensions();
  return (
    <Image
      source={require("../assets/settings.jpg")}
      style={{ width, height: width * 3.1 }}
      resizeMode="contain"
    />
  );
};
