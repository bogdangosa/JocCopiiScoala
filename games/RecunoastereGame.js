import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import SelectableButton from "../components/buttons/SelectableButton";
import {colors} from "../themes/color";
import * as SQLite from 'expo-sqlite';
import { ImageService } from "../utils/ImageService";


const RecunoastereGame = ({field, onVerify,onComplete}) => {
    const [butoane,setbutoane]=useState([false,false,false,false])
    const [Variante,setVariante]=useState(null)
    const DatabaseName = "MainDatabase";
    const tableName = "MainTable";
    const db = SQLite.openDatabase(DatabaseName);Solution
    const [Solution,setSolution]=useState(0);


    useEffect(() => {
      //se apeleaza cand apesi butonul de verificare
      Verify();
    }, [onVerify]);

    useEffect (()=>{
      getVarinte();
      setSolution(Math.floor(Math.random() * 4) + 1);
    },[]);

    const getVarinte = () =>{
      db.transaction(tx => {
        tx.executeSql(`SELECT * FROM ${tableName} ORDER BY random() LIMIT 4`, null, 
        (txObj, ResultsSet) => setVariante(ResultsSet.rows._array),
        (txObj, error) => console.log('Error ', error)
        );
      }) // end transaction
    }

    const Verify=()=>{
      if(Variante==null)
        return;
      let ArrayButoane = [...butoane];
      for (let i=0;i<=3;i++)
      {
        if (i==Solution){
          if (ArrayButoane[i]==1){
            ArrayButoane[i]=2;
            onComplete();
          }
        }
        else if (ArrayButoane[i]==1)
          ArrayButoane[i]=3;
        
      }
      console.log(ArrayButoane);
      setbutoane(ArrayButoane);
    }

    if(Variante==null)
      return <Text>Loading</Text>
  
    const GameImage = ImageService.GetImage(Variante[Solution].image);

  return (
    <View style={styles.RecunoastereGame} >
      <Text style={styles.text}>Ce {field} este ?</Text>
      <Image style={styles.imagine} source={GameImage}></Image>
      <View style={styles.poz_butoane}>
      <SelectableButton button_state={butoane[0]} onPress={()=>setbutoane([true,false,false,false])} more_styles={styles.buton}>{Variante[0].name}</SelectableButton>
      <SelectableButton button_state={butoane[1]} onPress={()=>setbutoane([false,true,false,false])} more_styles={styles.buton}>{Variante[1].name}</SelectableButton>
      </View>
      <View style={styles.poz_butoane}>
      <SelectableButton button_state={butoane[2]} onPress={()=>setbutoane([false,false,true,false])} more_styles={styles.buton}>{Variante[2].name}</SelectableButton>
      <SelectableButton button_state={butoane[3]} onPress={()=>setbutoane([false,false,false,true])} more_styles={styles.buton}>{Variante[3].name}</SelectableButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RecunoastereGame: {
    alignItems: "center",
    paddingTop: "20%",
    marginBottom: 25,
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
  imagine: {
    marginTop: 30,
    marginBottom: 30,
  },
});

export default RecunoastereGame;
