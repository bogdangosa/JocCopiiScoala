import { StyleSheet, Text, View, Image, ImageBackgroundn, ScrollView } from "react-native";
import SimpleButton from "../components/buttons/SimpleButton";
import {colors} from "../themes/color";
import SimpleCard from "../components/cards/SimpleCard";
import { useEffect , useState} from "react";
import * as SQLite from 'expo-sqlite';
import { ImageService } from "../utils/ImageService";


const LearnScreen = ({ route, navigation }) => {

  const DatabaseName = "MainDatabase";
  const tableName = "MainTable";
  const db = SQLite.openDatabase(DatabaseName);

  const {type}=route.params;

  const [Data,setData]=useState([])
  const [Color,setColor]=useState([colors.blue, colors.green, colors.orange, colors.red, colors.purple, colors.yellow, colors.brown])
  const getData = (type) =>{
    db.transaction(tx => {
      tx.executeSql(`SELECT * FROM ${tableName} WHERE type= "${type}"`, null, 
      (txObj, ResultsSet) =>{console.log(ResultsSet); setData(ResultsSet.rows._array)},
      (txObj, error) => console.log('Error ', error)
      );
    }) // end transaction
  }
  useEffect(()=>{
    getData(type)
  },[]) 

  return (
    <View style={styles.LearnScreen}>
    <ScrollView style={styles.LearnListContainer}>
      {Data.map((type,index)=>{
        return (
          <SimpleCard
            text={type.name}
            color={Color[index%7]}
            image={ImageService.GetImage(type.image)}
            onPress={() => {
              navigation.navigate("", {
              });
            }}
          />
        )
      })}
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  LearnScreen: {
    alignItems: "center",
  },
  LearnListContainer: {
    width: "90%",
    paddingTop: 40,
    paddingBottom:40,
    paddingRight:20,
    height:"95%",
  },

});

export default LearnScreen;
