import { StyleSheet, Text, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const SimpleButton = ({ text, onPress }) => {
  return (
    <Pressable style={styles.SimpleButton} onPress={onPress}>
      <Text style={styles.SimpleButtonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  SimpleButton: {
    backgroundColor: "#6C63FF",
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
