import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import SelectableButton from "../components/buttons/SelectableButton";
import {colors} from "../themes/color";
import * as SQLite from 'expo-sqlite';
import { ImageService } from "../utils/ImageService";
import useSound from "../hooks/useSound";

const ScriereImagine = ({field,onVerify,onComplete})=>{
    const [Mesaj, setMesaj] = useState("");
    const [Poza, setPoza]=useState(null);
    const [GameImage,setGameImage] = useState(null);
    const DatabaseName = "MainDatabase";
    const tableName = "MainTable";
    const db = SQLite.openDatabase(DatabaseName);Solution
    const [Solution,setSolution]=useState(0);
    const playSound = useSound();

      useEffect (()=>{
        getPoza();
      },[]);

      const getPoza = () =>{
        db.transaction(tx => {
          tx.executeSql(`SELECT * FROM ${tableName} WHERE type= "${field}" ORDER BY random() LIMIT 1`, null, 
          (txObj, ResultsSet) => setData(ResultsSet.rows._array),  ///declar variabila setCuvant care ia valoarea primului element din vectorul care e sortat random 
          (txObj, error) => console.log('Error ', error)
          );
        }) 
      }

      
      const setData = async (data) =>{
        console.log(data);
        const gameImage = await ImageService.GetImage(data[0].image);
        setGameImage(gameImage);
        
      }


    return (
        <View style={styles.ScriereImagine}>
            <Text style={styles.Text}>Scrie ce</Text>
            <Text style={styles.Text}>{field} apare</Text>
            <Image style={styles.imagine} source={GameImage}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    ScriereImagine:{
        alignItems:"center",
        padding:50,
    },
    Text:{
        fontWeight:"700",
        fontSize:"40",
        paddingBottom:10,
    },
    imagine:{
      padding:20,
    },
  });

export default ScriereImagine;