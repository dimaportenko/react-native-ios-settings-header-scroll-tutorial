import React, {FC} from "react";
import {View} from "react-native";

export const Spacer: FC<{ size: number }> = ({size}) => (
  <View style={{width: size, height: size}}/>
);
