import { FC } from "react";
import {Image, TextInput, View} from "react-native";


export const Search: FC<{
  searchHeight: number;
}> = ({ searchHeight }) => {

  return (
    <View
      style={[
        {
          flex: 1,
          height: searchHeight,
          borderRadius: 10,
          backgroundColor: "#E3E3E8",
          marginHorizontal: 16,
        },
      ]}
    >
      <View
        style={[
          {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          },
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
      </View>
    </View>
  );
};
