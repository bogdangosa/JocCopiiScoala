import { useState } from "react";
import { StyleSheet, Text, View, color,  backgroundColor } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {colors} from "../../themes/color";

const ProgressBar = ({percentage}) => {

  return (
    <View style={styles.ProgressBarContainer}>
        <View style={[styles.ProgressBar,{width: `${percentage}%`}]}>
        
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    ProgressBarContainer:{
        alignItems: "flex-start",
        height: 40,
        width: "70%",
        backgroundColor:"#e3e3e3",
        borderRadius:5,
        overflow:"hidden",
    },
    ProgressBar: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor:colors.blue
  },

});

export default ProgressBar;
