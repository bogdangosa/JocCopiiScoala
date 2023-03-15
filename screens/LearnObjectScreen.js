import { StyleSheet, Text, View, Image, ImageBackgroundn, ScrollView } from "react-native";
import SimpleButton from "../components/buttons/SimpleButton";
import {colors} from "../themes/color";
import SimpleCard from "../components/cards/SimpleCard";
import { useEffect , useState} from "react";
import * as SQLite from 'expo-sqlite';
import { ImageService } from "../utils/ImageService";
import {database_names} from '../database/database_names.js';
import { getDimensions } from '../utils/Dimensions';
const {vh,vw} = getDimensions();




const LearnObjectScreen = ({ route, navigation }) => {
  
  const db = SQLite.openDatabase(database_names.database_name);

  const {name}=route.params;
  const {imagine}=route.params;
  const [Data,setData]=useState([])
  const [Color,setColor]=useState([colors.blue, colors.green, colors.orange, colors.red, colors.purple, colors.yellow, colors.brown])
  /*const getData = (type) =>{
    db.transaction(tx => {
      tx.executeSql(`SELECT * FROM ${database_names.database_words_table} WHERE type= "${type}"`, null, 
      (txObj, ResultsSet) =>{console.log(ResultsSet); setData(ResultsSet.rows._array)},
      (txObj, error) => console.log('Error ', error)
      );
    }) // end transaction
  }
  useEffect(()=>{
    getData(type)
  },[]) */

  return (
    <View style={styles.LearnObjectScreen}>
        <Text style={styles.titlu}>{name}</Text>
        
        <Image style={styles.imagine} source={ImageService.GetImage(imagine)}></Image>
        <View style={styles.text}>
        <Text style={styles.descriere}>Lupul este un animal salbatic care trăiește în pădure. El este carnivor, adică se hrănește cu carne.
         Este un animal de talie medie, având o greutate de maxim 70 de kg. Lupul trăiește în haită, care este pentru el ca și o familie.</Text>
         </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LearnObjectScreen: {
    alignItems: "center",
  },
  titlu:{
      fontSize: 5 * vh,
      fontWeight:"bold",
      paddingTop: 5 * vh,
  },
  imagine:{
    marginTop: 5 * vh,
  },
  text: {
    alignItems: "center",
  },
  descriere:{
    marginTop: 7 * vh,
    margin: 3 * vh,
    fontSize: 3 * vh,
    textAlign: 'center'
  },
  
});

export default LearnObjectScreen;
