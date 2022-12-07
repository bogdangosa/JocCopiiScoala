import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SQLite from 'expo-sqlite';
import SimpleCard from "../components/cards/SimpleCard";
import SimpleButton from "../components/buttons/SimpleButton"
import { inital_data } from "../database/initial_data";
import { app_structure_data } from "../database/app_structure_data";
import {colors} from "../themes/color";

const HomeScreen = ({ navigation }) => {
  const [GamesData, setGameData] = useState([]);
  const [Data,setData] = useState(null);
  const [Adding,setAdding] = useState(false);
  const DatabaseName = "MainDatabase";
  const tableName = "MainTable";

  const db = SQLite.openDatabase(DatabaseName);

  useEffect(() => {
    setGameData(app_structure_data);
    createTable(tableName);
  }, []);

  useEffect(()=>{
    if(Data==null)
      getAllItems(tableName);
  },[Data])

  const AddInitialData =()=>{
    createTable(tableName);
    inital_data.forEach(item=>{
      console.log(item);
      addItem(tableName,item);
    })
    getAllItems(tableName);
  }

  const createTable = (tableName) =>{
    db.transaction(tx => {
      console.log(tx);
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,type TEXT)`, [],
        (txObj, Results) => console.log('Table Created ',Results),
        (txObj, error) => console.log('Error ', error))
    })
  }

  const addItem = (tableName,item) =>{
    //console.log(item);
    db.transaction(tx => {
      tx.executeSql(`INSERT INTO ${tableName} ( name , type ) values ( ? , ? )`, [ item.name , item.type ],      
      (txObj, ResultsSet) => console.log('Results ', ResultsSet),
      (txObj, error) => console.log('Error ', error))
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

  const dropTable = (tableName) =>{
    db.transaction(tx => {
      tx.executeSql(`DROP TABLE ${tableName}`,[],
      (txObj, Results) => console.log('Table Dropped ',Results),
      (txObj, error) => console.log('Error ', error))
    }) // end transaction
  }



  return (
    <View style={styles.HomeScreen}>
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
        <SimpleButton onPress={()=>{dropTable(tableName),setData([])}} color={colors.green}>Sterge baza</SimpleButton>
        {Data?.map(item=>{
          return <Text>{item.name}</Text>
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
    paddingTop: 40,
  },
});

export default HomeScreen;
