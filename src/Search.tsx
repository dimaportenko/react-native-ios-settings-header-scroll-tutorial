import { FC } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

export const Search: FC<{
  searchHeight: number;
}> = ({ searchHeight }) => {
  return (
    <View
      style={[
        styles.container,
        {
          height: searchHeight,
        },
      ]}
    >
      <View style={styles.row}>
        <Image
          source={require("../assets/magnifyingglass.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <TextInput style={styles.textInput} placeholder="Search" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 17,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#E3E3E8",
    marginHorizontal: 16,
  },
  image: { width: 16, height: 16, marginLeft: 8, marginRight: 6 },
});
