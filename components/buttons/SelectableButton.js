import { useState } from "react";
import { StyleSheet, Text, View, color,  backgroundColor } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const SelectableButton = ({ children, onPress, more_styles , button_state}) => {
    
    //const [ButtonState,setButtonState] = useState(false);
        

  return (
    <Pressable style={button_state==3?[styles.SelectableButton,styles.SelectableButtonWrong,more_styles]:(button_state==2?[styles.SelectableButton,styles.SelectableButtonCorrect,more_styles]:(button_state?[styles.SelectableButton,styles.SelectableButtonSelected,more_styles]:[styles.SelectableButton,more_styles]))} onPress={()=>onPress()}>
      <Text style={button_state?[styles.SelectableButtonText,{color:"#fff"}]:styles.SelectableButtonText}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    SelectableButton: {
    borderColor:"#6C63FF",
    borderWidth:2,
    alignItems: "center",
    justifyContent: "center",
    height:50,
    width:50,
    borderRadius: 10,
  },
  SelectableButtonWrong:{
    borderColor:"#EAB62F",
    backgroundColor:"#EAB62F",    
    borderWidth:0,
  },
  SelectableButtonCorrect:{
    borderColor:"#2FEA63",
    backgroundColor:"#2FEA63",    
    borderWidth:0,
  },
  SelectableButtonSelected:{
    backgroundColor:"#6C63FF",
    borderWidth:0,
  },
  SelectableButtonText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default SelectableButton;
