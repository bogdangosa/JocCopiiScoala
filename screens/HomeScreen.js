import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SQLite from 'expo-sqlite';
import SimpleCard from "../components/cards/SimpleCard";
import SimpleCard2 from "../components/cards/SimpleCard2";
import SimpleButton from "../components/buttons/SimpleButton"
import { inital_data } from "../database/initial_data";
import { app_structure_data } from "../database/app_structure_data";
import { createTable, addItem, dropTable } from "../database/database";
import {colors} from "../themes/color";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const HomeScreen = ({ navigation }) => {
  const [GamesData, setGameData] = useState([]);
  const [Data,setData] = useState(null);
  const DatabaseName = "MainDatabase";
  const tableName = "MainTable";

  const db = SQLite.openDatabase(DatabaseName);

  useEffect(() => {
    setGameData(app_structure_data);
    createTable(db,tableName);
  }, []);

  useEffect(()=>{
    if(Data==null)
      getAllItems(tableName);
  },[Data])

  const AddInitialData =()=>{
    createTable(db,tableName);
    inital_data.forEach(item=>{
      console.log(item);
      addItem(db,tableName,item);
    })
  getAllItems(tableName)
  }

  const getItemByType = () =>{
    db.transaction(tx => {
      tx.executeSql(`SELECT * FROM ${tableName}`, null, 
      (txObj, ResultsSet) => {setData(ResultsSet.rows._array);console.log(ResultsSet.rows._array);},
      (txObj, error) => console.log('Error ', error)
      );
    }) // end transaction
  }

  const getAllItems = (tableName) =>{
    db.transaction(tx => {
      tx.executeSql(`SELECT * FROM ${tableName}`, null, 
      (txObj, ResultsSet) => {setData(ResultsSet.rows._array);console.log(ResultsSet.rows._array);},
      (txObj, error) => console.log('Error ', error)
      );
    }) // end transaction
  }




  return (
    <View style={styles.HomeScreen}>
      <View style={styles.Card2}>
      <SimpleCard2
        style={{marginRight: 10,}}
        text="Învață"
        color={colors.blue}
        onPress={() => {
        navigation.navigate("Learn Menu", {
        });
      }}
      />
      <SimpleCard2
        style={{marginLeft: 10,}}
        text="Jocul zilei"
        color={colors.purple}
        onPress={() => {
        navigation.navigate("Games Menu", {
        });
        }}
      />
      </View>
      <View style={styles.GameListContainer}>
        {GamesData.map((game_category, index) => {
          return (
            <SimpleCard
              text={game_category.title}
              color={game_category.color}
              image={game_category.image}
              key={index}
              onPress={() => {
                navigation.navigate("Games Menu", {
                  title: game_category.title,
                  games: game_category.games,
                });
              }}
            />
          );
        })}
        <SimpleButton onPress={()=>AddInitialData()} color={colors.orange}>Adauaga baza</SimpleButton>
        <SimpleButton onPress={()=>{dropTable(db,tableName),setData([])}} color={colors.green}>Sterge baza</SimpleButton>
        {Data?.map(item=>{
          return <Text>{item.name+' si ' +item.image}</Text>
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  HomeScreen: {
    alignItems: "center",
  },
  GameListContainer: {
    width: "90%",
    paddingTop: 20,
  },
  Card2: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    paddingTop: 40,
    justifyContent: "space-between",
    
  }
});

export default HomeScreen;
