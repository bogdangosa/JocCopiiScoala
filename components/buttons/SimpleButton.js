import { StyleSheet, Text, View, color,  backgroundColor } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const SimpleButton = ({ children, onPress, color }) => {
  return (
    <Pressable style={[styles.SimpleButton,{backgroundColor:color}]} onPress={onPress}>
      <Text style={styles.SimpleButtonText}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  SimpleButton: {
    backgroundColor:"#362DD2",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 120,
    borderRadius: 10,
  },
  SimpleButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default SimpleButton;
