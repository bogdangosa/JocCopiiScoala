import { StyleSheet, Text, Touchable, View, Image } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {colors} from "../../themes/color";

const SimpleCard2 = ({ text, color, onPress, style }) => {
  return (
    <Pressable
      style={[
        styles.SimpleCard2,style,
        { borderColor: color, backgroundColor: color },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.SimpleCardText, { color: colors.white }]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  SimpleCard2: {
    width: "100%",
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 25,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    overflow: "hidden",
    height: 100,
    flex: 1,
  },
  SimpleCardText: {
    fontSize: 25,
    marginBottom: 10,
  },
});

export default SimpleCard2;
