import { StyleSheet, Text, View, color,  Image, TextInput} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {colors} from "../../themes/color";

const InputField = ({ value ,setValue , placeholder , style }) => {
  return (
    <TextInput style={[styles.InputField,style]} >

    </TextInput>
  );
};

const styles = StyleSheet.create({
    InputField: {
    alignItems: "center",
    justifyContent: "center",
    width:200,
    height:50,
  },
});

export default InputField;
