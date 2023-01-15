import { StyleSheet, Text, View, Image, TextInput, ScrollView, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import SelectableButton from "../components/buttons/SelectableButton";
import {colors} from "../themes/color";
import * as SQLite from 'expo-sqlite';
import { ImageService } from "../utils/ImageService";
import useSound from "../hooks/useSound";
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from "react-native";



const ScriereImagine = ({field,onVerify,onComplete})=>{
  const [Mesaj,setMesaj] = useState("");
  const [GameImage,setGameImage] = useState(null);
  const [GameName,setGameName]=useState(null);
  const DatabaseName = "MainDatabase";
  const tableName = "MainTable";
  const db = SQLite.openDatabase(DatabaseName);Solution
  const [Solution,setSolution]=useState(0);
  const playSound = useSound();
  const [ statusColor, setStatusColor ] = useState(colors.black);
  const [SpecialMode,setSpecialMode] = useState(false);

  useEffect (()=>{
    if(field == "cifra" || field == "litera" || field == "culoare")
        setSpecialMode(true);
    getPoza();
  },[]);

  const setareJocSpecial = () =>{
    switch(field){
      case "culoare":
        return <View style={[styles.ColorView,{backgroundColor:GameImage}]}></View>;
      case "cifra":
        return <Text style={styles.NumberText}>{GameImage}</Text>
    }
  }

  useEffect(() => {
    Verify();
  }, [onVerify]);

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
    let gameImage;
    if(SpecialMode) gameImage=data[0].image;
    else gameImage = await ImageService.GetImage(data[0].image);
    setGameName(data[0].name);
    setGameImage(gameImage);
  }

  const ResetCuvant = () => {
    
  };

  const Verify=()=>{
    const CuvantulIntrodus=Mesaj;
    console.log(GameName);
    if(CuvantulIntrodus.toUpperCase()==GameName)  
    {
      playSound("corect");
      setStatusColor(colors.green);
      setTimeout(() => {
        onComplete();
        getPoza();
        setMesaj("");
        setStatusColor(colors.black);
      },500);
    }
    else if(GameName!=null)
    {
      playSound("gresit");
      setStatusColor(colors.red);
      setTimeout(()=>setStatusColor(colors.black),500);
    }
  };
  

  return (
    <KeyboardAvoidingView  behavior="position" keyboardVerticalOffset="100">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.ScriereImagine}>
          <Text style={styles.Text}>Scrie ce</Text>
            <Text style={styles.Text}>{field} apare</Text>
              {
                SpecialMode?setareJocSpecial():
                <Image resizeMode="contain" style={styles.imagine} source={GameImage}></Image>
              }
                <View style={styles.TextBar}>
                  <TextInput
                    style={[styles.searchBar , {color:statusColor}, styles.multilineInput, styles.largeMultilineInput]}
            
                    placeholder="Scrie aici"
                    placeholderTextColor={"#EB6440"}
                    value={Mesaj}
                    onChangeText={setMesaj}
                  ></TextInput>
                </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    ScriereImagine:{
        alignItems:"center",
        padding:50,
        overflow:"hidden",
    },
    Text:{
        fontWeight:"700",
        fontSize:40,
        paddingBottom:10,
    },
    imagine:{
      margin:20,
    },
    TextBar:{
      padding:10,
      borderWidth:1,
      borderTopWidth:0,
      borderLeftWidth:0,
      borderRightWidth:0,
      borderBottomWidth:4,
      borderColor:"#D9D9D9",
      alignItems:"center",
      width:210,
    },
    searchBar:{
      width:"100%",
      alignContent:"center",
      alignItems:"center",
      fontSize:30,
      fontWeight:'500',
      textAlign:"center",
    },
    
  });

export default ScriereImagine;