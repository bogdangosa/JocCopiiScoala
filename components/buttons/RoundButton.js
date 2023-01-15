import { StyleSheet, Text, View, color,  backgroundColor } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {colors} from "../../themes/color";

const RoundButton = ({ icon, onPress, style }) => {
  return (
    <Pressable style={[styles.RoundButton,style]} onPress={onPress}>
      <Image style={styles.RoundButtonIcon} source={icon}></Image>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  RoundButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:colors.blue,
    borderRadius: 1000,
  },
  RoundButtonIcon: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default SimpleButton;
