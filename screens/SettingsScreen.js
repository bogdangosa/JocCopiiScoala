import { StyleSheet, Text, View , Image, TouchableOpacity} from "react-native";
import SimpleButton from "../components/buttons/SimpleButton";
import { inital_data } from "../database/initial_data";
import {database_names} from '../database/database_names.js';
import { useEffect, useState } from "react";
import * as SQLite from 'expo-sqlite';
import {colors} from "../themes/color";
import { ScrollView } from "react-native-gesture-handler";
import { createTable, addItem, dropTable } from "../database/database";
import { useMyUserUpdate } from "../contexts/UserContext";
import SwitchCard from "../components/Switchcard/SwitchCard";

//import { Switch } from "react-native-switch";
import { Switch } from "react-native-gesture-handler";

const SettingsScreen =({route , navigation})=>{

    const [Data,setData] = useState(null);
    const db = SQLite.openDatabase(database_names.database_name);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    

    const updateUser = useMyUserUpdate();

    useEffect(()=>{
        if(Data==null)
          getAllItems(database_names.database_words_table);
    
    },[Data])

    const getAllItems = (tableName) =>{
        db.transaction(tx => {
          tx.executeSql(`SELECT * FROM ${tableName}`, null, 
          (txObj, ResultsSet) => {setData(ResultsSet.rows._array);/*console.log(ResultsSet.rows._array);*/},
          (txObj, error) => console.log('Error ', error)
          );
        }) // end transaction
    }

    const AddInitialData =()=>{
        createTable(db,database_names.database_words_table,database_names.database_words_parameters);
        inital_data.forEach(item=>{
          //console.log(item);
          addItem(db,database_names.database_words_table,item);
        })
        getAllItems(database_names.database_words_table)
      }


    return ( 
        <View style={styles.SettingsScreen}>
           
           <View style={styles.portiuni}>
                <Text style={styles.Texte}>Sound</Text>

                <Switch
                trackColor={{false: 'green', true: '#2FEA63'}}
                thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                activeText={'On'}
                inActiveText={'Off'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
            </View>
            <View style={styles.portiuni}>
                <Text style={styles.Texte}>Display time counter</Text>

                <Switch
                trackColor={{false: 'green', true: '#2FEA63'}}
                thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                activeText={'On'}
                inActiveText={'Off'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
            </View>
            <SwitchCard/>


            <ScrollView scrollIndicatorInsets={{ right: 1 }}>
        
                <SimpleButton onPress={()=>AddInitialData()} color={colors.orange}>Adauaga baza</SimpleButton>
                <SimpleButton onPress={()=>{dropTable(db,database_names.database_words_table),setData([])}} color={colors.green}>Sterge baza</SimpleButton>
                <SimpleButton onPress={()=>{dropTable(db,database_names.database_user_table);updateUser("no user")}} color={colors.red}>Sterge useri</SimpleButton>
                {Data?.map((item,index)=>{
                return <Text key={index}>{item.name+' si ' +item.image + ' si '+item.description}</Text>
                })}
            </ScrollView>
        </View> 
    );
};

const styles = StyleSheet.create({
    screen:{
        width:"100%",
        flexDirection:"column",
        justifyContent:"center",
    },
    cards:{
        padding:10,
        paddingTop:60,
    },

    Texte:{
        fontWeight:'bold',
        fontSize:30,
        paddingRight:120,
        
        paddingBottom:30,
    },

    portiuni:{
        flex:1,
        flexDirection:"row",
        padding:30,
        paddingBottom:80,
    },
    
   });
   

export default SettingsScreen;