import { useState } from "react";
import { StyleSheet, Text, View, color,  backgroundColor } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { colors } from "../../themes/color";

const SelectableFieldButton = ({ children, onPress, more_styles , button_state , color}) => {
  return (
    <Pressable style={styles.SelectableFieldButton} onPress={()=>onPress()}>
      <View style={[styles.SelectableColor,{backgroundColor:color}]}></View>
      <Text style={button_state?[styles.SelectableFieldButtonText,{color:colors.blue}]:styles.SelectableFieldButtonText}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    SelectableFieldButton: {
    alignItems: "center",
    flexDirection:"row",
  },
  SelectableFieldButtonText:{
    color:colors.black,
    fontSize:20,
    marginLeft:5,
  },
  SelectableColor:{
    height:20,
    width:20,
  }
});

export default SelectableFieldButton;
