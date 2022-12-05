import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import SelectableButton from "../components/buttons/SelectableButton";


const RecunoastereGame = ({field}) => {
    const [butoane,setbutoane]=useState([false,false,false,false])

  

  return (
    <View style={styles.RecunoastereGame} >
      <Text style={styles.text}>Ce {field} este ?</Text>
      <View style={styles.poz_butoane}>
      <SelectableButton button_state={butoane[0]} onPress={()=>setbutoane([true,false,false,false])} more_styles={styles.buton}>Cal</SelectableButton>
      <SelectableButton button_state={butoane[1]} onPress={()=>setbutoane([false,true,false,false])} more_styles={styles.buton}>Caine</SelectableButton>
      </View>
      <View style={styles.poz_butoane}>
      <SelectableButton button_state={butoane[2]} onPress={()=>setbutoane([false,false,true,false])} more_styles={styles.buton}>Lup</SelectableButton>
      <SelectableButton button_state={butoane[3]} onPress={()=>setbutoane([false,false,false,true])} more_styles={styles.buton}>Vaca</SelectableButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RecunoastereGame: {
    alignItems: "center",
    paddingTop: "20%",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
  buton: {
    width: 125,
    height: 50,
    margin: 10,
  },
  poz_butoane: {
    flexDirection: "row",
  },
});

export default RecunoastereGame;
